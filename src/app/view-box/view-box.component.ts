import { Component, OnInit } from '@angular/core';
/**
 * @todo ViewBox
 * @body Shows the Tetris pieces coming next.
 */
@Component({
  selector: 'app-view-box',
  template: `
    <p>
      view-box works!
    </p>
  `,
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
