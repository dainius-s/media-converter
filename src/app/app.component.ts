import { Component } from '@angular/core';

import {NgForm} from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { IMedia } from './media.interface';
import { Media } from './models/media.class';
import { MediaService } from './services/media.service';
import { MediaComponent } from './media/media.component';
import { MediaListComponent } from './media-list/media-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Media Converter 0.1v';
  media: IMedia;
  inputUrl = '';

  constructor(private mediaService: MediaService) {
   }

  // convert media url
  convertFile() {
    console.log('converting');
    this.mediaService.addMedia(this.inputUrl);
  }
}
