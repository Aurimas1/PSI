import { Component } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'

@Component({
    selector: 'psi-login',
    templateUrl: './login.component.html'
})
export class LoginComponent{
    username: string = '';
    password: string = '';
    
    constructor(private authServise: AuthService, private router: Router){ }

    login(){
        if (this.username === ''){
            alert('Blogas vartotojo vardas');
            return;
        }
        if (this.password === ''){
            alert('Blogas slaptazodis');
            return;
        }
        this.authServise.username = this.username;
        this.router.navigate(['']);

    }
}