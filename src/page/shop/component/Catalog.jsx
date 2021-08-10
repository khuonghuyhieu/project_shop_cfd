import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Catalog({ category }) {
	return (
		<li className="nav-item">
			{/* Toggle */}
			<a
				className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
				data-toggle="collapse"
				href="#categoryCollapse"
			>
				Category
			</a>
			{/* Collapse */}
			<div className="collapse show" id="categoryCollapse">
				<div className="form-group">
					<ul className="list-styled mb-0" id="productsNav">
						<li className="list-styled-item">
							<NavLink className="list-styled-link" to="/shop">
								All Products
							</NavLink>
						</li>
						{category?.map((e) => (
							<li key={e._id} className="list-styled-item">
								<NavLink className="list-styled-link" to={`/shop/${e.slug}`}>
									{e.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
}

export default Catalog;
