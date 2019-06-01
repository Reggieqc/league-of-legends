import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() cssRefresh  = new EventEmitter<boolean>();
  @Input() class:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  cambiarValor(){
    this.class = !this.class;
    this.cssRefresh.emit(this.class);
  }
}
