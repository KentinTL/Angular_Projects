import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  hidden: boolean; //false de base

  User = {
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    name : 'Doe',
    firstName : 'John',
    quote : '',
    age : 25,
  };

  afficherMasquerAge() {
    this.hidden = !this.hidden;
  }

  constructor() {

   }

  ngOnInit() {
  }

}
