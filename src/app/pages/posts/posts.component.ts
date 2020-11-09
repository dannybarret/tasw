import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http/http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public users = [];
  public showContent = false;

  constructor(public http: HttpService) { }

  ngOnInit(): void {
  }
}
