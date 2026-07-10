# 🎯 StudyAngular — Guía de Estudio Interactiva

Aplicación Angular 20 para estudiar y practicar el ecosistema frontend a nivel profesional.
Cada categoría tiene su propio **lab** con tres pestañas: **Estudiar 📖** (teoría en profundidad con
ejemplos, errores comunes y preguntas de entrevista), **Ejemplos 💡** (demos interactivas o
configuraciones comentadas) y **Lab 🧪** (ejercicios prácticos con criterios de aceptación).

**Demo:** https://edwarfuentes97.github.io/study_angular/

## 📚 Categorías de estudio

| Categoría | Ruta | Nivel |
|---|---|---|
| 🔴 NgRx — State Management | `/lab/ngrx` | Crítico |
| 🔴 RxJS — Programación Reactiva | `/lab/rxjs` | Crítico |
| 🔴 Angular Core Avanzado | `/lab/angular` | Crítico |
| 🔴 TypeScript Avanzado | `/lab/typescript` | Crítico |
| 🟢 Angular Fundamentals | `/lab/fundamentals` | Crítico |
| 🟠 Arquitectura | `/lab/architecture` | Alto |
| 🟠 Performance | `/lab/performance` | Alto |
| 🟠 Testing (unit) | `/lab/testing` | Alto |
| 🧪 Playwright E2E Testing | `/lab/playwright` | Alto |
| 🧩 Microfrontends | `/lab/microfrontends` | Alto |
| 💬 Behavioral & System Design | `/guide` | Complementario |

Funcionalidades transversales:

- **Progreso por subtema** persistido en `localStorage`, con barras de avance por categoría y globales.
- **Buscador global con glosario**: cualquier término técnico del glosario navega directo a su sección.
- **Auto-glosario**: los términos conocidos se resaltan en el contenido con su definición.

## 🚀 Desarrollo

```bash
npm install
npm start          # http://localhost:4200
```

## 🏗️ Build

```bash
npm run build      # artefactos en dist/
```

## ✅ Tests

```bash
npm test                     # unit tests (Karma + Jasmine)
npm run test:e2e             # Playwright E2E (chromium, firefox, webkit)
npm run test:e2e:smoke       # solo tests @smoke
npm run test:e2e:regression  # solo tests @regression
npm run test:e2e:ui          # modo UI interactivo
npm run test:e2e:report      # abrir el último reporte HTML
```

Los tests E2E generan documentación por test en `test-documentation/` (carpeta ignorada por git).

## 🔄 CI/CD

Cada push a `main` ejecuta el pipeline de GitHub Actions (`.github/workflows/playwright.yml`):
build → unit tests → E2E en 3 navegadores → **deploy automático a GitHub Pages**.

## 📁 Estructura

```
src/app/
├── core/          # guards, interceptors, servicios singleton (progreso, mock API)
├── shared/        # lab-layout, buscador global, glosario, directivas, modelos
└── features/      # un directorio por categoría de estudio (lazy loaded)
    ├── dashboard/
    ├── study-guide/
    └── *-lab/     # ngrx, rxjs, angular, typescript, fundamentals,
                   # architecture, performance, testing, playwright, microfrontends
```
