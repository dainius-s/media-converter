import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { MediaService } from 'src/app/services/media.service';
import { IMedia } from '../media.interface';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html'
})
export class MediaListComponent implements OnInit, OnDestroy {
  mediaFiles: Observable<IMedia[]>;


  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    //this.mediaFiles = this.mediaService.mediaFiles;
    this.mediaFiles = this.mediaService.getMediaFiles();
  }

  ngOnDestroy() {
    //this._docSub.unsubscribe();
  }

  loadDoc(id: string) {
    //this.mediaService.getMedia(id);
  }

  newDoc() {
    this.mediaService.addMedia('youtube');
  }

}