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
  psycho:any;
  constructor(
    private authService: AuthService,
    private router: Router
  ){ 
  }
    ngOnInit(){

      this.authService.getpsychologist().subscribe(data=>{
        // console.log(data)
        this.psycho = data.msg;
        // for(let i =0; i<data.msg.length; i++){
        
        // }
        // console.log(this.psycho)
      })
    }
    onLogoutClick(){
      this.authService.onLogout();
      alert('You are logged out');
      this.router.navigate(['/']);
      return false;
    }
}