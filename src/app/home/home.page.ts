import { Component } from '@angular/core';
import { Vendas } from '../services/vendas';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    private api: Vendas,
    private toast: ToastController,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }
}
