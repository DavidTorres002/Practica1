import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
