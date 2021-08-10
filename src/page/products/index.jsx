import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductApi from '../../service/productApi';
import Description from './component/Description';
import Features from './component/Features';
import Product from './component/Product';
import Reviews from './component/Reviews';
import TopSell from './component/TopSell';

function Products() {
	return (
		<>
			<nav className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* Breadcrumb */}
							<ol className="breadcrumb mb-0 font-size-xs text-gray-400">
								<li className="breadcrumb-item">
									<a className="text-gray-400" href="index.html">
										Home
									</a>
								</li>
								<li className="breadcrumb-item">
									<a className="text-gray-400" href="shop.html">
										Women's Shoes
									</a>
								</li>
								<li className="breadcrumb-item active">Leather Sneakers</li>
							</ol>
						</div>
					</div>
				</div>
			</nav>
			{/* PRODUCT */}
			<Product />
			{/* DESCRIPTION */}
			<Description />
			{/* TopSell */}
			<TopSell />
			{/* REVIEWS */}
			<Reviews />
			{/* FEATURES */}
			<Features />
		</>
	);
}

export default Products;
