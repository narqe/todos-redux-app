import { createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';

export const initialState = "Todos";

export const filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro),
)
