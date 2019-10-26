import { Component, OnInit } from '@angular/core';
/**
 * @todo Tetris Piece
 * @body The actual falling pieces
 */
@Component({
  selector: 'app-tetris-piece',
  template: `
    <p>
      tetris-piece works!
    </p>
  `,
  styleUrls: ['./tetris-piece.component.scss']
})
export class TetrisPieceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
