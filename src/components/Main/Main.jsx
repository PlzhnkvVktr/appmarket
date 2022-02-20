//библиотеки
import React, {useState} from "react";

//файлы и компоненты
import {Product} from "./Product";
import {productsMock} from "../../mocks/mock";

//стили потом картинки
import style from './Main.module.css';
// import titleImg from '../../assets/image/titleImg.png'

export const Main = (number) => {
	const [products, setProducts] = useState(productsMock);
	const [valueInput, setValueInput] = useState('')

	const filteredProducts = products.filter(e => 
		e.titleProduct.toLowerCase().includes(valueInput.toLowerCase())
	)


	return (
		<main className={style.main}>
			<div className={style.mainTitle}>
				<h1 className={style.heading}>
					Гарантия лучшего качества
				</h1>
			</div>
			<div>
				<form className={style.searchForm}>
					<input
						type="text" 
						placeholder="Введите название"
						onChange={(e) => setValueInput(e.target.value)}
					/>
				</form>
			</div>
			<div className={style.container}>
				{filteredProducts.map((product, idx) => (
					<Product 
						number={number} 
						key={idx} 
						id={product.id} 
						img={product.img} 
						titleProduct={product.titleProduct} 
						price={product.price}
					/>
				))}
			</div>
		</main>
	)
}


