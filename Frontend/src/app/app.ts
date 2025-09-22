import { ToastModule } from 'primeng/toast';
import { WebSocketService } from './core/services/web-socket';
import { ButtonModule } from 'primeng/button';
import { Component, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';

export interface lectureSummary {
  fileName: string;
  fileNumberOfPages: string;
  webViewLink: string;
  modifyingUser: string;
  lectureSummary: string;
}
@Component({
  selector: 'app-root',
  imports: [CardModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('my-template');
  summaries: lectureSummary[] = [];

  constructor(private webSocketService: WebSocketService, private msg: MessageService) {}
  ngOnInit(): void {
    this.webSocketService.connect();
    this.webSocketService.getMessages().subscribe((data) => {
      this.summaries.push(data);
      this.msg.add({
        severity: 'success',
        summary: 'New Lecture Summary',
        detail: data.fileName,
        life: 4000,
      });
      console.log(data);
    });
  }
}
