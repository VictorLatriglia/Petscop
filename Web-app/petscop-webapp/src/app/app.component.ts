import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { feedCardElement } from '../models/feed-card';
import { randomUUID } from 'crypto';
import { FeedCardComponent } from './feed-card/feed-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petscop-webapp';
  feedElements: feedCardElement[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.feedElements.push(
      {
        id: randomUUID(),
        userIconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3URjWpcZfPfzAHxrU_Xms2GzfUJmvWXGjuw&s",
        userName: "User number 1",
        postImgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/800px-Stray_kitten_Rambo002.jpg",
        postDescription: "This is the first description"
      },
      {
        id: randomUUID(),
        userIconUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        userName: "User number 2",
        postImgUrl: "https://wallpapers.com/images/featured/kitty-cat-pictures-nzlg8fu5sqx1m6qj.jpg",
        postDescription: "This is the second description"
      }
    )
  }
}
