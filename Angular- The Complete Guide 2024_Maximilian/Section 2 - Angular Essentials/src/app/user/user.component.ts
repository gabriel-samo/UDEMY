import { UserType } from '../../model/user.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/images/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
