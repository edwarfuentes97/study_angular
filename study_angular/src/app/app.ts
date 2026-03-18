import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProgressService, STUDY_TOPICS } from './core/services/progress.service';
import { GlobalSearchComponent } from './shared/components/global-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, GlobalSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly progressService = inject(ProgressService);
  protected readonly topics = STUDY_TOPICS;
}
