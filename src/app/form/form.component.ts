import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { Quote} from '../quotes'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //information in the form should go out into the quote body component. no input because users will type//

  @Input()newQuote = new Quote('','','','', new Date());

  @Output() addQuote= new EventEmitter<Quote>()
  


  onSubmit(){  
    this.addQuote.emit(this.newQuote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
