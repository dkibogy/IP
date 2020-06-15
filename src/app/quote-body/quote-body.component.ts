import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote} from '../quotes'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-quote-body',
  templateUrl: './quote-body.component.html',
  styleUrls: ['./quote-body.component.css']
})
export class QuoteBodyComponent implements OnInit {
  //quotes = [
    //new Quote('Tech', "steve Jobs","Innovation distinguishes between a leader and a follower.", 'suzie' ),
    //new Quote('love ','Dalai Lama',"love is the absense of judgement", "daisy"),
    //new Quote('life', 'Oprah Winfrey', 'Think like a Queen. A queen who is not afraid to fail', 'jane')
  //]

  @Input() quote : Quote;
  @Output() Complete = new EventEmitter<Boolean>();

  numberofupVotes: number = 0;
  numberofdownVotes: number = 0;
  
  
  upVote(){
    this.numberofupVotes++;
  }
  downVote(){
    this.numberofdownVotes++;
  }
  
  delete(isComplete:boolean){
    this.Complete.emit(isComplete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
