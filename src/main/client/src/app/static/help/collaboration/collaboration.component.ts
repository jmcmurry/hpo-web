import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definitions',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent implements OnInit {
  pageTitle: String  = "Help / Collaboration";
  pageIntro: String  = "";
  constructor() {

   }
  ngOnInit() {
  }

}
