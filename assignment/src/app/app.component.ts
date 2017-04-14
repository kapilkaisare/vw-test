import { Component } from '@angular/core';

//import { AuthGuard } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//,
//  providers: [ AuthGuard ]
})
export class AppComponent {
  title = 'Test Application';

  constructor (
    // private authGuard: AuthGuard
  ) {}
}
