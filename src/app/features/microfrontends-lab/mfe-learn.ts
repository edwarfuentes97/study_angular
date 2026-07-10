import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-mfe-learn',
  imports: [AutoGlossaryDirective],
  templateUrl: './mfe-learn.html',
  styleUrl: './mfe-learn.css'
})
export class MfeLearnComponent {}
