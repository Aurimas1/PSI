import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { StorageService } from './storage.service'

@Injectable()
export class AuthService{

    constructor(private storage: StorageService){}

    public get username() : string{
        return this.storage.get('username')
    }

    public set username(value: string){
        this.storage.set('username', value)
    }

    public get isLoggedIn() : boolean{
        return !!this.username;
    }
}