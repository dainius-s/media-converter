import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import { Subscription } from 'rxjs';
import { Media } from 'src/app/models/media.class';
import { IMedia } from '../media.interface';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit, OnDestroy {
  @Input() media: IMedia;

  //media: IMedia;
  constructor(private documentService: MediaService) { }

  ngOnInit() {
    // this._docSub = this.documentService.getMedia(this.mediaId).pipe(
    //   //startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    // ).subscribe((media: IMedia) => this.media = media);
  }

  ngOnDestroy() {

  }
}