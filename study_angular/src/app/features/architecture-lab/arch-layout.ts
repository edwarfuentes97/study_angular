import { Component } from '@angular/core';
import { LabLayoutComponent } from '../../shared/components/lab-layout';

@Component({
  selector: 'app-arch-layout',
  imports: [LabLayoutComponent],
  template: `<app-lab-layout title="Arquitectura" icon="🟠" [steps]="steps" />`
})
export class ArchLayoutComponent {
  steps = [
    { path: '.', label: 'Estudiar', icon: '📖' },
    { path: 'examples', label: 'Ejemplos', icon: '💡' },
    { path: 'lab', label: 'Lab', icon: '🧪' },
  ];
}
