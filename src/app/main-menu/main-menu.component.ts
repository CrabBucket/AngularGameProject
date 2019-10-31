import { Component, OnInit } from '@angular/core';
/**
 * @todo MainMenu
 * @body Make the menu that allows you to get into a game, has seperate html file.
 */
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  show: boolean;
  playing: boolean;
  constructor() { }

  ngOnInit() {
    this.show = true;
    this.playing = false;
  }
  onClick():void{
    this.show=false;
    this.playing=true;
    console.log("test");
    
  }

}
