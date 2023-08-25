import { Observable, of, switchMap } from 'rxjs';
import { AbstractObservableDataService } from './observable-data.service';
import { TransformList } from './transform';

export abstract class ListService extends AbstractObservableDataService<
  Array<any>
> {
  constructor(protected transformServices: TransformList[]) {
    super();
  }

  protected processList(input: any[]): Observable<any[]> {
    let transformedList$: Observable<any[]> = of(input);

    this.transformServices.forEach((service) => {
      transformedList$ = transformedList$.pipe(
        switchMap((list) => service.transform(list))
      );
    });

    return transformedList$;
  }
}
