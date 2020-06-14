import { Component, OnInit, Output } from '@angular/core';
import { Quote} from '../quotes'
import { from } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteWords:string
  quoteEditor:string
  quoteAuthor:string
  quoteDate:number
  theWords:any

  submitQuote(){
    this.theWords = new Quote('','','')
    this.quoteWords=''
    this.quoteAuthor=''
    this.quoteEditor=''
    this.emitQuote.emit(this.theWords)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
