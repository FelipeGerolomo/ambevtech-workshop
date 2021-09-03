import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmeService } from 'src/app/services/filme.service';
import { Filme } from './../../interfaces/filme.interface';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  filmes: Filme[] = [];

  filmeForm = new FormGroup({
    nomeFilme: new FormControl(null, Validators.required),
    anoLancamento: new FormControl(null, Validators.required),
    nomeDiretor: new FormControl(null, Validators.required),
  });

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.obterFilmes();
  }

  obterFilmes() {
    this.filmes = this.filmeService.obterFilmes();
  }

  salvarFilme() {
    this.filmeService.salvarFilme(this.filmeForm.getRawValue());
    this.obterFilmes();
    this.filmeForm.reset();
  }

}
