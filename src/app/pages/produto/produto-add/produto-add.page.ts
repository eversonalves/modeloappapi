import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Vendas } from 'src/app/services/vendas';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.page.html',
  styleUrls: ['./produto-add.page.scss'],
  standalone: false
})
export class ProdutoAddPage implements OnInit {

  form! : FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) { }

  ngOnInit() {
  }

}
