import '@inertiajs/react';
import './index.scss';
import './base.scss';
import './fonts.scss';

import { useState, useReducer } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { appContext } from './context/context';

import AsideMenu from './components/AsideMenu/AsideMenu';
import Clients from './Pages/Clients/Clients';

export default function App() {
	const [isActiveMenu, setIsActiveMenu] = useReducer(prev => !prev, false);
	const [isActiveBlackout, setIsActiveBlackout] = useState(false);

	const location = useLocation();

	const context = {
		isActiveBlackout,
		isActiveMenu,
		setIsActiveBlackout,
		setIsActiveMenu,
	};

	return (
		<appContext.Provider value={{ ...context }}>
			<div
				className={`container ${
					location.pathname === '/' ? 'container--records' : ''
				}`}
			>
				<AsideMenu isHidden={location.pathname === '/registration'} />
				<div className='container__content'>
					<Routes>
						<Route path='/clients' element={<Clients />} />
					</Routes>
				</div>
			</div>

			<div className={`blackout ${isActiveBlackout ? 'active' : ''}`}></div>
		</appContext.Provider>
	);
}
