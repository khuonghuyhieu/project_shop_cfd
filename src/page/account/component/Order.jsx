import { Link, NavLink, useRouteMatch } from 'react-router-dom';

function Order(props) {
	const { path } = useRouteMatch();
	return (
		<div className="col-12 col-md-9 col-lg-8 offset-lg-1">
			{/* Order */}
			<div className="card card-lg mb-5 border">
				<div className="card-body pb-0">
					{/* Info */}
					<div className="card card-sm">
						<div className="card-body bg-light">
							<div className="row">
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Order No:</h6>
									{/* Text */}
									<p className="mb-lg-0 font-size-sm font-weight-bold">673290789</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Shipped date:</h6>
									{/* Text */}
									<p className="mb-lg-0 font-size-sm font-weight-bold">
										<time dateTime="2019-10-01">01 Oct, 2019</time>
									</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Status:</h6>
									{/* Text */}
									<p className="mb-0 font-size-sm font-weight-bold">Awating Delivery</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Order Amount:</h6>
									{/* Text */}
									<p className="mb-0 font-size-sm font-weight-bold">$259.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="row align-items-center">
						<div className="col-12 col-lg-6">
							<div className="form-row mb-4 mb-lg-0">
								<div className="col-3">
									{/* Image */}
									<div
										className="embed-responsive embed-responsive-1by1 bg-cover"
										style={{ backgroundImage: 'url(/img/products/product-5.jpg)' }}
									/>
								</div>
								<div className="col-3">
									{/* Image */}
									<div
										className="embed-responsive embed-responsive-1by1 bg-cover"
										style={{ backgroundImage: 'url(/img/products/product-112.jpg)' }}
									/>
								</div>
								<div className="col-3">
									{/* Image */}
									<div
										className="embed-responsive embed-responsive-1by1 bg-cover"
										style={{ backgroundImage: 'url(/img/products/product-7.jpg)' }}
									/>
								</div>
								<div className="col-3">
									{/* Image */}
									<div className="embed-responsive embed-responsive-1by1 bg-light">
										<a
											className="embed-responsive-item embed-responsive-item-text text-reset"
											href="#!"
										>
											<div className="font-size-xxs font-weight-bold">
												+2 <br /> more
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="form-row">
								<div className="col-6">
									{/* Button */}
									<Link
										className="btn btn-sm btn-block btn-outline-dark"
										to={`${path}/order_detail`}
									>
										Order Details
									</Link>
								</div>
								<div className="col-6">
									{/* Button */}
									<a className="btn btn-sm btn-block btn-outline-dark" href="#!">
										Track order
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Order */}
			<div className="card card-lg mb-5 border">
				<div className="card-body pb-0">
					{/* Info */}
					<div className="card card-sm">
						<div className="card-body bg-light">
							<div className="row">
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Order No:</h6>
									{/* Text */}
									<p className="mb-lg-0 font-size-sm font-weight-bold">871090437</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Shipped date:</h6>
									{/* Text */}
									<p className="mb-lg-0 font-size-sm font-weight-bold">
										<time dateTime="2019-09-25">25 Sep, 2019</time>
									</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Status:</h6>
									{/* Text */}
									<p className="mb-0 font-size-sm font-weight-bold">In Processing</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Order Amount:</h6>
									{/* Text */}
									<p className="mb-0 font-size-sm font-weight-bold">$75.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="row align-items-center">
						<div className="col-12 col-lg-6">
							<div className="form-row mb-4 mb-lg-0">
								<div className="col-3">
									{/* Image */}
									<div
										className="embed-responsive embed-responsive-1by1 bg-cover"
										style={{ backgroundImage: 'url(/img/products/product-11.jpg)' }}
									/>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="form-row">
								<div className="col-6">
									{/* Button */}
									<Link
										className="btn btn-sm btn-block btn-outline-dark"
										to={`${path}/order_detail`}
									>
										Order Details
									</Link>
								</div>
								<div className="col-6">
									{/* Button */}
									<a className="btn btn-sm btn-block btn-outline-dark" href="#!">
										Track order
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Order */}
			<div className="card card-lg mb-5 border">
				<div className="card-body pb-0">
					{/* Info */}
					<div className="card card-sm">
						<div className="card-body bg-light">
							<div className="row">
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Order No:</h6>
									{/* Text */}
									<p className="mb-lg-0 font-size-sm font-weight-bold">891230563</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Shipped date:</h6>
									{/* Text */}
									<p className="mb-lg-0 font-size-sm font-weight-bold">
										<time dateTime="2019-09-07">07 Sep, 2019</time>
									</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Status:</h6>
									{/* Text */}
									<p className="mb-0 font-size-sm font-weight-bold">Delivered</p>
								</div>
								<div className="col-6 col-lg-3">
									{/* Heading */}
									<h6 className="heading-xxxs text-muted">Order Amount:</h6>
									{/* Text */}
									<p className="mb-0 font-size-sm font-weight-bold">$69.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="row align-items-center">
						<div className="col-12 col-lg-6">
							<div className="form-row mb-4 mb-lg-0">
								<div className="col-3">
									{/* Image */}
									<div
										className="embed-responsive embed-responsive-1by1 bg-cover"
										style={{ backgroundImage: 'url(/img/products/product-14.jpg)' }}
									/>
								</div>
								<div className="col-3">
									{/* Image */}
									<div
										className="embed-responsive embed-responsive-1by1 bg-cover"
										style={{ backgroundImage: 'url(/img/products/product-15.jpg)' }}
									/>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="form-row">
								<div className="col-6">
									{/* Button */}
									<Link
										className="btn btn-sm btn-block btn-outline-dark"
										to={`${path}/order_detail`}
									>
										Order Details
									</Link>
								</div>
								<div className="col-6">
									{/* Button */}
									<a className="btn btn-sm btn-block btn-outline-dark" href="#!">
										Track order
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Pagination */}
		</div>
	);
}

export default Order;
