import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actionsFilter from 'src/app/filtros/filtro.actions';
import * as actionsTodo from 'src/app/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual = 'Todos';
  filtros: string[] = ['Todos', 'Completados', 'Pendientes'];
  pendientes: number = 0;
  completados: number = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro)
    this.store.subscribe(state => {
      this.filtroActual = state.filtro
      this.pendientes = state.todos.filter( todo => !todo.completado).length
      this.completados = state.todos.filter( todo => todo.completado).length
    })
  }

  cambiarFiltro(filtro: string){
    this.store.dispatch(actionsFilter.setFiltro({ filtro }))
  }

  limpiarCompletados(){
    this.store.dispatch(actionsTodo.clearAll())
  }
}
