import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable()
export class PeticionesService{
    public url: string;
    constructor(
        public http1: HttpClient
    ){
        this.url = "https://reqres.in/";
    }
    getUser(userId): Observable<any>{
        return this.http1.get(this.url + 'api/users/' + userId);
    }

    addUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http1.post(this.url+'api/useres', params, {headers: headers});
    }
}


