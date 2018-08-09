import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';

@Injectable()
export class ProdServiceService {

	constructor(private http: HttpClient) { }

	getProds(): Observable<Product[]> {
		return this.http.get<Product[]>("https://session-paxcel.herokuapp.com/products");
	}


}