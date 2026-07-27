import { Component } from '@angular/core';
import { LabLayoutComponent } from '../../shared/components/lab-layout';

@Component({
  imports: [LabLayoutComponent],
  templateUrl: './ai-lab-layout.html'
})
export class AiLabLayoutComponent {
  steps = [
    { path: '.', label: 'Introducción', icon: '🧠' },
    { path: 'concepts', label: 'Conceptos', icon: '💡' },
    { path: 'examples', label: 'Ejemplos', icon: '⚙️' },
    { path: 'lab', label: 'Labs', icon: '🧪' },
  ];
}
