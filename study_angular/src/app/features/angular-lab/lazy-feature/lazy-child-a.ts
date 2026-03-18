import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-child-a',
  templateUrl: './lazy-child-a.html',
  styleUrl: './lazy-child-a.css',
})
export class LazyChildAComponent {
  loadedAt = new Date().toLocaleTimeString();
}
