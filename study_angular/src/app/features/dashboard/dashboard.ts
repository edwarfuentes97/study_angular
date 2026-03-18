import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService, STUDY_TOPICS } from '../../core/services/progress.service';
import { TopicId } from '../../shared/models/product.model';

@Component({
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  protected readonly progress = inject(ProgressService);
  protected readonly topics = STUDY_TOPICS;

  /** Identity helper so the template can pass TopicId without casting. */
  protected topicId(id: string): TopicId {
    return id as TopicId;
  }
}
