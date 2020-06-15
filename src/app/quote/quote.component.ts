import { Component, OnInit, Input, Output } from '@angular/core'
import { Quote} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]  =[
    new Quote('Tech', "steve Jobs","Innovation distinguishes between a leader and a follower.", 'suzie',new Date(2020,6,13) ),
    new Quote('love ','Dalai Lama',"love is the absense of judgement", "daisy", new Date(2020,6,13)),
    new Quote('life', 'Oprah Winfrey', 'Think like a Queen. A queen who is not afraid to fail', 'jane', new Date(2012,6,13))
  ];

  newQuote(quote){
    this.quotes.push(quote)
  }

  

  

  

  constructor() { }

  ngOnInit(): void {
  }

}
