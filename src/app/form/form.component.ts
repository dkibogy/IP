import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Quote} from '../quotes'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() addQuote= new EventEmitter()
  category: string;
  author: string;
  message: string;
  date: number;
  name: string;
  theWords: any


  onSubmit(){
    this.theWords = new Quote('','','','')
    this.category=''
    this.author=''
    this.message=''
    this.addQuote.emit(this.theWords)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
