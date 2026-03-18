import { Component } from '@angular/core';
import { LabLayoutComponent } from '../../shared/components/lab-layout';

@Component({
  imports: [LabLayoutComponent],
  templateUrl: './fundamentals-layout.html',
})
export class FundamentalsLayoutComponent {
  steps = [
    { path: '.', label: 'Estudiar', icon: '📖' },
    { path: 'examples', label: 'Ejemplos', icon: '💡' },
    { path: 'lab', label: 'Lab', icon: '🧪' },
  ];
}
