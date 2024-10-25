import './ClientsHeader.scss';
import { useState, useRef } from 'react';

function ClientsHeader({ setIsPopup, setIsVisible }) {
	const dropdownRef = useRef(null);

	const [activeCount, setActiveCount] = useState(false);
	const [valueActiveCount, setValueActiveCount] = useState('Отобразить 20');

	const [activeOptions, setActiveOptions] = useState(false);

	const handleOptionClickActiveCount = newValue => {
		setValueActiveCount(newValue);
	};

	const exportOptions = () => {};

	const importOptions = () => {};

	const handleOpenDropdown = (state, handler) => {
		handler(prev => !prev);
		if (state) return;
		setTimeout(() => {
			const handleClick = e =>
				handleClickOutsideDropdown(e, handleClick, handler);
			window.addEventListener('click', handleClick);
		}, 0);
	};
	const handleClickOutsideDropdown = (e, handler, setter) => {
		setter(false);
		window.removeEventListener('click', handler);
	};

	return (
		<header className='clients-header'>
			<div className='clients-header__mobile'>
				<svg
					onClick={() => setIsVisible(prev => !prev)}
					className='clients-header__mobile-burger'
					height='24'
					width='24'
				>
					<use xlinkHref='./icons/Header_Sprite.svg#icon-header-burger' />
				</svg>
				<h2 className='clients-header__mobile-title'>Клиенты</h2>
			</div>
			<div className='clients-header__left'>
				<div className='clients-header__left-blockSearch'>
					<svg
						onClick={() => setIsVisible(prev => !prev)}
						className='clients-header__left-burger'
						height='24'
						width='24'
					>
						<use xlinkHref='./icons/Header_Sprite.svg#icon-header-burger' />
					</svg>
					<input
						className='clients-header__left-search'
						placeholder='Поиск'
						type='text'
					/>
					<svg className='clients-header__left-icon' height='19' width='17'>
						<use xlinkHref='./icons/Header_Sprite.svg#icon-header-search' />
					</svg>
				</div>
				<div
					className={'clients-header__left-blockCount'}
					ref={dropdownRef}
					onClick={() => handleOpenDropdown(activeCount, setActiveCount)}
				>
					<div className={'clients-header__left-blockCount-header'}>
						<span className={'clients-header__left-blockCount-header-text'}>
							{valueActiveCount}
						</span>
						<svg
							className={
								activeCount
									? 'clients-header__left-blockCount-header-icon-rotated'
									: 'clients-header__left-blockCount-header-icon'
							}
							height='18'
							width='18'
						>
							<use xlinkHref='./icons/Clients_Sprite.svg#icon-clients-arrow-right' />
						</svg>
					</div>
					<div
						className={`clients-header__left-blockCount-content ${
							activeCount ? '' : ' clients-header__left-blockCount-closed'
						}`}
					>
						<button
							className='clients-header__left-blockCount-content-item'
							onMouseDown={() => handleOptionClickActiveCount('Отобразить 20')}
						>
							Отобразить 20
						</button>
						<button
							className='clients-header__left-blockCount-content-item'
							onMouseDown={() => handleOptionClickActiveCount('Отобразить 50')}
						>
							Отобразить 50
						</button>
					</div>
				</div>
			</div>
			<div className='clients-header__right'>
				<div
					className={
						'clients-header__left-blockCount clients-header__left-blockCount-small'
					}
					ref={dropdownRef}
					onClick={() => handleOpenDropdown(activeOptions, setActiveOptions)}
				>
					<div
						className={
							'clients-header__left-blockCount-header clients-header__left-blockCount-small-header'
						}
					>
						<svg
							className={'clients-header__right-icon'}
							height='18'
							width='18'
						>
							<use xlinkHref='./icons/Header_Sprite.svg#icon-header-option' />
						</svg>
						<span className={'clients-header__left-blockCount-header-text'}>
							Опции
						</span>
					</div>
					<div
						className={`clients-header__left-blockCount-content clients-header__left-blockCount-small-content ${
							activeOptions ? '' : ' clients-header__left-blockCount-closed'
						}`}
					>
						<button
							className='clients-header__left-blockCount-content-item clients-header__left-blockCount-small-item'
							onMouseDown={exportOptions}
						>
							<svg
								className={
									'clients-header__right-icon clients-header__left-blockCount-small-item-icon'
								}
								height='18'
								width='18'
							>
								<use xlinkHref='./icons/Header_Sprite.svg#icon-header-export' />
							</svg>
							<span>Экспорт</span>
						</button>
						<button
							className='clients-header__left-blockCount-content-item clients-header__left-blockCount-small-item'
							onMouseDown={importOptions}
						>
							<svg
								className={
									'clients-header__right-icon clients-header__left-blockCount-small-item-icon'
								}
								height='18'
								width='18'
							>
								<use xlinkHref='./icons/Header_Sprite.svg#icon-header-import' />
							</svg>
							<span>Импорт</span>
						</button>
					</div>
				</div>
				<button className='clients-header__right-button filters'>
					<svg className='clients-header__right-icon' height='18' width='18'>
						<use xlinkHref='./icons/Header_Sprite.svg#icon-header-filters' />
					</svg>
					Фильтры
				</button>
				<button
					onClick={() => setIsPopup(prev => !prev)}
					className='clients-header__right-button add'
				>
					<svg className='clients-header__right-icon' height='18' width='18'>
						<use xlinkHref='./icons/Header_Sprite.svg#icon-header-add' />
					</svg>
					Добавить клиента
				</button>
			</div>
		</header>
	);
}

export default ClientsHeader;
