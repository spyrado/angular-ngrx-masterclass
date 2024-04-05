import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { appReducers } from './state/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { buscarLivroEffect } from 'src/livros/state/livro.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideStore(appReducers),
    provideEffects({ buscarLivroEffect })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
