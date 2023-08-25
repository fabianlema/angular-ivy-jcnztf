import { Observable, ReplaySubject } from 'rxjs';

export abstract class AbstractObservableDataService<T> {
  protected _data: ReplaySubject<T>;

  constructor() {
    this._data = new ReplaySubject<T>(1);
  }

  getData(): Observable<T> {
    return this._data.asObservable();
  }

  setData(data: T) {
    this._data.next(data);
  }
}
