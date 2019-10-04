import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: "root"
})
export class UserdataService {
  login(user_email: any, user_password: any) {
    throw new Error("Method not implemented.");
  }

  url: string = "https://nodejsapidemo.herokuapp.com/users/";
  constructor(private _http: HttpClient) {}

  getAllUsers() {
    return this._http.get(this.url);
  }
  addUser(newuser) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newuser);
    return this._http.post(this.url, body,{headers:head});
  }
getUserByEmail(user_email) {
  return this._http.get(this.url + user_email)
}
 editUser(newuser) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newuser);
    return this._http.put(this.url + newuser.user_email, body, {
      headers: head
    });
  }
  deleteUser(user_email) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + user_email, { headers: head });
  }

}
