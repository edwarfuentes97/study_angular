import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-child-b',
  templateUrl: './lazy-child-b.html',
  styleUrl: './lazy-child-b.css',
})
export class LazyChildBComponent {
  loadedAt = new Date().toLocaleTimeString();
}
