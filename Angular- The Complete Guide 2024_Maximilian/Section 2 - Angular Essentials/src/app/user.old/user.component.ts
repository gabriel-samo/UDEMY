import { Component } from '@angular/core';
// import { signal, computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// generate a random index
// const randomIndex = () => Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selecting a random user
  // selectedUser = DUMMY_USERS[randomIndex()];
  // with signals
  // selectedUser = signal(DUMMY_USERS[randomIndex()]);
  // calculating the user image
  // get userImage() {
  // return `assets/images/users/${this.selectedUser.avatar}`;
  // }
  // with signals
  // userImage = computed(
  //   () => `assets/images/users/${this.selectedUser().avatar}`
  // );
  // changing the selected user
  // onSelectUser() {
  // this.selectedUser = DUMMY_USERS[randomIndex()];
  // with signals
  // this.selectedUser.set(DUMMY_USERS[randomIndex()]);
  // }
}
