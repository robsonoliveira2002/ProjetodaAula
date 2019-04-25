import { Component } from '@angular/core';

@Component({
  selector: 'triangulo-component',
  templateUrl: 'triangulo.component.html'
})
export class TrianguloComponent{
  altura: number = 0;
  base: number = 0;
  resultado: string;

  calcular(): void {
    let area = Number(this.base) * Number(this.altura) / 2;
    this.resultado = 'a area é: '+area; 
  }
}
