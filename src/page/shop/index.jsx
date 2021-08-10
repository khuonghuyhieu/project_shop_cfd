import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Pagination from '../../component/Pagination';
import { getCatalog, getProduct } from '../../redux/reducer/productReducer';
import { convertQueryToObject, convertObjectToQuery } from '../../utils';
import Catalog from './component/Catalog';
import ProductList from './component/ProductList';
import Slider from './component/Slider';
import Tags from './component/Tags';
import BreadCrumb from '../../component/BreadCrumb';
import Price from './component/Price';

function Shop(props) {
	let match = useRouteMatch();
	let history = useHistory();
	let dispatch = useDispatch();

	const { category, paginate, products } = useSelector((store) => store.product);
	let queryUrl = convertQueryToObject();
	let strUrl = convertObjectToQuery(queryUrl);

	let catalog = {
		title: 'All products',
		link: '/shop',
	};

	let { slug } = match.params;

	if (slug) {
		slug = slug.replace(/.*id/g, '');
		let f = category.find((e) => e.id == slug);
		if (f) {
			catalog = {
				title: f.title,
				link: `/shop/${f.slug}`,
			};
		}
	}

	strUrl += slug ? `&categories=${slug}` : '';
	useEffect(() => {
		dispatch(getCatalog());
		dispatch(getProduct(strUrl + (slug ? `&categories=${slug}` : '')));
	}, [strUrl]);

	function sortChange(e) {
		let queryObj = convertQueryToObject();
		queryObj.sort = e.target.value;
		queryObj.page = 1;
		let queryURL = convertObjectToQuery(queryObj);
		history.push(`${match.url}?${queryURL}`);
	}

	return (
		<section className="py-11">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-4 col-lg-3">
						{/* Filters */}
						<ul className="nav nav-vertical" id="filterNav">
							<Catalog category={category} />
							<Price />
						</ul>
					</div>
					<div className="col-12 col-md-8 col-lg-9">
						{/* Slider */}
						<Slider />
						{/* Header */}
						<div className="row align-items-center mb-7">
							<div className="col-12 col-md">
								{/* Heading */}
								<h3 className="mb-1">{catalog.title}</h3>
								{/* Breadcrumb */}
								<BreadCrumb
									list={[
										{
											title: 'Home',
											link: '',
										},
										catalog,
									]}
								/>
							</div>
							<div className="col-12 col-md-auto">
								{/* Select */}
								<select className="custom-select custom-select-xs" onChange={sortChange}>
									<option selected={queryUrl.sort === ''} value="">
										Sort
									</option>
									<option selected={queryUrl.sort === 'real_price.1'} value="real_price.1">
										Low Price
									</option>
									<option selected={queryUrl.sort === 'real_price.-1'} value="real_price.-1">
										Higher Price
									</option>
									<option
										selected={queryUrl.sort === 'rating_average.-1'}
										value="rating_average.-1"
									>
										Higher Rating
									</option>
									<option selected={queryUrl.sort === 'discount_rate.-1'} value="discount_rate.-1">
										Discount
									</option>
								</select>
							</div>
						</div>
						{/* Tags */}
						<Tags />
						{/* Products */}
						<ProductList products={products} />
						{/* Pagination */}
						<Pagination {...paginate} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Shop;
