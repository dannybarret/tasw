import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() error: string;
  @Input() type = 'text' || 'password';

  @Output() keyUpComponent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  asignText(value){
    this.keyUpComponent.emit(value);
  }

}
