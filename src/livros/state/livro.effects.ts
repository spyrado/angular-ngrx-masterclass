import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LivroService } from "../livro.service";
import { livroActions } from "./livro.action";
import { map, switchMap, tap } from "rxjs";
import { inject } from "@angular/core";

export const buscarLivroEffect = createEffect(
  (actions$ = inject(Actions), livroService = inject(LivroService)) => {
    console.log("ACTIONS: ", actions$);
    console.log("livroService: ", livroService);
    return actions$
      .pipe(
        ofType(livroActions.carregarLivros),
        tap(() => console.log('passou por aqui')),
        switchMap(
          () => livroService.obterLivrosApi()
          .pipe(
            map(livros => livroActions.livrosCarregadosComSucesso({ livros }))
          )
        )
      )
  },
  {
    functional: true
  }
);

// export const livroEffects = {
//   buscarLivroEffect
// }