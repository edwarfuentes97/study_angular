// Color-code headings based on emoji indicators
document.querySelectorAll('h1, h2, h3, h4').forEach(el => {
    const t = el.textContent;
    if (t.includes('🔴')) el.style.color = '#f85149';
    else if (t.includes('🟠')) el.style.color = '#d29922';
    else if (t.includes('🟡')) el.style.color = '#e3b341';
    else if (t.includes('🟢')) el.style.color = '#3fb950';
    else if (t.includes('💬')) el.style.color = '#58a6ff';
    else if (t.includes('🏗️')) el.style.color = '#bc8cff';
    else if (t.includes('📅')) el.style.color = '#d29922';
    else if (t.includes('📚')) el.style.color = '#58a6ff';
    else if (t.includes('✅')) el.style.color = '#3fb950';
});

// Convert checkbox text patterns to interactive checkboxes
const STORAGE_KEY = 'plan-estudios-checklist';
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

document.querySelectorAll('li').forEach((li, idx) => {
    if (li.innerHTML.startsWith('[ ]')) {
        const key = 'cb-' + idx;
        const isChecked = saved[key] || false;
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = isChecked;
        cb.addEventListener('change', () => {
            saved[key] = cb.checked;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
            li.classList.toggle('checked', cb.checked);
            updateProgress();
        });
        li.innerHTML = li.innerHTML.slice(3);
        li.prepend(cb);
        if (isChecked) li.classList.add('checked');
    } else if (li.innerHTML.startsWith('[x]') || li.innerHTML.startsWith('[X]')) {
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = true;
        li.innerHTML = li.innerHTML.slice(3);
        li.prepend(cb);
        li.classList.add('checked');
    }
});

// Progress counter for checklist
function updateProgress() {
    const section = document.querySelector('.checklist-section');
    if (!section) return;
    const total = section.querySelectorAll('input[type="checkbox"]').length;
    const done = section.querySelectorAll('input[type="checkbox"]:checked').length;
    let counter = document.getElementById('checklist-progress');
    if (!counter) {
        counter = document.createElement('div');
        counter.id = 'checklist-progress';
        counter.style.cssText = 'text-align:center;margin:0.5rem 0;font-size:0.9rem;color:#8b949e;';
        section.parentNode.insertBefore(counter, section);
    }
    const pct = Math.round((done / total) * 100);
    const bar = '█'.repeat(Math.round(pct / 5)) + '░'.repeat(20 - Math.round(pct / 5));
    counter.innerHTML = `<span style="color:#3fb950">${done}</span>/${total} completados  <span style="font-family:monospace;letter-spacing:-1px">${bar}</span>  ${pct}%`;
}
updateProgress();
