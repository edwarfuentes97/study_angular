import { Component } from '@angular/core';
import { LabLayoutComponent } from '../../shared/components/lab-layout';

@Component({
  selector: 'app-ts-layout',
  imports: [LabLayoutComponent],
  template: `<app-lab-layout title="TypeScript Avanzado" icon="🔵" [steps]="steps" />`
})
export class TsLayoutComponent {
  steps = [
    { path: '.', label: 'Estudiar', icon: '📖' },
    { path: 'examples', label: 'Ejemplos', icon: '💡' },
    { path: 'lab', label: 'Lab', icon: '🧪' },
  ];
}
