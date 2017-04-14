import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AuthService }      from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(public authService: AuthService, public router: Router) { }

	ngOnInit() {
	}

	handleLogInClicked(ev: any): void {
		this.authService.login().subscribe(() => {
			if (this.authService.isLoggedIn) {
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
				let navigationExtras: NavigationExtras = {
					preserveQueryParams: true,
					preserveFragment: true
				};

				this.router.navigate([redirect], navigationExtras);
			}
		});
	}

	handleLogOutClicked(ev: any): void {
		this.authService.logout();
	}
}
