import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lazy-demo',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './lazy-demo.html',
  styleUrl: './lazy-demo.css',
})
export class LazyDemoComponent {
  loadedAt = new Date().toLocaleTimeString();
}
