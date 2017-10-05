import { Component } from '@angular/core'

@Component({
    selector: 'psi-login',
    templateUrl: './login.component.html'
})
export class LoginComponent{
    username: string = '';
    password: string = '';  
}