import { Component, OnInit, Input, Output } from '@angular/core'
import { Quotes} from '../quotes';
import { from } from 'rxjs'
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quotes: Quotes;
  likes=0;
  dislikes=0;

  

  

  constructor() { }

  ngOnInit(): void {
  }

}
