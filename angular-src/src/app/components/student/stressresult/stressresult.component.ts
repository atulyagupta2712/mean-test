import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'


@Component({
  selector: 'app-stressresult',
  templateUrl: './stressresult.component.html',
  styleUrls: ['./stressresult.component.css']
})
export class StressResultComponent implements OnInit {
  score: number;
  data: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
    ngOnInit(){
      this.score = JSON.parse(localStorage.getItem('stressscore'));
      if(this.score>= 10 && this.score<=16){
        this.data = "You dont seem to be suffering from stress and overall you are balanced and happy";
      }
      if(this.score>=17 && this.score <=24){
        this.data = "You are a serious worrier and fear that a panic attack could strike at any time. This holds you back from living your life to the fullest.  "
      }
      if(this.score>=25 && this.score <=32){
        this.data = "You prefer to be on your own and you struggle to develop relationships with others. You lack empathy and dont exhibit emotions. "
      }
      if(this.score>=33 && this.score <=40){
        this.data = "You prefer to be on your own and you struggle to develop relationships with others. You lack empathy and dont exhibit emotions. "
      }
    }
    onlogout(){
      this.authService.onLogout();
    alert('You are logged out');
    this.router.navigate(['/']);
    return false;
    }
    onLogoutClick(){
      this.authService.onLogout();
      alert('You are logged out');
      this.router.navigate(['/']);
      return false;
    }
    consult(){
      this.router.navigate(['useranalysis'])
    }
}