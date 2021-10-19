import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-bucket',
  templateUrl: './add-bucket.component.html',
  styleUrls: ['./add-bucket.component.css']
})
export class AddBucketComponent implements OnInit {
  @Output() onAddBucket = new EventEmitter;
  name!: string;
  location!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      return alert('Please enter bucket name');
    }

    const newBucket = {
      name: this.name,
      location: this.location
    }

    this.onAddBucket.emit(newBucket);

    this.name = '';
  }

}
