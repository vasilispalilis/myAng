import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  users: User[];
  constructor(private leaderservice: LeaderService,
    private userservice: UserService) { }

  ngOnInit() {
    this.leaders = this.leaderservice.getLeaders();
    this.users = this.userservice.getUsers();
  }

}
