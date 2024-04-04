import { IAppState } from 'src/app/state/app.state';

export const livrosSelector = (appState: object) =>
  (appState as IAppState).livros.livros;
