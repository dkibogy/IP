import { Component, OnInit, Input, Output } from '@angular/core'
import { Quote} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quotes: Quote;
  

  upvotes=0;
  downvotes=0;
  

  

  constructor() { }

  ngOnInit(): void {
  }

}
