import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface LabStep {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-lab-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './lab-layout.html',
  styleUrl: './lab-layout.css'
})
export class LabLayoutComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() steps: LabStep[] = [];
}
