import { Inject, Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { ListService } from './list.service';
import { TransformList } from './transform';
import { GAMES_LIST_TRANSFORMS } from './games-transform-list.token';
import { GamesDataService } from './games-data.service';

@Injectable()
export class GamesService extends ListService {
  constructor(
    @Inject(GAMES_LIST_TRANSFORMS) protected transformServices: TransformList[],
    private gamesDataService: GamesDataService
  ) {
    super(transformServices);
    this.gamesDataService
      .getData()
      .pipe(switchMap(this.processList))
      .subscribe((list) => this.setData(list));
  }
}
