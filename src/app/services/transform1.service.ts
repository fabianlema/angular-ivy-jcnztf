import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TransformList } from './transform';

@Injectable()
export class Transform1ListService implements TransformList {
  transform(input: any[]): Observable<any[]> {
    // Aquí realizarías la lógica de transformación específica para 1
    const transformedList = input.map(
      (item) => /* Transformación específica para 1 */ item + 1
    );
    return of(transformedList);
  }
}
