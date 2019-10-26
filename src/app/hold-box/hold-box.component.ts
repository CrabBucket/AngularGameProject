import { Component, OnInit } from '@angular/core';
/**
 * @todo Hold Box
 * @body Holds a tetris piece displaying and storing it for later use.
 */
@Component({
  selector: 'app-hold-box',
  template: `
    <p>
      hold-box works!
    </p>
  `,
  styleUrls: ['./hold-box.component.scss']
})
export class HoldBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
