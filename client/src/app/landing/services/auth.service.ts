import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor() { }

    register() {
        console.log('Register')
    }
}