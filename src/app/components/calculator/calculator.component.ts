import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: [ './calculator.component.css' ]
})

export class CalculatorComponent {
  title = 'Practica1';
  mostrar="0";
  concat="";

  pressNum(val:string){
    this.concat=this.concat+val;
    this.mostrar=this.concat;
  }

  clear(){
    this.concat="";
    this.mostrar=this.concat;
  }

  resultado(){
    this.mostrar=eval(this.concat);
    this.concat=this.mostrar
  }

}



