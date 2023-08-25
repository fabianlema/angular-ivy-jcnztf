import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Transform1ListService } from './services/transform1.service';
import { Transform2ListService } from './services/transform2.service';
import { GAMES_LIST_TRANSFORMS } from './services/games-transform-list.token';
import { GamesService } from './services/games.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: GAMES_LIST_TRANSFORMS,
      useClass: Transform1ListService,
      multi: true,
    }, // Multi provider
    {
      provide: GAMES_LIST_TRANSFORMS,
      useClass: Transform2ListService,
      multi: true,
    }, // Multi provider
    GamesService,
  ],
})
export class AppModule {}
