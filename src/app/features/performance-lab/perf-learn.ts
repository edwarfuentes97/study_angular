import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-perf-learn',
  imports: [AutoGlossaryDirective],
  templateUrl: './perf-learn.html',
  styleUrl: './perf-learn.css'
})
export class PerfLearnComponent {}
