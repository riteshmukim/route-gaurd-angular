import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css']
})
export class CrisisCenterComponent implements OnInit {
  crisis: any;
  editName: any;
  dialogService: any;

  constructor() { }

  ngOnInit() {
  }

}
