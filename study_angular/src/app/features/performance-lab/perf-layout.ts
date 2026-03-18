import { Component } from '@angular/core';
import { LabLayoutComponent } from '../../shared/components/lab-layout';

@Component({
  selector: 'app-perf-layout',
  imports: [LabLayoutComponent],
  template: `<app-lab-layout title="Performance" icon="🟠" [steps]="steps" />`
})
export class PerfLayoutComponent {
  steps = [
    { path: '.', label: 'Estudiar', icon: '📖' },
    { path: 'examples', label: 'Ejemplos', icon: '💡' },
    { path: 'lab', label: 'Lab', icon: '🧪' },
  ];
}
