import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsersApi() {
    return this.http.get('http://localhost:8080/allUsers')
  }

  getSingleUserApi(id : any) {
    return this.http.get(`http://localhost:8080/singleUser/${id}`)
  }

  getUserByForm(bodySect : any)
  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = bodySect;
    return this.http.post('http://localhost:8080/single', body, {headers})
  }
}
