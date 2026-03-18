import { Component } from '@angular/core';
import { LabLayoutComponent } from '../../shared/components/lab-layout';

@Component({
  imports: [LabLayoutComponent],
  template: `<app-lab-layout title="NgRx — State Management" icon="🔴" [steps]="steps" />`
})
export class NgrxLayoutComponent {
  steps = [
    { path: '.', label: 'Estudiar', icon: '📖' },
    { path: 'examples', label: 'Ejemplos', icon: '💡' },
    { path: 'lab', label: 'Lab', icon: '🧪' },
  ];
}
