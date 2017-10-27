import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.css']
})
export class SpeechesComponent implements OnInit {
  speeches = []
  constructor() { }

  ngOnInit() {
    this.speeches = [
      {
        'name': 'first',
        'message': 'Message of speech'
      },
      {
        'name': 'second',
        'message': 'Message of speech'
      },
      {
        'name': 'third',
        'message': 'Message of speech'
      },
      {
        'name': 'fourth',
        'message': 'Message of speech'
      }
    ]
  }

}
