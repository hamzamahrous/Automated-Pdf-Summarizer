import { Component, Input, input, OnInit, signal } from '@angular/core';
type NotificationType = 'error' | 'success' | 'warning' | 'info';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification implements OnInit {
  @Input() message: string = '';
  @Input() type: NotificationType = 'success';
  @Input() duration: number = 3000;
  @Input() show: boolean = false;
  @Input() dismissible: boolean = false;

  isVisible = signal<boolean>(false);
  private timeoutId?: number;

  ngOnInit() {
    if (this.show) {
      this.showNotification();
    }
  }

  ngOnChanges() {
    if (this.show && !this.isVisible()) {
      this.showNotification();
    }
  }

  private showNotification() {
    this.isVisible.set(true);

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.duration > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.isVisible.set(false);
      }, this.duration);
    }
  }

  dismiss() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.isVisible.set(false);
  }

  // Method to manually trigger the notification
  trigger(customMessage?: string, customType?: NotificationType) {
    if (customMessage) {
      this.message = customMessage;
    }
    if (customType) {
      this.type = customType;
    }
    this.showNotification();
  }

  getNotificationClasses(): string {
    const baseClasses = 'text-white';

    switch (this.type) {
      case 'success':
        return `${baseClasses} bg-green-500`;
      case 'error':
        return `${baseClasses} bg-red-500`;
      case 'warning':
        return `${baseClasses} bg-yellow-500`;
      case 'info':
        return `${baseClasses} bg-blue-500`;
      default:
        return `${baseClasses} bg-green-500`;
    }
  }
}
