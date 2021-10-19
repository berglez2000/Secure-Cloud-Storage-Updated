import { Component, OnInit } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { UiService } from 'src/app/services/ui.service';
import { Bucket } from 'src/Bucket';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  buckets!: Bucket[];
  showAddBucket!: boolean;

  constructor(private bucketService: BucketService, private uiService: UiService) { 

    this.bucketService.getBuckets().subscribe((value) => {
      this.buckets = value;
    });

    this.uiService.onToggle().subscribe(value => this.showAddBucket = value);

  }

  ngOnInit(): void {
  }

  addBucket(bucket: Bucket){
    this.bucketService.addBucket(bucket).subscribe(() => {
      this.buckets.push(bucket);
    });
  }

  deleteBucket(bucket: Bucket) {
    this.bucketService.deleteBucket(bucket).subscribe(() => {
      this.buckets.map((b) => {
        if(b.id === bucket.id){
          this.buckets.splice(this.buckets.indexOf(bucket), 1);
        }
      });
    });
  }

}
