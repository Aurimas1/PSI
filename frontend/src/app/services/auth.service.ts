import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {

    constructor(private storage: StorageService) { }

    public get username(): string{
        return this.storage.get('username');
    }

    public get isLoggedIn(): boolean{
        return !!this.username;
    }

    public auth(username: string, password: string): Observable<string> {
        return Observable.of('admin').do(result => this.storage.set('username', result));
    }
}
