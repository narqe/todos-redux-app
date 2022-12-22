import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtrosTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: string): Todo[] {
    switch(filtro) {
      case 'Completados':
        return todos.filter(todo => todo.completado)
      case 'Pendientes':
        return todos.filter(todo => !todo.completado)
      default:
        return todos;
    }
  }

}
