import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-edit',
  templateUrl: './endereco-edit.page.html',
  styleUrls: ['./endereco-edit.page.scss'],
  standalone: false
})
export class EnderecoEditPage implements OnInit {

  form! : FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
