import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-rxjs-learn',
  imports: [AutoGlossaryDirective],
  templateUrl: './rxjs-learn.html',
  styleUrl: './rxjs-learn.css'
})
export class RxjsLearnComponent {}
