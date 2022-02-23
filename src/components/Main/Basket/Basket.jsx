import React, {useState, useEffect} from "react";

import {NavLink} from "react-router-dom";
import { CartElem } from "./CartElem/CartElem";

import style from "./Basket.module.css";




export const Basket = () => {

	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
	const [total, setTotal] = useState(0)
	const sumItems = useEffect(() => {
		let sum = 0;
		cart.forEach((item) => {
			let price = item.price.replace('$', '')
			let calculation = price * item.total;
			sum += calculation;
		})
		setTotal(sum)
	}, [cart])

	return (
		<main className={style.main}>
			<div className={style.pageLinks}>
				<span>
					<NavLink
						className={style.pageLink} to={`/main`}>Main page  /</NavLink>
				</span>
				<span>
					<NavLink className={style.pageLinkMain} to={'#!'}> Basket</NavLink>
				</span>
			</div>
			<br />
			<h1 className={style.pageTitle}>Basket</h1>
			<div className={style.container}>
				<div className={style.cartContainer}>
					{cart.map((item, idx) => (
						<CartElem
							setCart={setCart}
							cart={cart}
							key={idx}
							id={item.id}
							img={item.img}
							titleProduct={item.titleProduct}
							price={item.price}
							total={item.total}
						/>
					))}
				</div>
				<div className={style.subContainer}>
					<div className={style.totalSum}>
						<p>Итого</p>
						<p>${total}</p>
					</div>
					<button
						className={style.buttonTotal}
						onClick={sumItems}
					>
						Расчитать
					</button>
				</div>
			</div>
		</main>
	)
}