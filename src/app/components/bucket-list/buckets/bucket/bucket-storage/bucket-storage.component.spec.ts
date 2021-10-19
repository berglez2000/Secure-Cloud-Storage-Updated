import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketStorageComponent } from './bucket-storage.component';

describe('BucketStorageComponent', () => {
  let component: BucketStorageComponent;
  let fixture: ComponentFixture<BucketStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
