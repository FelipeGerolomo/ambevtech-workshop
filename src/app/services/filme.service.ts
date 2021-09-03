import { Injectable } from '@angular/core';
import { Filme } from '../interfaces/filme.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  filmes: Filme[] = [
    {
      nomeFilme: 'Titanic',
      nomeDiretor: 'James Cameron',
      anoLancamento: 1998
    },
    {
      nomeFilme: 'The Lord of the Rings',
      nomeDiretor: 'Peter Jackson',
      anoLancamento: 2002
    },
    {
      nomeFilme: 'Harry Potter e a Pedra Filosofal',
      nomeDiretor: 'Chris Columbus',
      anoLancamento: 2001
    },
  ]

  constructor() { }

  obterFilmes(): Filme[] {
    return this.filmes;
  }

  salvarFilme(filme: Filme): void {
    this.filmes.push(filme);
  }
}
