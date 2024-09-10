import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from '../../managers/SessionManager';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mismascotas',
  templateUrl: './mismascotas.page.html',
  styleUrls: ['./mismascotas.page.scss'],
})
export class MismascotasPage {

  constructor(private route: ActivatedRoute, private router: Router, private sessionManager: SessionManager) { }

  user: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params['user'] || '';
    });
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
  linkMascostas() {
    this.router.navigate(['/mismascotas'], { queryParams: { user: this.user } });
  }
  linkHome() {
    this.router.navigate(['/home'], { queryParams: { user: this.user } });
  }
  linkPedirHora() {
    this.router.navigate(['/pedirhora'], { queryParams: { user: this.user } });
  }

}
