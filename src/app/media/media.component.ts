import { TimeLeftComponent } from './time-left/time-left.component';
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
  public endTime: number;

  //media: IMedia;
  constructor(private mediaService: MediaService) { 
  }

  ngOnInit() {
    this.mediaService.joinRoom(this.media.id);
    this.mediaService.getProgress(this.media.id).pipe()
    .subscribe((data: IMedia) => {
      if (data.id === this.media.id) {
        this.media.progress = data.progress;
        this.endTime = this.calRemainingTime();
      }
     });
  }

  private calRemainingTime() {
    const now = Date.now();
    const timeDiff = now - this.media.startTime;
    return Math.floor(timeDiff / this.media.progress * (100 - this.media.progress) );
  }
  ngOnDestroy() {
    this.mediaService.leaveRoom(this.media.id);
  }
}