import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public headers: HttpHeaders;

  constructor(public http: HttpClient) {}

  public getService(url: string) {
    return this.http.get(`${url}`);
  }

  getPosts() {
    return new Promise((resolve, reject) => {
      this.getService('https://jsonplaceholder.typicode.com/posts').subscribe(
        (response) => {
          resolve(response);
        },
        (errorResponse: any) => {
          reject(errorResponse);
        }
      );
    });
  }

  getPostsInfo(id) {
    return new Promise((resolve, reject) => {
      this.getService(
        'https://jsonplaceholder.typicode.com/posts/' + id
      ).subscribe(
        (response) => {
          resolve(response);
        },
        (errorResponse: any) => {
          reject(errorResponse);
        }
      );
    });
  }
}
