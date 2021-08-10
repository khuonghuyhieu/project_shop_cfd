import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Address from './Address';
import AddressDetail from './AddressDetail';
import Orders from './Orders';
import OrderDetail from './OrderDetail';
import Payment from './Payment';
import PaymentMethod from './PaymentMethod';
import WishList from './WishList';
import PersonInfo from './PersonInfo';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../redux/reducer/authReducer';

function TabList(props) {
	const { path } = useRouteMatch();

	let dispatch = useDispatch();

	function OnSubmit() {
		dispatch(logoutAction());
	}

	return (
		<>
			<div className="col-12 col-md-3">
				{/* Nav */}
				<nav className="mb-10 mb-md-0">
					<div className="list-group list-group-sm list-group-strong list-group-flush-x">
						<NavLink
							className="list-group-item list-group-item-action dropright-toggle "
							to={`${path}/orders`}
						>
							Orders
						</NavLink>
						<Link
							className="list-group-item list-group-item-action dropright-toggle"
							to={`${path}/wishlist`}
						>
							Widhlist
						</Link>
						<NavLink
							exact
							className="list-group-item list-group-item-action dropright-toggle "
							to={`${path}`}
						>
							Personal Info
						</NavLink>
						<NavLink
							className="list-group-item list-group-item-action dropright-toggle "
							to={`${path}/address`}
						>
							Addresses
						</NavLink>
						<NavLink
							className="list-group-item list-group-item-action dropright-toggle "
							to={`${path}/payment`}
						>
							Payment Methods
						</NavLink>
						<Link
							className="list-group-item list-group-item-action dropright-toggle"
							onClick={OnSubmit}
						>
							Logout
						</Link>
					</div>
				</nav>
			</div>
			<Switch>
				<Route path={`${path}/address`} component={Address} />
				<Route path={`${path}/address/address_detail`} component={AddressDetail} />
				<Route path={`${path}/orders`} component={Orders} />
				<Route path={`${path}/orders/order_detail`} component={OrderDetail} />
				<Route path={`${path}/payment`} component={Payment} />
				<Route path={`${path}/payment/payment_detail`} component={PaymentMethod} />
				<Route path={`${path}/wishlist`} component={WishList} />
				<Route component={PersonInfo} />
			</Switch>
		</>
	);
}

export default TabList;
