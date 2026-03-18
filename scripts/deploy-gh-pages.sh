#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKTREE_DIR="$(mktemp -d)"
PUBLISH_DIR="$(mktemp -d)"
REMOTE_URL="$(git -C "$REPO_ROOT" config --get remote.origin.url)"

cleanup() {
  git -C "$REPO_ROOT" worktree remove --force "$WORKTREE_DIR" >/dev/null 2>&1 || true
  rm -rf "$WORKTREE_DIR" "$PUBLISH_DIR"
}

trap cleanup EXIT

if [[ -z "${REMOTE_URL:-}" ]]; then
  echo "No se encontró remote.origin.url" >&2
  exit 1
fi

echo "▶ Creating clean worktree from committed HEAD..."
git -C "$REPO_ROOT" worktree add --detach "$WORKTREE_DIR" HEAD >/dev/null

if [[ -d "$REPO_ROOT/node_modules" && ! -e "$WORKTREE_DIR/node_modules" ]]; then
  ln -s "$REPO_ROOT/node_modules" "$WORKTREE_DIR/node_modules"
else
  echo "▶ Installing dependencies in clean worktree..."
  npm --prefix "$WORKTREE_DIR" ci
fi

echo "▶ Building production app for GitHub Pages from clean HEAD..."
npm --prefix "$WORKTREE_DIR" run build -- --configuration production --base-href /study_angular/

DIST_DIR="$WORKTREE_DIR/dist/study_angular/browser"
if [[ ! -d "$DIST_DIR" ]]; then
  echo "No se encontró el directorio de build: $DIST_DIR" >&2
  exit 1
fi

echo "▶ Preparing gh-pages branch payload..."
cp -R "$DIST_DIR"/. "$PUBLISH_DIR"/
touch "$PUBLISH_DIR/.nojekyll"

cd "$PUBLISH_DIR"
git init >/dev/null
git checkout -b gh-pages >/dev/null
git add .
git -c user.name="$(git -C "$REPO_ROOT" config user.name || echo 'GitHub Pages Deploy')" \
    -c user.email="$(git -C "$REPO_ROOT" config user.email || echo 'pages@example.com')" \
    commit -m "Deploy static site to gh-pages" >/dev/null
git remote add origin "$REMOTE_URL"

echo "▶ Pushing to gh-pages..."
git push -f origin gh-pages

echo
echo "✓ GitHub Pages payload actualizado."
echo "  URL: https://edwarfuentes97.github.io/study_angular/"
