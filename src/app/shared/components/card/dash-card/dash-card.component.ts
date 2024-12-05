import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dash-card',
  imports: [],
  standalone: true,
  templateUrl: './dash-card.component.html',
  styleUrl: './dash-card.component.scss',
})
export class DashCardComponent {
  icon = input();
  value = input<number>();
  label = input<string>();
}
