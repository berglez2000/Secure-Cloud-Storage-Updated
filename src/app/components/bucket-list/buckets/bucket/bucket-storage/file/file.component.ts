import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from 'src/File';
import { faTrash, faFileAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() file!: File;
  @Output() onFileDelete = new EventEmitter();
  faTrash = faTrash;
  faFileAlt = faFileAlt;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onFileDelete.emit(this.file);
  } 

}
