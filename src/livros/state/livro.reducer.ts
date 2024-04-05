import { createReducer, on } from '@ngrx/store';
import { Livro } from '../livro.model';
import { livroActions } from './livro.action';

enum LivroStatus {
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success',
}

export interface LivroState {
  livros: Livro[];
  error: '' | null;
  status: LivroStatus;
}

const initialState: LivroState = {
  error: null,
  status: LivroStatus.pending,
  livros: [],
};

export const livroReducer = createReducer(
  initialState,
  on(livroActions.carregarLivros, (state) => {
    return {
      ...state,
      status: LivroStatus.loading,
    };
  }),
  on(livroActions.livrosCarregadosComSucesso, (state, data) => {
    return {
      ...state,
      status: LivroStatus.success,
      livros: data.livros
    };
  })
);
