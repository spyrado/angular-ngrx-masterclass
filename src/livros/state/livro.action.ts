import { createAction, props } from '@ngrx/store';
import { Livro } from '../livro.model';

const carregarLivros = createAction('[Livros] Carregar Livros');
const livrosCarregadosComSucesso = createAction('[Livros] Carregou com Sucesso', props<{ livros: Livro[] }>());

export const livroActions = {
  carregarLivros,
  livrosCarregadosComSucesso,
};
