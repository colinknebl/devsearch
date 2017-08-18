import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user:any;
	repos:any[];
	username:string;

	constructor
	(
		public githubService:GithubService
	) {
		this.user = false;
	}

	ngOnInit() {
	}

	searchUsers(){
		console.log(this.username);
		this.githubService.updateUser(this.username);

		this.githubService.getUser().subscribe(user => {
			this.user = user;
		});
		this.githubService.getRepos().subscribe(repos => {
			this.repos = repos;
		});
	}

}
