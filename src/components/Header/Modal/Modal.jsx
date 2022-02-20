import React, {useEffect, useState} from "react";

import style from "./Modal.module.css";


export const Modal = ({active, setActive}) => {
	useEffect(() => {
		setActive(false);
	}, [])

	const [user, setUser] = useState({
		name: '',
		password: '',
		email: '',
	});
	const buttonDisabled = useState(true)
	

	

	const validationPassword = (password) => {
		const regexPassword = new RegExp(
			`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${8},})`
		);
		return regexPassword.test(password);
	};
	
	const validationName = (name) => {
		const regexName = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${6},})`);
		return regexName.test(name);
	  };
	  
	const validationEmail = (email) => {
		const regexEmail =
		  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regexEmail.test(email);
	  };

	const onInputChange = (v) => {
		
	
        setUser({ ...user, [v.target.name]: v.target.value });
		if(validationPassword(user.password)
			&& validationName(user.name)
			&& validationEmail(user.email)){

			buttonDisabled[1](false)
		} else {
			buttonDisabled[1](true)
		}
    }
	
	const register = () => {
		let users = JSON.parse(localStorage.getItem('users'));
		if (users) {
			localStorage.setItem('users', JSON.stringify([...users, user]));
			alert('Пользователь добавлен');
		} else {
			localStorage.setItem('users', JSON.stringify([user]));
			alert('Пользователь добавлен');
		}
		buttonDisabled(true)
		setActive(false);
	}

	return(
		<div id={"modal"} className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
			<form onSubmit={register} className={style.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Создайте аккаунт</h3>
				<label className={style.nameInput}>Имя</label>
				<input className={style.input} placeholder="Ваше имя" name="name" type="text" onChange={onInputChange} />
				<label className={style.nameInput} >Email</label>
				<input className={style.input} placeholder="Ваш Email" name='email'  type="email" onChange={onInputChange} />
				<label className={style.nameInput}>Пароль</label>
				<input className={style.input} placeholder="Ваш пароль" name="password"  type="password" onChange={onInputChange} />
				<button className={style.buttonRegister} disabled={buttonDisabled[0]}>Register</button>
				<p className={style.uReg}>У вас уже есть аккаунт?</p>
				<a href="#" onClick={() => setActive(false)}>Войти</a>
			</form>
		</div>
	)
}

// className={style.active ? `${style.modal} ${style.active}` : style.modal}