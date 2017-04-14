import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot,  NavigationExtras } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {
		console.log('AuthGuard Routes: ', JSON.stringify(router.config, undefined, 2));
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn) { return true; }

		this.authService.redirectUrl = url;
    let dummySessionId = Date.now();

    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': dummySessionId },
      fragment: 'anchor'
    };

		this.router.navigate(['/home'], navigationExtras);
		return false;
	}
}
