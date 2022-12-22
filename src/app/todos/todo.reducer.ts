import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, { texto }) => [
    ...state,
    new Todo(texto)
  ]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    })
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    })
  }),
  on(actions.borrar, (state, { id }) => {
    return state.filter(todo => todo.id !== id)
  }),
  on(actions.toggleAll, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado
      }
    })
  }),
  on(actions.clearAll, (state) => {
    return state.filter(todo => !todo.completado)
  }),
);
