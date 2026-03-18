import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-ts-learn',
  imports: [AutoGlossaryDirective],
  templateUrl: './ts-learn.html',
  styleUrl: './ts-learn.css'
})
export class TsLearnComponent {}
