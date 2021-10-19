import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { Bucket } from 'src/Bucket';
import { File } from 'src/File'; 
import { faTrash, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bucket-storage',
  templateUrl: './bucket-storage.component.html',
  styleUrls: ['./bucket-storage.component.css']
})
export class BucketStorageComponent implements OnInit {
  @Input() bucket!: Bucket;
  @Output() deleteBucket = new EventEmitter();
  files!: File[];
  isShowFiles: boolean = true;
  isShowDetails: boolean = false;
  validFiles!: boolean;
  faTrash = faTrash;
  faFileAlt = faFileAlt;

  constructor(private bucketService: BucketService) { 
  }

  ngOnInit(): void {
    this.bucketService.getFiles(this.bucket.id).subscribe((value) => {
      this.files = value;
      if(value.length <= 0){
        this.validFiles = false;
      } else{
        this.validFiles = true;
      }
    });
  }

  showFiles(){
    this.isShowDetails = false;
    this.isShowFiles = true;
  }

  showDetails(){
    this.isShowDetails = true;
    this.isShowFiles = false;
  }

  onFileDelete(file: File){
    this.bucketService.deleteFile(file).subscribe(() => {
      this.files.map((f) => {
        if(f.id === file.id){
          this.files.splice(this.files.indexOf(file), 1);
        }
      });
    });
  }

  onDeleteBucket(){
    this.deleteBucket.emit(this.bucket);
  }

  convertBytes(bytes: any, decimals: any){
    if(bytes == 0) return '0 Bytes';
    var k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  onChange(e: any){
    const fileInfo = e.target.files[0];
    const date = new Date(fileInfo.lastModified);

    const newFile: File = {
      filename: fileInfo.name,
      bucket_id: this.bucket.id,
      size: this.convertBytes(fileInfo.size, 0),
      last_modified: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
    }

    this.bucketService.addFile(newFile).subscribe(() => {
      this.files.push(newFile);
      this.validFiles = true;
    });
  }

}
