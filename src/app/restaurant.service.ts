import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurantProfile(username):Observable<any>{
    console.log(username)
    return this.http.get<any>('http://localhost:8080/registration-service/api/v1/restaurant-profile/'+username);
  }

  updateRestaurantProfile(username):Observable<any>{
    console.log(username)
    return this.http.put<any>('http://localhost:8080/registration-service/api/v1/restaurant-profile',username);
  }
}
