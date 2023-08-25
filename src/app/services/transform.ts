import { Observable } from 'rxjs';

export interface TransformList {
  transform(input: any[]): Observable<any[]>;
}
