import { Component, OnInit } from '@angular/core';
import Amplify from '@aws-amplify/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

Amplify.configure({
  Auth: {
    region: 'ap-southeast-1',
    userPoolId: 'ap-southeast-1_4A9TvayRa',
    userPoolWebClientId: '70a6bvsvk14ki97h3rkov44rjb',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
})

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // loadedUser = [];
  username : string = '';
  password : string = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // async signIn({username, password}) {
  //   try {
  //     const user = await Auth.signIn(username, password);
  //     // this.dialogRef.closeAll();
  //     this.router.navigateByUrl("/dashboard");
  //   } catch (error) {
  //     console.log('error signing in', error);
  //     this.invalidLogin = true
  //   }
  // }

}
