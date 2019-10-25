import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-useranalysis',
  templateUrl: './useranalysis.component.html',
  styleUrls: ['./useranalysis.component.css']
})
export class UserAnalysisComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ){ 
  }
    ngOnInit(){

    }
    onLogoutClick(){
      this.authService.onLogout();
      alert('You are logged out');
      this.router.navigate(['/']);
      return false;
    }
}