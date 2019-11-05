import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMedia } from '../media.interface';
import { Observable } from 'rxjs';
import { map, tap, filter, switchMap } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  //readonly apiUrl = 'http://localhost:4001/convert/';
  currentMedia = this.socket.fromEvent<IMedia>('mediaFile').pipe(map(x => { console.log(x); return x;}));
  mediaFiles = this.socket.fromEvent<IMedia[]>('mediaFiles');

  constructor(private http: HttpClient,
              private socket: Socket) { }

  addMedia(mediaUrl: string): void{
    //const encodedUrl = encodeURIComponent(mediaUrl);
    //return this.http.get<IMedia>(`${this.apiUrl}${encodedUrl}`);
    this.socket.emit('addMedia', mediaUrl);
  }

  getMedia(id: string) {
    //this.socket.on('getMedia', id);
  }
}
