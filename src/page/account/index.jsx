import BreadCrumb from '../../component/BreadCrumb';
import TabList from './component/TabList';

function Account(props) {
	return (
		<>
			<section className="pt-7 pb-12">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							{/* Heading */}
							<h3 className="mb-10">My Account</h3>
						</div>
					</div>
					<div className="row">
						<TabList />
					</div>
				</div>
			</section>
		</>
	);
}

export default Account;
