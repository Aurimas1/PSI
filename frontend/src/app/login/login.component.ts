import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'psi-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = '';
    password = '';

    constructor(private authServise: AuthService, private router: Router) { }

    @HostListener('document:keydown.enter')
    login() {
        if (this.username === '') {
            alert('Blogas vartotojo vardas');
            return;
        }
        if (this.password === '') {
            alert('Blogas slaptazodis');
            return;
        }
        this.authServise.auth(this.username, this.password).subscribe(() => this.router.navigate(['']), err => alert(err.json().Message));
    }
}
