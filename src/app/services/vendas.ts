import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "http://10.91.47.129/modelo-api/api.php";

  constructor(private http: HttpClient){}

  
 operacao(dados:any){  // Saída para o primeiro end-point
 return this.http.post(this.url, dados);
}

// Exemplo de como consumir a api com arquivos separados.

// listarPorduto(dados:any){
//  return this.http.post(this.url + 'api-produtos', dados);
// }

// Exemplo de como consumir a api com arquivos separados.

// listarAlterar(dados:any){  
//  return this.http.post(this.url + 'api-produtos/{id}', dados);
// }

}
