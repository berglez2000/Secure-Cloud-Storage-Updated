import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Bucket } from 'src/Bucket';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {
  @Input() buckets!: Bucket[];
  @Output() onDeleteBucket = new EventEmitter();
  showAddBucket!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.uiService.onToggle().subscribe(value => this.showAddBucket = value);
  }

  ngOnInit(): void {
  }

  toggleAddBucket(){
    this.uiService.toggleAddBucket();
  }

  deleteBucket(bucket: Bucket){
    this.onDeleteBucket.emit(bucket);
  }

}
