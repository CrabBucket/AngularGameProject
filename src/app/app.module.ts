import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { TetrisPieceComponent } from './tetris-piece/tetris-piece.component';
import { HoldBoxComponent } from './hold-box/hold-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    TetrisPieceComponent,
    HoldBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
