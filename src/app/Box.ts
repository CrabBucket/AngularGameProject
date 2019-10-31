import {GameBoardComponent} from './game-board/game-board.component';
import * as p5 from 'p5';
export class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    board: GameBoardComponent;
    constructor(x: number,y: number, width:number) {
        this.width = width;
        this.height = width;
        this.x=x;
        this.y=y;

    }
    draw(canvas: p5,width:number): void {
        canvas.rect(this.x,this.y,width,width);
    };
    
}