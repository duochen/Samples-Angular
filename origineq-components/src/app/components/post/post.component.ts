import { Component, OnInit, Input } from '@angular/core';
import { PostInfo } from './../../model/post-info';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() public post: PostInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
