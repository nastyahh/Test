import './ClientsAddForm.scss';
import { useState, useEffect } from 'react';

function ClientsAddForm({ isVisible, setIsVisible, setUsers, users }) {
	const [name, setName] = useState();
	const [surname, setSurname] = useState();
	const [patronymic, setPatronymic] = useState();
	const [date, setDate] = useState();
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();
	const [gender, setGender] = useState('Male');

	const [errorMessage, setErrorMessage] = useState('');

	const saveClient = async () => {
		const data = {
			firstname: name,
			surname: surname,
			middlename: patronymic,
			dateofbirth: date,
			phone: phone,
			email: email,
			gender: gender,
		};

		console.log([
			...users,
			{
				name: name,
				surname: surname,
				patronymic: patronymic,
				date: date,
				phone: phone,
				email: email,
				gender: gender,
				visits: 0,
				payed: 0,
				averageCheck: 0,
				lastVisit: '-',
			},
		]);
		try {
			const response = await fetch('', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-CSRF-TOKEN': document
						.querySelector('meta[name="csrf-token"]')
						.getAttribute('content'),
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				// setErrorMessage("");
				// setIsVisible(false);
				setUsers([
					...users,
					{
						name: name,
						surname: surname,
						patronymic: patronymic,
						date: date,
						phone: phone,
						email: email,
						gender: gender,
						visits: 0,
						payed: 0,
						averageCheck: 0,
						lastVisit: '-',
					},
				]);
				console.log([
					...users,
					{
						name: name,
						surname: surname,
						patronymic: patronymic,
						date: date,
						phone: phone,
						email: email,
						gender: gender,
						visits: 0,
						payed: 0,
						averageCheck: 0,
						lastVisit: '-',
					},
				]);
			} else {
				setErrorMessage(`Ошибка: сервер ответил статусом ${response.status}`);
			}
		} catch (error) {
			setErrorMessage(`Ошибка сети: ${error.message}`);
		}
	};

	return (
		<>
			<div className={`clients-add ${isVisible ? 'active' : ''}`}>
				<div className='clients-add__top'>
					<svg
						onClick={() => setIsVisible(prev => !prev)}
						className='clients-add__back'
						height='24'
						width='24'
					>
						<use xlinkHref='../../assets/icons/Clients_Sprite.svg#icon-clients-back' />
					</svg>
					<h6 className='clients-add__title'>Новый клиент</h6>
					<svg
						onClick={() => setIsVisible(prev => !prev)}
						className='clients-add__icon'
						height='18'
						width='18'
					>
						<use xlinkHref='../../assets/icons/Clients_Sprite.svg#icon-clients-cross' />
					</svg>
				</div>
				<form className='clients-add__form'>
					<div className='clients-add__block'>
						<input
							className='clients-add__input'
							placeholder='Имя'
							value={name}
							onChange={e => setName(e.target.value)}
							type='text'
						/>
						<input
							className='clients-add__input'
							placeholder='Фамилия'
							value={surname}
							onChange={e => setSurname(e.target.value)}
							type='text'
						/>
						<input
							className='clients-add__input'
							placeholder='Отчество'
							value={patronymic}
							onChange={e => setPatronymic(e.target.value)}
							type='text'
						/>
						<input
							className='clients-add__input'
							placeholder='Дата рождения'
							value={date}
							onChange={e => setDate(e.target.value)}
							type='text'
						/>
						<input
							className='clients-add__input'
							placeholder='+7 (___) ___ __ __'
							value={phone}
							onChange={e => setPhone(e.target.value)}
							type='tel'
						/>
						<input
							className='clients-add__input'
							placeholder='Эл. почта'
							value={email}
							onChange={e => setEmail(e.target.value)}
							type='email'
						/>
					</div>
					<div className='clients-add__block'>
						<div className='clients-add__field'>
							<label className='clients-add__label'>Пол</label>
							<div className='clients-add__col'>
								<input
									className='clients-add__radio'
									id='male'
									name='gender'
									type='radio'
									value='Male'
									checked={gender === 'Male'}
									onChange={() => setGender('Male')}
								/>
								<label htmlFor='male' className='clients-add__label'>
									Мужской
								</label>
							</div>
							<div className='clients-add__col'>
								<input
									className='clients-add__radio'
									id='female'
									name='gender'
									type='radio'
									value='Female'
									checked={gender === 'Female'}
									onChange={() => setGender('Female')}
								/>
								<label htmlFor='female' className='clients-add__label'>
									Женский
								</label>
							</div>
						</div>
						<input
							className='clients-add__input'
							placeholder='Скидка'
							type='text'
						/>
						<input
							className='clients-add__input'
							placeholder='Оказано услуг на сумму'
							type='text'
						/>
					</div>
					<button className='clients-add__button' onClick={saveClient}>
						Сохранить
					</button>
				</form>
			</div>
		</>
	);
}

export default ClientsAddForm;
