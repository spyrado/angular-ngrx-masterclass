import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Livro } from 'src/livros/livro.model';
import { LivroService } from 'src/livros/livro.service';
import { livroActions } from 'src/livros/state/livro.action';
import { livrosSelector } from 'src/livros/state/livro.selectors';
import { IAppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-masterclass';

  livros$ = this.storeService.select(livrosSelector);

  constructor(
    private livroService: LivroService,
    private storeService: Store
  ) {}

  ngOnInit(): void {
    this.storeService.dispatch(livroActions.carregarLivros());
    // this.livros = this.livroService.obterLivros();
  }
}
