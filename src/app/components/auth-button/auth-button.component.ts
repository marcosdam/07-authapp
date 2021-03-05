import { Component, Inject } from '@angular/core';
// Importar AuthService del SDK
import { AuthService } from '@auth0/auth0-angular';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf=" auth.isAuthenticated$ | async; else loggedOut">
        <button class="btn btn-outline-danger" (click)="auth.logout({ returnTo: document.location.origin })">
          Cerrar sesión
        </button>
      </ng-container>

      <ng-template #loggedOut>
        <button class="btn btn-outline-primary" (click)="auth.loginWithRedirect()">Iniciar sesión</button>
      </ng-template>
  `,  
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {

  // Inyectar servicio de autenticación y Document para el Login/Logout
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
  
}