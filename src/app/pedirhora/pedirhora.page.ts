import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from '../../managers/SessionManager';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pedirhora',
  templateUrl: './pedirhora.page.html',
  styleUrls: ['./pedirhora.page.scss'],
})
export class PedirhoraPage {

  constructor(private route: ActivatedRoute, private router: Router, private sessionManager: SessionManager, private alertController: AlertController) { }

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
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '¡Su hora ha sido enviada con exito!',
      message: '',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
