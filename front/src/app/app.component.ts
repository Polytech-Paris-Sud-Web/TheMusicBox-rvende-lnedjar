import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Music Box';
  isLoggedIn = false;
  username?: string;
  
  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.pseudo;
    }
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}