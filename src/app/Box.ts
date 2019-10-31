import {GameBoardComponent} from './game-board.component';

export class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    board: GameBoardComponent;
    constructor(board:GameBoardComponent,x:number,y:number) {
        this.width = board.canvas.width/board.width;
        this.height = board.canvas.height/board.height;
        this.x=1;
        this.y=1;
        this.board = board;
    }

    draw():void{
        this.board.canvas.rect(this.x,this.y,this.width,this.height);
    }
    
}