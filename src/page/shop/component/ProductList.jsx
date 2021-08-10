import ProductsItem from '../../../component/ProductsItem';

function ProductList({ products }) {
	return (
		<div className="row">
			{products?.map((value) => (
				<ProductsItem key={value._id} {...value} />
			))}
		</div>
	);
}

export default ProductList;
