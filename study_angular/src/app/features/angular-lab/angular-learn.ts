import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-angular-learn',
  imports: [AutoGlossaryDirective],
  templateUrl: './angular-learn.html',
  styleUrl: './angular-learn.css'
})
export class AngularLearnComponent {}
