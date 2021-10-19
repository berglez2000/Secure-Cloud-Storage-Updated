import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bucket } from 'src/Bucket';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  @Input() bucket!: Bucket;
  @Output() onDeleteBucket = new EventEmitter();
  showBucketStorage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDoubleClick(){
    this.showBucketStorage = !this.showBucketStorage;
  }

  deleteBucket(){
    this.onDeleteBucket.emit(this.bucket);
  }
}
