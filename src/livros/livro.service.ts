import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  obterLivros(): Livro[] {
    return [
      {
        id: 1,
        nome: 'Harry Potter',
      },
      {
        id: 2,
        nome: 'Senhor dos Aneis',
      },
    ];
  }

  obterLivrosApi(): Observable<Livro[]> {
    return of(this.obterLivros()).pipe(delay(1000));
  }
}
