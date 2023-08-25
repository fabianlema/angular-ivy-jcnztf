import { InjectionToken } from '@angular/core';
import { TransformList } from './transform';

export const GAMES_LIST_TRANSFORMS = new InjectionToken<TransformList[]>(
  'Games List Transforms'
);
