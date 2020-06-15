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
  newQuote: any


  onSubmit(){
    this.newQuote = new Quote('','','','')
    this.category=''
    this.author=''
    this.message=''
    this.date
    
    this.addQuote.emit(this.newQuote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
