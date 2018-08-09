import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { ProdServiceService } from '../prod-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


	prods = [];
	skus = [];

	constructor(private service: ProdServiceService) { }

	ngOnInit() {
		this.getProds();
	}

	getProds(): void {
		this.service.getProds()
			.subscribe(prods => {
				this.prods = _.groupBy(prods, 'sku');
				this.skus =  Object.keys(this.prods);
			});
	}

}
