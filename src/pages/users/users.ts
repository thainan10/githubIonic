import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users';
import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/user-details';
/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private githubUsers: GithubUsers
  ) {
    this.githubUsers.load().subscribe(users => {
      this.users = users;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

}
