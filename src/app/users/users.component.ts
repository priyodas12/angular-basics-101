import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  initialTitle: string = 'testTitle';
  changedTitle: string = 'changedTitle';
  singleClickedNumber: number = 0;
  doubleClickedNumber: number = 0;
  mouseOverNumber: number = 0;

  willContextMenuShow: boolean = true;

  /**One way data binding types */

  //property binding
  imgUrl: string =
    'https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png';
  //attribute binding
  buttonLabel: string = 'Button Label';
  //Class binding
  isHighlightedText: boolean = true;
  //Style binding
  textColor: string = 'red';

  /**Two way data binding */
  myAge: number = 0;

  /**directives */
  isShowEnable: boolean = true;

  //ngFor
  products: string[] = ['sofa', 'laptop', 'bed', 'table', 'Tv'];

  numberChangeOnSingleClick() {
    this.singleClickedNumber += 1;
  }

  numberChangeOnDoubleClick() {
    this.initialTitle = this.changedTitle;
    this.doubleClickedNumber += 1;
  }

  onMouseOver(event: MouseEvent) {
    this.mouseOverNumber += 1;
  }

  onClickIncrease() {
    this.myAge = this.myAge + 1;
  }

  toggleContextMenu(showContextMenu: boolean, event: MouseEvent) {
    console.log(event);
    this.willContextMenuShow = showContextMenu;
  }
}
