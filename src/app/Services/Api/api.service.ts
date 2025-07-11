import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url = "http://127.0.0.1:8000/api/"
  url = "http://backend.rcs.com/api/"

  constructor(private http: HttpClient) { }

  contact_us(body:any){
   return this.http.post(`${this.url}contact-us`, body)
  }

  career_form(body:any){
   return this.http.post(`${this.url}job-application`, body)
  }

}
