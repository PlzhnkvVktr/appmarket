import React, {useEffect, useState} from "react";

import style from "./ModalAut.module.css";

export const ModalAut = ({active, setActive, user, setOwner}) => {
	useEffect(() => {
		setActive(false);
	}, [])


	const [loginField, setLogin] = useState()
	const [passwordField, setPassword] = useState()

	const isValid = (value) => {
		return value.length > 5
	}

	const [form, setForm] = useState({
		email: {
			value: '',
			valid: false,
		},
		password: {
			value: '',
			valid: false,
		},
	});
	// console.log('===>form', form);
	const onInputChange = (event) => {
		const {value, name} = event.target
		setForm((prevState) => ({
			...prevState,
			[name]: {
				value,
				valid: isValid(value),
			},
		}))
	}

	const login = () => {
		let users = JSON.parse(localStorage.getItem('users'));
		if (!users) {
			alert('юзер не найден');
			return;
		}
		let currentUser = users.find(i => i.email == form.email.value && i.password == form.password.value);
		if (currentUser) {
			localStorage.setItem('token', form.email.value);
			setOwner(form.email.value);
		} else {
			alert('юзер не найден')
		}
		setActive(false);
	}

	return (
		<div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<h3>Войдите в свою учетную запись</h3>
				<label className={style.nameInput}>Email</label>
				<input
					className={style.input}
					required
					pattern={"^[a-z,A-Z]$"}
					placeholder="Ваш Email"
					name="email"
					type="email"
					onChange={onInputChange}
					value={loginField}
				/>
				<label className={style.nameInput}>Пароль</label>
				<input className={style.input}
				       required
				       pattern={"^[a-z,A-Z]{1,10}$"}
				       placeholder="Ваш пароль"
				       name="password"
				       type="password"
				       onChange={onInputChange}
				       value={passwordField}/>
				<button className={style.buttonRegister} onClick={login}>Войти</button>
				{/*<div className={style.ques}>*/}
				<p className={style.uReg}>Нет аккаунта? <a href="#">Создать</a></p>

				{/*</div>*/}
			</div>
		</div>
	)
}