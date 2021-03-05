import { Component, Inject } from '@angular/core';
// Importar AuthService del SDK
import { AuthService } from '@auth0/auth0-angular';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
        <button (click)="auth.logout({ returnTo: document.location.origin })">
          Log out
        </button>
      </ng-container>

      <ng-template #loggedOut>
        <button (click)="auth.loginWithRedirect()">Log in</button>
      </ng-template>
  `,  
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {
  // Inyectar servicio de autenticación y Document para el Login/Logout
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
  
}