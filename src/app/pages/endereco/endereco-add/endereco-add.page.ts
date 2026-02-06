import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-endereco-add',
  templateUrl: './endereco-add.page.html',
  styleUrls: ['./endereco-add.page.scss'],
  standalone: false
})
export class EnderecoAddPage implements OnInit {

  form! : FormGroup;

  constructor() { }

  ngOnInit() {
  }
  
}
