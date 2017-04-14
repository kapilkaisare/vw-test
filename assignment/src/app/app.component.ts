import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthGuard ]
})
export class AppComponent {
  title = 'Test Application';

  constructor (
    private router: Router
  ) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
