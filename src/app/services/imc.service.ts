import { Injectable } from '@angular/core';
import { IMC } from '../interfaces/imc.interface';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor() { }

  calcularImc(imc: IMC) {
    return (imc.peso) / (imc.altura * imc.altura);
  }
}
