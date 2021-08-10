import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux';
import './assets/css/custom.scss';
import './index.css'
import PrivateRouter from './core/PrivateRouter';
import { MainLayout } from './layout/MainLayout/index';
import Home from './page/home';
import Page404 from './page/404page';
import About from './page/about';
import AuthSignAndRegister from './page/auth';
import BlogPost from './page/blogpost';
import Blogs from './page/blog';
import CheckOut from './page/checkout';
import ComingSoon from './page/comingsoon';
import ContactUs from './page/contactus';
import Faq from './page/faq';
import OrderCompleted from './page/ordercompleted';
import Products from './page/products';
import Shipping from './page/shipping';
import Shop from './page/shop';
import ShoppingCart from './page/shoppingcart';
import StoreLocator from './page/storelocator';
import TranslateProvider from './core/Translate';
import vi from './translate/vi.json';
import gm from './translate/gm.json';
import Auth from './service/auth';
import Orders from './page/account/component/Orders';
import Account from './page/account';

let translate = {
	vn: vi,
	gm: gm,
};

// Auth.update({
// 	name: 'Nguyễn Văn A',
// }).then((result) => {});

function App() {
	return (
		<TranslateProvider translate={translate}>
			<Provider store={store}>
				<BrowserRouter>
					<MainLayout>
						<Switch>
							<Route path="/storelocator" component={StoreLocator} />
							<PrivateRouter path="/account" component={Account} />
							<Route path="/shoppingcart" component={ShoppingCart} />
							<Route path="/shop/:slug" component={Shop} />
							<Route path="/shop" component={Shop} />
							<Route path="/shipping" component={Shipping} />
							<Route path="/products/:slug" component={Products} />
							<Route path="/ordercompleted" component={OrderCompleted} />
							<Route path="/faq" component={Faq} />
							<Route path="/contactus" component={ContactUs} />
							<Route path="/comingsoon" component={ComingSoon} />
							<Route path="/checkout" component={CheckOut} />
							<Route path="/blogs" component={Blogs} />
							<Route path="/blogpost" component={BlogPost} />
							<Route path="/auth" component={AuthSignAndRegister} />
							<Route path="/about" component={About} />
							<Route exact path="/" component={Home} />
							<Route component={Page404} />
						</Switch>
					</MainLayout>
				</BrowserRouter>
			</Provider>
		</TranslateProvider>
	);
}

export default App;
