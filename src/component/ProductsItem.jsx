import { Skeleton } from '@material-ui/lab';
import { Link } from 'react-router-dom';

function ProductsItem({ images, specifications, name, price, slug, loading }) {
	let img = '/img/products/product-21.jpg';

	return (
		<div className="col-6 col-md-4 col-lg-3">
			{/* Card */}
			<div className="card mb-7">
				{/* Badge */}
				<div className="badge badge-white card-badge card-badge-left text-uppercase">New</div>
				{/* Image */}
				<div className="card-img">
					{/* Image */}
					{/* Link products */}
					<Link className="card-img-hover" to={`/products/${slug}`}>
						{loading ? (
							<Skeleton variant="rect" width={210} height={250} />
						) : (
							<>
								{images[0].medium_url && (
									<img
										className="card-img-top card-img-back"
										src={
											images[0].medium_url === 'https://salt.tikicdn.com/assets/img/image.svg'
												? img
												: images[0].medium_url
										}
										alt="..."
									/>
								)}
								{images[0].medium_url && (
									<img
										className="card-img-top card-img-front"
										src={
											images[0].medium_url === 'https://salt.tikicdn.com/assets/img/image.svg'
												? img
												: images[0].medium_url
										}
										alt="..."
									/>
								)}
							</>
						)}
					</Link>
					{/* Actions */}
					<div className="card-actions">
						<span className="card-action">
							<button
								className="btn btn-xs btn-circle btn-white-primary"
								data-toggle="modal"
								data-target="#modalProduct"
							>
								<i className="fe fe-eye" />
							</button>
						</span>
						<span className="card-action">
							<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
								<i className="fe fe-shopping-cart" />
							</button>
						</span>
						<span className="card-action">
							<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
								<i className="fe fe-heart" />
							</button>
						</span>
					</div>
				</div>
				{/* Body */}
				<div className="card-body px-0">
					{/* Category */}
					<div className="font-size-xs">
						{/* Link Shop */}
						<a className="text-muted" href="shop.html">
							{specifications[0].attributes[0].value}
						</a>
					</div>
					{/* Title */}
					<div className="font-weight-bold">
						{/* Link products */}
						<Link className="text-body" to={`/products/${slug}`}>
							{name}
						</Link>
					</div>
					{/* Price */}
					<div className="font-weight-bold text-muted">{price}</div>
				</div>
			</div>
		</div>
	);
}

export default ProductsItem;
