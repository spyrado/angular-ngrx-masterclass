import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { livroReducer } from 'src/livros/state/livro.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
  livros: livroReducer,
};
