import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { ProdServiceService } from '../prod-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	constructor(private route: ActivatedRoute, private service: ProdServiceService) { }

	prod;

	ngOnInit() {
		this.getProd();
	}

	getProd(): void {
		let id = this.route.snapshot.paramMap.get('id');
		this.service.getProds()
			.subscribe(prods => {
				prods.filter(ele => {
					if (ele.entity_id == id) { this.prod = ele }
				});
			});
	}

}