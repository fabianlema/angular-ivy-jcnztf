import { Component, OnInit, VERSION } from '@angular/core';
import { GamesDataService } from './services/games-data.service';
import { GamesService } from './services/games.service';
import { ListService } from './services/list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  list: Array<number> = [0, 1, 2, 3, 4, 5];

  constructor(
    private listService: GamesService,
    private dataService: GamesDataService
  ) {}
  ngOnInit(): void {
    this.dataService.setData(this.list);
    this.listService.getData().subscribe(console.log);
  }
}
