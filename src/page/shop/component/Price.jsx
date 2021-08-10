import { useRef } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { convertObjectToQuery, convertQueryToObject } from '../../../utils';

function Price() {
	let query = convertQueryToObject();
	let history = useHistory();
	let routeMatch = useRouteMatch();

	let minRef = useRef();
	let maxRef = useRef();

	function _apply() {
		if (minRef.current.value) {
			query.min = minRef.current.value.trim();
		} else {
			delete query.min;
		}

		if (maxRef.current.value) {
			query.max = maxRef.current.value.trim();
		} else {
			delete query.max;
		}

		let minValue = minRef.current.value;
		let maxValue = maxRef.current.value;

		if (minValue || maxValue) {
			if (minValue) {
				query.min = minValue.trim();
			} else {
				delete query.min;
			}
			if (maxValue) {
				query.max = maxValue.trim();
			} else {
				delete query.max;
			}

			query.page = 1;
		}
		history.push(routeMatch.url + '?' + convertObjectToQuery(query));
	}

	return (
		<li className="nav-item">
			{/* Toggle */}
			<a
				className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
				data-toggle="collapse"
				href="#priceCollapse"
			>
				Price
			</a>
			<div className="d-flex align-items-center">
				{/* Input */}
				<input
					type="number"
					className="form-control form-control-xs"
					placeholder="$10.00"
					ref={minRef}
					defaultValue={query.min}
				/>
				{/* Divider */}
				<div className="text-gray-350 mx-2">‒</div>
				{/* Input */}
				<input
					type="number"
					className="form-control form-control-xs"
					placeholder="$350.00"
					ref={maxRef}
					defaultValue={query.max}
				/>
			</div>
			<button className="btn btn-light" onClick={_apply} style={{ marginTop: 10 }}>
				Áp dụng
			</button>
		</li>
	);
}

export default Price;
