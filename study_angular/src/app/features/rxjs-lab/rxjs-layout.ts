import { Component } from '@angular/core';
import { LabLayoutComponent } from '../../shared/components/lab-layout';

@Component({
  imports: [LabLayoutComponent],
  template: `<app-lab-layout title="RxJS — Programación Reactiva" icon="🔴" [steps]="steps" />`
})
export class RxjsLayoutComponent {
  steps = [
    { path: '.', label: 'Estudiar', icon: '📖' },
    { path: 'examples', label: 'Ejemplos', icon: '💡' },
    { path: 'lab', label: 'Lab', icon: '🧪' },
  ];
}
