import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  private static NO_ELEVATION_OFFSET_LIMIT = 30;

  @Input() headline = '';
  @Input() showNavigationIcon = false;
  @Input() fixed = true;
  @Output() navigationClick = new EventEmitter<void>();

  showElevation$ = new BehaviorSubject(false);

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.showElevation$.next(
      window.scrollY >= TopBarComponent.NO_ELEVATION_OFFSET_LIMIT
    );
  }

  onNavigationClick(): void {
    this.navigationClick.emit();
  }
}
