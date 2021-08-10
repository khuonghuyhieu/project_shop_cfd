import React from 'react';
import ProductsItem from '../../../component/ProductsItem';

function TopSellers({ products }) {
	return (
		<section className="py-12">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-10 col-lg-8 col-xl-6">
						{/* Heading */}
						<h2 className="mb-4 text-center">Top month Sellers</h2>
						{/* Nav */}
						<div className="nav justify-content-center mb-10">
							<a className="nav-link active" href="#topSellersTab" data-toggle="tab">
								Women
							</a>
							<a className="nav-link" href="#topSellersTab" data-toggle="tab">
								Men
							</a>
							<a className="nav-link" href="#topSellersTab" data-toggle="tab">
								Kids
							</a>
						</div>
					</div>
				</div>
				<div className="tab-content">
					<div className="tab-pane fade show active" id="topSellersTab">
						<div className="row">
							{products?.map((value, i) => (
								<ProductsItem key={value.slug} {...value} />
							))}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{/* Link  */}
						<div className="mt-7 text-center">
							<a className="link-underline" href="#!">
								Discover more
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TopSellers;
