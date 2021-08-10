import Pagination from '../../../component/Pagination';
import Order from './Order';

function Orders(props) {
	return (
		<>
			<Order />
			<div className="col-12">
				<Pagination />
			</div>
		</>
	);
}

export default Orders;
