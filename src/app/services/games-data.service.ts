import { Injectable } from '@angular/core';
import { AbstractObservableDataService } from './observable-data.service';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService extends AbstractObservableDataService<
  Array<number>
> {}
