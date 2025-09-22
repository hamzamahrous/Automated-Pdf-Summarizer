import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-loading-spinner',
  imports: [CommonModule],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css',
})
export class LoadingSpinner {
  @Input() color: string = '#3b82f6'; // Default blue color
  @Input() size: SpinnerSize = 'md';
  @Input() show: boolean = true;
  @Input() fullScreen: boolean = false;
  @Input() overlay: boolean = false;
  @Input() text: string = '';

  get spinnerClasses(): string {
    let classes = 'loading-spinner';

    // Size classes
    switch (this.size) {
      case 'sm':
        classes += ' spinner-sm';
        break;
      case 'md':
        classes += ' spinner-md';
        break;
      case 'lg':
        classes += ' spinner-lg';
        break;
      case 'xl':
        classes += ' spinner-xl';
        break;
    }

    return classes;
  }

  get containerClasses(): string {
    let classes = 'spinner-container';

    if (this.fullScreen) {
      classes += ' spinner-fullscreen';
    }

    if (this.overlay) {
      classes += ' spinner-overlay';
    }

    return classes;
  }

  get spinnerStyle(): { [key: string]: string } {
    return {
      '--spinner-color': this.color,
      '--spinner-color-light': this.color + '40',
    };
  }
}
