import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { TetrisPieceComponent } from './tetris-piece/tetris-piece.component';
import { HoldBoxComponent } from './hold-box/hold-box.component';
import { ViewBoxComponent } from './view-box/view-box.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    TetrisPieceComponent,
    HoldBoxComponent,
    ViewBoxComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
