import { useNavigate, useLocation } from 'react-router-dom';

import './AsideMenuItem.scss';

function AsideMenuItem({ path, onChangePage, text, icon, isArrow, isSmall }) {
	const navigate = useNavigate();
	const location = useLocation();

	const onClickItem = () => {
		onChangePage(text);
		navigate(path);
	};

	const isActive = location.pathname === path;

	return (
		<li
			onClick={onClickItem}
			className={`item ${isActive ? 'active' : ''} ${
				isSmall ? 'item--small' : ''
			}`}
		>
			<svg className='item__icon' height='25' width='25'>
				<use
					xlinkHref={`./icons/AsideMenu_Sprite.svg#icon-aside-menu-${icon}`}
				/>
			</svg>
			{text}
			{isArrow && (
				<svg className='item__arrow' height='14' width='14'>
					<use xlinkHref='./icons/AsideMenu_Sprite.svg#icon-aside-menu-arrow' />
				</svg>
			)}
		</li>
	);
}

export default AsideMenuItem;
