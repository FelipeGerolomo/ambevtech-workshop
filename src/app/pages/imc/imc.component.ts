import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImcService } from 'src/app/services/imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  imc: string = '';
  imcMsg: string = '';

  imcForm = new FormGroup({
    altura: new FormControl(null, Validators.required),
    peso: new FormControl(null, Validators.required),
  });

  constructor(private imcService: ImcService) { }

  ngOnInit(): void {
  }

  calcularImc(): void {
    const valorImc = this.imcService.calcularImc(this.imcForm.getRawValue());
    this.obterMsg(valorImc);
    this.formatarValorImc(valorImc);
  }

  obterMsg(valorImc: number) {
    if (valorImc < 18.5) {
      this.imcMsg = 'MAGREZA';
    } else if (valorImc >= 18.5 && valorImc < 24.9) {
      this.imcMsg = 'NORMAL';
    } else if (valorImc >= 25 && valorImc < 29.9) {
      this.imcMsg = 'SOBREPESO';
    } else if (valorImc >= 30 && valorImc < 39.9) {
      this.imcMsg = 'OBESIDADE';
    } else if (valorImc > 40) {
      this.imcMsg = 'OBESIDADE GRAVE';
    }
  }

  formatarValorImc(valorImc: number) {
    this.imc = valorImc.toFixed(2);
  }

}
