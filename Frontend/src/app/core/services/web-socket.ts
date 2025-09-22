import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket!: WebSocket;
  private msgSubject = new Subject<any>();

  connect() {
    this.socket = new WebSocket('ws://localhost:3000');

    this.socket.onopen = () => {
      console.log('Connected to WebSocket Server');
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.msgSubject.next(data);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  public getMessages(): Observable<any> {
    return this.msgSubject.asObservable();
  }
}
