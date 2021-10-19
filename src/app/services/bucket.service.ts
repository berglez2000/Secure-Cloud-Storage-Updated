import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bucket } from 'src/Bucket';
import { File } from 'src/File'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private bucketUrl = 'http://localhost:5000/buckets';
  private filesUrl = 'http://localhost:5000/files';

  constructor(private http:HttpClient) { }

  // Buckets
  getBuckets(): Observable<Bucket[]>{
    return this.http.get<Bucket[]>(this.bucketUrl);
  }

  addBucket(bucket: Bucket): Observable<Bucket> {
    return this.http.post<Bucket>(this.bucketUrl, bucket, httpOptions);
  }

  deleteBucket(bucket: Bucket): Observable<Bucket> {
    const url = `${this.bucketUrl}/${bucket.id}`;
    return this.http.delete<Bucket>(url, httpOptions);
  }

  // Files
  getFiles(id: number): Observable<File[]>{
    const url = `${this.filesUrl}?bucket_id=${id}`;
    return this.http.get<File[]>(url);
  }

  deleteFile(file: File): Observable<File>{
    const url = `${this.filesUrl}/${file.id}`;
    return this.http.delete<File>(url);
  }

  addFile(file: File): Observable<File>{
    return this.http.post<File>(this.filesUrl, file, httpOptions);
  }

  deleteFiles(bucket: Bucket): Observable<File>{
    const url = `${this.filesUrl}?bucket_id=${bucket.id}`;
    return this.http.delete<File>(url);
  }
}
