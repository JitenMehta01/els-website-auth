import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../auth/_models';
import { UserService, AuthenticationService } from '../auth/_services';

@Component({ templateUrl: 'user-login.component.html' })
export class UserLoginComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}