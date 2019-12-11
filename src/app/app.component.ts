import { Component, OnInit, ViewChild } from '@angular/core';
import {SideBarService} from './side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sideBar', {static: false}) sideBar;
  title = 'portfolio';

  constructor( public sidebar: SideBarService ) { }

  ngOnInit() {
    this.sidebar.openBar$.subscribe( () => {
        this.sideBar.open();
    });
  }

}
