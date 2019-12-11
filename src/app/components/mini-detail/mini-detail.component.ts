import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-detail',
  templateUrl: './mini-detail.component.html',
  styleUrls: ['./mini-detail.component.scss']
})

export class MiniDetailComponent implements OnInit {

  @Input() style = 'degree';

  constructor() { }

  ngOnInit() {
  }

}
