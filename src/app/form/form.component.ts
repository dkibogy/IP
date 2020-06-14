import { Component, OnInit, Output } from '@angular/core';
import { Quotes} from '../quotes'
import { from } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quotes('','','',new Date()); 
  @Output() addQuote = new EventEmitter<Quotes>();

  onSubmit(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
