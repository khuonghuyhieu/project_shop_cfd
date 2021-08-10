import { Link, useRouteMatch } from 'react-router-dom';
import { convertObjectToQuery, convertQueryToObject } from '../utils';

function Pagination({ currentPage, totalPage }) {
	let match = useRouteMatch();

	function render() {
		if (totalPage === 1) return [];

		let start = currentPage - 2;
		let end = currentPage + 3;
		if (start < 1) {
			start = 1;
			end = 6;
		}

		if (end > totalPage) {
			end = totalPage;
		}

		let list = [];

		for (let i = start; i <= end; i++) {
			let ojbUrl = convertQueryToObject();
			ojbUrl.page = i;
			let queryString = convertObjectToQuery(ojbUrl);

			list.push(
				<li className={`page-item ${currentPage === i ? 'active' : ''}`}>
					<Link className="page-link" to={`${match.url}?${queryString}`}>
						{i}
					</Link>
				</li>
			);
		}

		return list;
	}

	return (
		<nav className="d-flex justify-content-center justify-content-md-end">
			<ul className="pagination pagination-sm text-gray-400">
				{currentPage > 1 && (
					<li className="page-item">
						<Link
							className="page-link page-link-arrow"
							to={`${match.url}?${convertObjectToQuery({
								...convertQueryToObject(),
								page: currentPage - 1,
							})}`}
						>
							<i className="fa fa-caret-left" />
						</Link>
					</li>
				)}
				{/* <li className="page-item active">
					<a className="page-link" href="#">
						1
					</a>
				</li> */}

				{render()}

				{currentPage < totalPage && (
					<li className="page-item">
						<Link
							className="page-link page-link-arrow"
							to={`${match.url}?${convertObjectToQuery({
								...convertQueryToObject(),
								page: currentPage + 1,
							})}`}
						>
							<i className="fa fa-caret-right" />
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Pagination;
