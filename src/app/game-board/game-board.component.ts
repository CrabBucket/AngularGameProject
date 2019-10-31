import { Component, OnInit } from '@angular/core';
import { Box } from '../Box';

import * as p5 from 'p5';



/** 
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
  height: number;
  width: number;
  canvas: p5;
  test: Box;
  constructor() { }

  ngOnInit() {
    this.height = 100;
    this.width = 20;
   


    const sketch = (s) => {

      

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(window.innerWidth/4, window.innerHeight*.8);
        s.fill('red');
        s.strokeWeight(2);
        s.stroke('grey');
        this.test = new Box(1,1,s.width/this.width);
      };

      s.draw = () => {
        s.scale(1, -1);
        s.translate(0, -s.height);
        s.background(0);
        
        this.test.draw(s,s.width/this.width);
      };

      s.windowResized = () => {
        s.resizeCanvas(window.innerWidth/4, window.innerHeight*.8);
      };
    }

    this.canvas = new p5(sketch);
    

  }

}
