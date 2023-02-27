import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
palabra="";

comprobar() {
  var i = 0;
  var j = this.palabra.length - 1;
  this.palabra=this.palabra.toLowerCase();


  for (i = 0; i<=j; i++, j--){
    if (this.palabra[i]!= this.palabra[j]){
      return alert("No es palíndromo")
    }
  }
      return alert("Si es palíndromo");
}
reset(){
  this.palabra="";
}
}

