import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    errors: any = []

    constructor(
        private authSservice: AuthService,
        private router: Router
    ) { }

    ngOnInit() {}

    login(loginForm) {
        this.authSservice.login(loginForm.value).subscribe(
            (token) => {
                console.log(token)
                this.router.navigate(['/products'])
            },
            (err: HttpErrorResponse) => {
                console.error(err)
                this.errors = err.error.errors
            }        
        )
    }
}
