import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
  numero=0
  potencia=0
  resultado=0
  numeroapoyo=0

 calcular(){
    this.numeroapoyo=this.numero;
  if (this.potencia == 0 ) {
      if (this.numero == 0){
        alert(0)
      }
      else{
        alert(1)
      }
  }
  else if(this.numero && this.numeroapoyo == 0){
    alert(0)
  }
  else{
    for (let i = 1; i<this.potencia; i++) {
      this.numeroapoyo=this.numeroapoyo*this.numero;
      this.resultado=this.numeroapoyo   
    }
      alert(this.resultado);
  }
 }
  

}