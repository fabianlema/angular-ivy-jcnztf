import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TransformList } from './transform';

@Injectable()
export class Transform2ListService implements TransformList {
  transform(input: any[]): Observable<any[]> {
    // Aquí realizarías la lógica de transformación específica para 2
    const transformedList = input.map(item => /* Transformación específica para 2 */ item + 2);
    return of(transformedList);
  }
}