import { Component, OnInit } from '@angular/core';
/*
*@todo Game Board
*@body Complete the gameboard, possible integration with other smaller components ie a Tetris component or a Box component
*/
@Component({
  selector: 'app-game-board',
  template: `
    <p>
      game-board works!
    </p>
  `,
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
