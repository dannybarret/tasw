import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public id: string;
  public name: string;
  public email: string;
  public body: string;

  constructor() {}

  ngOnInit(): void {
    this.preload();
  }

  preload() {
    const auxInfo = JSON.parse(localStorage.getItem('infoModal'));
    this.id = auxInfo['id'];
    this.name = auxInfo['title'];
    this.body = auxInfo['body'];
  }
}
