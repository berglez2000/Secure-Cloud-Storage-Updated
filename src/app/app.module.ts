import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { AddBucketComponent } from './components/bucket-list/add-bucket/add-bucket.component';
import { BucketsComponent } from './components/bucket-list/buckets/buckets.component';
import { ButtonComponent } from './components/button/button.component';
import { BucketComponent } from './components/bucket-list/buckets/bucket/bucket.component';
import { BucketStorageComponent } from './components/bucket-list/buckets/bucket/bucket-storage/bucket-storage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileComponent } from './components/bucket-list/buckets/bucket/bucket-storage/file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BucketListComponent,
    AddBucketComponent,
    BucketsComponent,
    ButtonComponent,
    BucketComponent,
    BucketStorageComponent,
    FileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
