import { Component, OnInit } from '@angular/core';
import { Quote} from '../quotes'

@Component({
  selector: 'app-quote-body',
  templateUrl: './quote-body.component.html',
  styleUrls: ['./quote-body.component.css']
})
export class QuoteBodyComponent implements OnInit {
  quotes = [
    new Quote('Tech', "steve Jobs","Innovation distinguishes between a leader and a follower.", 'suzie' ),
    new Quote('love ','Dalai Lama',"love is the absense of judgement", "daisy"),
    new Quote('life', 'Oprah Winfrey', 'Think like a Queen. A queen who is not afraid to fail', 'jane')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
