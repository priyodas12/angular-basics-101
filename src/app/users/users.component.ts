import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  initialTitle: string = "testTitle";
  changedTitle: string = "changedTitle";
  singleClickedNumber: number = 0;
  doubleClickedNumber: number = 0;
  mouseOverNumber: number = 0;

  numberChangeOnSingleClick() { 
    this.singleClickedNumber += 1;
  }

  numberChangeOnDoubleClick() { 
    this.initialTitle = this.changedTitle;
    this.doubleClickedNumber += 1;
  }

  onMouseOver(event:MouseEvent) { 
    this.mouseOverNumber += 1;
  }
}
