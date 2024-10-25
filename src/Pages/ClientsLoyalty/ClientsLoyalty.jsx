import { useState, useContext } from 'react';

import ClientsLoyaltyItem from '@/components/ClientsLoyaltyItem';
import ClientsAddForm from '@/components/ClientsAddForm';
import ClientsHeader from '@/components/ClientsHeader';

import useBlackout from '@/hooks/useBlackout';
import { appContext } from '@/context';

import './ClientsLoyalty.scss';

export default function ClientsLoyalty() {
	const { setIsActiveMenu } = useContext(appContext);
	const [isDelete, setIsDelete] = useState('none');
	const [isAddFormVisible, setIsAddFormVisible] = useState(false);

	useBlackout([isAddFormVisible]);

	return (
		<>
			<ClientsHeader
				title='Лояльность'
				setIsPopup={setIsAddFormVisible}
				setIsVisible={setIsActiveMenu}
				isDelete={isDelete}
				setIsDelete={setIsDelete}
			/>
			<div className='clients-loyalty'>
				<div className='clients-loyalty__container scrollbar'>
					<div className='clients-loyalty__table'>
						<div className='clients-loyalty__table-row'>
							<span className='clients-loyalty__table-header'>Клиент</span>
							<span className='clients-loyalty__table-header'>Кэшбек</span>
							<span className='clients-loyalty__table-header'>
								Кол-во баллов
							</span>
							<span className='clients-loyalty__table-header'>Скидка</span>
							<span className='clients-loyalty__table-header'>Телефон</span>
						</div>
						<ClientsLoyaltyItem
							src='client-1.png'
							name='Иванов Марк'
							cashback='10%'
							scores='1 200'
							sale='20%'
							phone='+7 (987) 878 98-87'
							isDelete={isDelete}
						/>
						<ClientsLoyaltyItem
							src='client-2.png'
							name='Ерошин Олег'
							cashback='10%'
							scores='1 200'
							sale='20%'
							phone='+7 (987) 878 98-87'
							isDelete={isDelete}
						/>
						<ClientsLoyaltyItem
							src='client-3.png'
							name='Кравцов Иван'
							cashback='10%'
							scores='1 200'
							sale='20%'
							phone='+7 (987) 878 98-87'
							isDelete={isDelete}
						/>
					</div>
				</div>
				<div className='clients-loyalty__pagination'>
					<button className='clients-loyalty__pagination-arrow left'>
						<svg
							className='clients-loyalty__pagination-icon'
							height='17'
							width='17'
						>
							<use xlinkHref='../../assets/icons/Clients_Sprite.svg#icon-clients-arrow-left' />
						</svg>
					</button>
					<button className='clients-loyalty__pagination-button active'>
						1
					</button>
					<button className='clients-loyalty__pagination-button'>2</button>
					<button className='clients-loyalty__pagination-button'>3</button>
					<button className='clients-loyalty__pagination-arrow right'>
						<svg
							className='clients-loyalty__pagination-icon'
							height='17'
							width='17'
						>
							<use xlinkHref='../../assets/icons/Clients_Sprite.svg#icon-clients-arrow-right' />
						</svg>
					</button>
				</div>
			</div>
			<button
				onClick={() => setIsAddFormVisible(prev => !prev)}
				className='clients__add'
			>
				<svg className='clients__add-icon' height='24' width='24'>
					<use xlinkHref='../../assets/icons/Header_Sprite.svg#icon-header-add' />
				</svg>
				Добавить клиента
			</button>
			<ClientsAddForm
				isVisible={isAddFormVisible}
				setIsVisible={setIsAddFormVisible}
			/>
		</>
	);
}
