import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-studentstress',
  templateUrl: './studentstress.component.html',
  styleUrls: ['./studentstress.component.css']
})
export class StudentStressComponent implements OnInit {

    questions:any;
    questionObject: any;
    score: number=0;
    questionIndex: number=0;
    quesForm: FormGroup;
  
    constructor(
      private authService: AuthService,
      private router: Router
    ) { 
      this.questionObject={};
      this.quesForm = new FormGroup({
        option: new FormControl()
      })
    }
  
    ngOnInit() {
  
      this.authService.getStressQuestion().subscribe(data=>{
        // console.log(data)
        if(data.success){
          this.questions = data.msg;
          this.questionObject= this.questions[this.questionIndex];
        }
      },
    error=>{
      console.log(error);
    })
    }
    onsoftware(){
      console.log(this.score)
      var data = this.quesForm.get('option').value;
      if(data == this.questions[this.questionIndex].option1 || data == ' '+this.questions[this.questionIndex].option1){
        this.score= this.score + 4;
      }
      if(data == this.questions[this.questionIndex].option2 || data == ' '+this.questions[this.questionIndex].option2){
        this.score+=3;
      }
      if(data == this.questions[this.questionIndex].option3 || data == ' '+this.questions[this.questionIndex].option3){

        this.score+=2;
      }
      if(data == this.questions[this.questionIndex].option4 || data == ' '+this.questions[this.questionIndex].option4){
        this.score+=1;
      }
      console.log(this.score);
      if(this.questionIndex < this.questions.length){
        this.questionIndex++;
        this.questionObject = this.questions[this.questionIndex];
      }
      if(this.questionIndex == this.questions.length){
        this.again();
      }
      this.quesForm = new FormGroup({
        option: new FormControl()
      })
    }
    again(){
      localStorage.setItem('stressscore', JSON.stringify(this.score));
     
      this.router.navigate(['stressresult']);
    }
  }
  