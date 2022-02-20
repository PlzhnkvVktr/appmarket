import React from 'react';

import {NavLink} from "react-router-dom";

import s from './Product.module.scss';


export const Product = (props) => {
  return(
	<div className={s.container}>
		<div className={s.product}>
			<img
				src={props.img}
				alt="productImg"
				align="middle"
			/>
			<div className={s.productInfo}>
				<NavLink className={s.productTitle} to={`/product${props.id}`}>
					{props.titleProduct}
				</NavLink>
				<p className={s.productPrice}>{props.price}</p>
			</div>
		</div>
	</div>
  )
}