import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Http } from '@angular/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class AuthService {

    private url = 'http://localhost:58249/api/Login';

    constructor(private http: Http, private storage: StorageService) { }

    public get username(): string{
        return this.storage.get('username');
    }

    public get isLoggedIn(): boolean{
        return !!this.username;
    }

    public auth(username: string, password: string): Observable<string> {
        return this.http.get(`${this.url}?username=${username}&password=${password}`)
                        .map(x => <string>x.json())
                        .do(result => this.storage.set('username', result));
    }
}
