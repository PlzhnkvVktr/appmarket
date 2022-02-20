import { Main } from "../components/Main/Main";
import { ProductCard } from "../components/Main/Product/ProductCard/ProductCard";
import { Basket } from "../components/Main/Basket/Basket";


export const PublicRoutes = [
	{
		path: '/main',
		component: Main,
		exact: true,
	},
	// {
	// 	path: '/Basket',
	// 	component: Basket,
	// 	exact: true,
	// },
	{
		path: '/product:id',
		component: ProductCard,
		exact: true,
	},
]

export const PrivateRoutes = [
	{
		path: '/main',
		component: Main,
		exact: true,
	},
	{
		path: '/Basket',
		component: Basket,
		exact: true,
	},
	{
		path: '/product:id',
		component: ProductCard,
		exact: true,
	},
]