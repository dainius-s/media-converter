import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMedia } from '../media.interface';
import { Observable, of } from 'rxjs';
import { map, tap, filter, switchMap } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class MediaService {
  //readonly apiUrl = 'http://localhost:4001/convert/';
  currentMedia = this.socket.fromEvent<IMedia>('mediaFile').pipe(map(x => { console.log(x); return x;}));
  mediaFiles = this.socket.fromEvent<IMedia[]>('mediaFiles');

  constructor(private http: HttpClient,
              private socket: Socket) { }

  addMedia(mediaUrl: string): void{
    this.socket.emit('add', mediaUrl);
  }

  public joinRoom(id: string) {
    this.socket.emit('join', id);
  }

  public leaveRoom(id: string) {
    this.socket.emit('leave', id);
  }

  public getMediaFiles(): Observable<IMedia[]> {
    //this.socket.emit('getStatus', id);
    return new Observable((observer) => {
        this.socket.on('mediaFiles', (files: IMedia[]) => {
            observer.next(files);
        });
    });
}

  public getStatus(id: string): Observable<IMedia> {
      //this.socket.emit('getStatus', id);
      return new Observable((observer) => {
          this.socket.on('status', (data: IMedia) => {
            if (data) {
              observer.next(data);
            }
          });
      });
  }

  public getProgress(id: string): Observable<IMedia> {
    //this.socket.emit('getProgress', id);
    return new Observable((observer) => {
        this.socket.on('progress', (data: IMedia) => {
          if (data) {
            observer.next(data);
          }
        });
    });
  }
}
