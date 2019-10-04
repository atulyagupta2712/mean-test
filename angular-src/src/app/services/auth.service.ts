import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  teacher: any;

  constructor(private http: Http) { }
  registerUser(user){
   
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.post('userRoute/register', user, {headers: header})
   .map(res=>{
    return res.json();
    })
  }
  authenticateUser(user){
    let header = new Headers();
    header.append('content-type', 'application/json');
    return this.http.post('userRoute/authenticate', user,{headers: header}).map(response=>{
      console.log(response.json());
      return response.json();
      
    })
  }


  loggedIn(){
    return tokenNotExpired('id_token');
  }
  storeUserData(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  storeTeacherData(token,teacher){
    localStorage.setItem('id_token', token);
    localStorage.setItem('teacher', JSON.stringify(teacher));
    this.authToken = token;
    this.teacher = teacher;
  }

  onLogout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  registerTeacher(teacher){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.post('teacherRoute/register',teacher,{headers:header}).map(response=>{
      return response.json();
    })
  }

  authenticateTeacher(teacher){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.post('teacherRoute/login', teacher, {headers: header}).map(response=>{
      return response.json();
    })
  }
 
  addAlgoQuestion(question){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.post('teacherRoute/algoques', question, {headers:header}).map(response=>{
      return response.json();
    })

  }

  addSoftwareQuestion(question){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.post('teacherRoute/softwareques',question,{headers:header}).map(response=>{
      return response.json();
    })
  }

  addJavaQuestion(question){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.post('teacherRoute/javaques',question,{headers:header}).map(response=>{
      return response.json();
    })
  }

  getAlgoQuestion(){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.get('userRoute/algo', {headers:header}).map(response=>{
      return response.json();
    })
  }

  getJavaQuestion(){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.get('userRoute/java', {headers:header}).map(response=>{
      return response.json();
    })
  }
  getSoftwareQuestion(){
    let header = new Headers();
    header.append('content-type','application/json');
    return this.http.get('userRoute/software', {headers:header}).map(response=>{
      return response.json();
    })
  }
}

