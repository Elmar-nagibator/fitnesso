import { InputMask } from '@react-input/mask'
import React, { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { registerUser } from '../../store/redusers/user'
import './Register.css'

const Register = () => {
	const navigate = useNavigate()
	const password = useRef()
	const [passwordEye, setPasswordEye] = useState(false)
	const [confirmEye, setConfirmEye] = useState(false)

	const dispatch = useDispatch()
	const { user, status, token, error } = useSelector(state => state.user)

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm({
		mode: 'onChange',
	})

	const regUser = data => {
		let { confirmPwd, ...userData } = data

		dispatch(registerUser(userData))
	}

	password.current = watch('password', '')

	if (status === 'success') {
		return <Navigate to='/' />
	}



	return (
		<section className='register'>
			<div className='container'>
				<form
					noValidate
					className='register__form'
					onSubmit={handleSubmit(regUser)}
				>
					<h1 className='register__title'>Регистрация</h1>

					<div className='register__row'>
						{/* Имя */}
						<div className='register__group'>
							<input
								{...register('name', {
									maxLength: {
										value: 15,
										message: 'Максимальная длина этого поля — 15 символов.',
									},
									minLength: {
										value: 3,
										message: 'Минимальная длина этого поля — 3 символа.',
									},
									pattern: {
										value: /^[A-ZА-ЯЁ][a-zа-яё]{1,19}$/,
										message:
											'Имя должно начинаться с заглавной буквы и содержать только буквы!',
									},
									required: 'Пожалуйста, заполните это поле.',
								})}
								className={`register__field ${errors.name ? 'errors' : ''}`}
								placeholder=''
								type='text'
							/>
							<span className='register__error'>
								{errors.name && errors.name.message}
							</span>
							<label className='register__label'>Имя</label>
						</div>

						{/* Телефон */}
						<div className='register__group'>
							<Controller
								name='phone'
								control={control}
								rules={{
									required: 'Введите номер телефона!',
									pattern: {
										value: /^\+996\(\d{3}\) \d{2}-\d{2}-\d{2}$/,
										message: 'Некорректный формат телефона!',
									},
								}}
								render={({ field }) => (
									<InputMask
										className={`register__field ${errors.phone ? 'errors' : ''}`}
										placeholder=''
										{...field}
										mask='+996(___) __-__-__'
										replacement={{ _: /\d/ }}
									/>
								)}
							/>
							<span className='register__error'>
								{errors.phone && errors.phone.message}
							</span>
							<label className='register__label'>Контактный телефон</label>
						</div>

						{/* Email */}
						<div className='register__group'>
							<input
								{...register('email', {
									required: 'Пожалуйста, укажите ваш email.',
									minLength: {
										value: 7,
										message: 'Email должен содержать минимум 7 символов.',
									},
									maxLength: {
										value: 30,
										message: 'Email может содержать максимум 30 символов.',
									},
									pattern: {
										value:
											/^(?=.*[a-zA-Z])(.{1,})@([a-zA-Z]{2,6})\.([a-zA-Z]{2,3})$/,
										message: 'Введите корректный email.',
									},
								})}
								className={`register__field ${errors.email ? 'errors' : ''}`}
								placeholder=''
								type='email'
							/>
							<span className='register__error'>
								{errors.email && errors.email.message}
							</span>
							<label className='register__label'>Электронная почта</label>
						</div>

						{/* Пароль */}
						<div className='register__group'>
							<input
								{...register('password', {
									required: 'Пожалуйста, укажите ваш пароль.',
									pattern: {
										value:
											/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#%^&*]{8,}/g,
										message:
											'Пароль должен содержать минимум 8 символов, одну заглавную букву, строчную букву и цифру.',
									},
								})}
								className={`register__field ${errors.password ? 'errors' : ''}`}
								placeholder=''
								type={passwordEye ? 'text' : 'password'}
							/>
							<span className='register__error'>
								{errors.password && errors.password.message}
							</span>
							<label className='register__label'>Пароль</label>
							<span
								onClick={() => setPasswordEye(!passwordEye)}
								className='register__icon'
							>
								{passwordEye ? <IoEyeOutline /> : <IoEyeOffOutline />}
							</span>
						</div>


						{/* Повторите пароль */}
						<div className='register__group'>
							<input
								{...register('confirmPwd', {
									required: 'Пожалуйста, подтвердите ваш пароль.',
									validate: value =>
										value === password.current || 'Пароли не совпадают',
								})}
								className={`register__field ${
									errors.confirmPwd ? 'errors' : ''
								}`}
								placeholder=''
								type={confirmEye ? 'text' : 'password'}
							/>
							<span className='register__error'>
								{errors.confirmPwd && errors.confirmPwd.message}
							</span>
							<label className='register__label'>Повторите пароль</label>
							<span
								onClick={() => setConfirmEye(!confirmEye)}
								className='register__icon'
							>
								{confirmEye ? <IoEyeOutline /> : <IoEyeOffOutline />}
							</span>
						</div>
					</div>

					<label className='register__checkbox' htmlFor='checkbox'>
						<input type='checkbox' name='checkbox' id='checkbox' />
						Даю согласие на обработку персональных данных
					</label>

					<div className='register__btns'>
						<button type='submit' className='register__btn'>
							Отправить
						</button>
						<button
							onClick={() => navigate('/login')}
							type='button'
							className='register__btn'
						>
							Войти в кабинет
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Register
