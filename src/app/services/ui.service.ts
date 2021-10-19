import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddBucket: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddBucket(): void {
    this.showAddBucket = !this.showAddBucket;
    this.subject.next(this.showAddBucket);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
