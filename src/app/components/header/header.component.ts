import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sideNavigation;

  navigation;

  constructor() { }

  ngOnInit() {
      this.navigation = document.querySelector('#navigation');
  }

}
