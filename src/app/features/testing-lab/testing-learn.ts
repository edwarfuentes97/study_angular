import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-testing-learn',
  imports: [AutoGlossaryDirective],
  templateUrl: './testing-learn.html',
  styleUrl: './testing-learn.css'
})
export class TestingLearnComponent {}
