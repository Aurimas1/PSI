import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'psi-login',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    username = '';
    password = '';

    constructor(private authServise: AuthService, private router: Router) { }

    login() {
        if (this.username === '') {
            alert('Blogas vartotojo vardas');
            return;
        }
        if (this.password === '') {
            alert('Blogas slaptazodis');
            return;
        }
    }
}
