import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/reducer/productReducer';
import ProductApi from '../../service/productApi';
import BestPicks from './component/BestPicks';
import Brands from './component/Brands';
import Categories from './component/Categories';
import Countdown from './component/Countdown';
import Features from './component/Features';
import Reviews from './component/Reviews';
import TopSellers from './component/TopSellers';

function Home() {
	let dispatch = useDispatch();
	const { products } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(getProduct());
	}, []);

	return (
		<>
			<Categories />
			<Features />
			<BestPicks />
			<TopSellers products={products} />
			<Countdown />
			<Reviews />
			<Brands />
		</>
	);
}

export default Home;
