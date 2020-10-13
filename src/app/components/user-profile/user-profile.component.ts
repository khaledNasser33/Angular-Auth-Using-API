import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  UserProfile: User;

  constructor(
    public authService: AuthService,private token: TokenService
  ) {
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data;
      
    })
  }

  ngOnInit(): void {
  }

}
