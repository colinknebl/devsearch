import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {

	private username:string;
	private client_id = '8620b6364cd0d0abac26';
	private client_secret = '57f12f3b254d8eba7d762de6d135d746063b6e8a';

	constructor
	(
		private http:Http
	) {
		console.log('Github service ready...');
		this.username = 'colinknebl';
	}

	getUser() {
		return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
	}

	getRepos() {
		return this.http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}

}
