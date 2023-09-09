import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestCombatibilidad';
  
  
  preguntas=[
    "¿Consideras que es una persona que admiras?",
    "¿Te la pasas agusto con esa persona?",
    "¿Te brinda la confianza para decirle cosas que a otras personas no le dirias?",
    "¿Te hace reir?",
    "¿Puedes platicar de cosas serias con el/ella?",
    "¿Te ves a futuro con el/ella?",
    "¿Se han regalado detalles mutuamente?",
    "¿A tu familia le agrada?",
    "¿Te alegra el dia  aunque lo veas un instante?",
    "¿Consideras a esa persona alguien especial ?",  
    "De las primeras veces que platicaste con el/ella ¿Tenias ganas de pedirle el numero?",  
    "¿Te has desvelado con el hasta las 4 de la mañana?",
    "¿Compartes locker con la persona?",
  ];
  maxPreguntas=this.preguntas.length-1;
  recorrido=0;

  
  nexQuestion=()=>this.recorrido<this.maxPreguntas? this.recorrido++ : this.page++;

  page=1;
  
  aumentarPage=()=> this.page++;
  disminuirPage=()=> this.page--;
}

