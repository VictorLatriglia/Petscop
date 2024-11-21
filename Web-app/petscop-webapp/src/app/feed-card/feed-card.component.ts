import { Component, Input, } from '@angular/core';
import { feedCardElement } from '../../models/feed-card';

@Component({
  selector: 'app-feed-card',
  imports: [],
  templateUrl: './feed-card.component.html',
  styleUrl: './feed-card.component.css'
})
export class FeedCardComponent {
  @Input({ required: true, alias: "element" }) feedElement: feedCardElement = new feedCardElement();
  constructor() { }
}
