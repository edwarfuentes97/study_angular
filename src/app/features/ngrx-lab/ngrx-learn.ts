import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-ngrx-learn',
  imports: [AutoGlossaryDirective],
  templateUrl: './ngrx-learn.html',
  styleUrl: './ngrx-learn.css'
})
export class NgrxLearnComponent {}
