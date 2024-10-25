import { useState, useContext, useEffect } from 'react';
import useBlackout from '../../hooks/useBlackout';
import { appContext } from '../../context/context';
import Client from '../../components/Client/Client';
import ClientsAddForm from '../../components/ClientsAddForm/ClientsAddForm';
import ClientsPopup from '../../components/ClientsPopup/ClientsPopup';
import ClientsHeader from '../../components/ClientsHeader/ClientsHeader';
import clientsData from '../../clients.js';
import './Clients.scss';
import Pagination from '../../components/Pagination/Pagination.jsx';

function Clients() {
	const { setIsActiveMenu } = useContext(appContext);

	const [isAddFormVisible, setIsAddFormVisible] = useState(false);
	const [isPopupVisible, setIsPopupVisible] = useState(false);

	useBlackout([isAddFormVisible, isPopupVisible]);

	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const clientsPerPage = 4;

	useEffect(() => {
		const fetchClients = () => {
			const start = (currentPage - 1) * clientsPerPage;
			const end = start + clientsPerPage;
			setUsers(clientsData.data.Clients.slice(start, end));
		};
		fetchClients();
	}, [currentPage]);

	const totalPages = Math.ceil(clientsData.data.Clients.length / clientsPerPage);

	const handlePageChange = (offset) => {
		setCurrentPage((prev) => Math.min(Math.max(prev + offset, 1), totalPages));
	};

	return (
		<>
			<ClientsHeader
				setIsPopup={setIsAddFormVisible}
				setIsVisible={setIsActiveMenu}
			/>
			<div className='clients'>
				<div className='clients__container scrollbar'>
					<div className='clients__table'>
						<div className='clients__table-row'>
							<span className='clients__table-header'>Клиент</span>
							<span className='clients__table-header'>Визиты</span>
							<span className='clients__table-header'>Оплачено</span>
							<span className='clients__table-header'>Средний чек</span>
							<span className='clients__table-header'>Последний визит</span>
							<span className='clients__table-header'>День рождения</span>
						</div>
						{users.map((item) => (
							<Client
								key={item.clientid}
								id={item.clientid}
								checkMore={() => setIsPopupVisible((prev) => !prev)}
								src={item.src}
								name={item.name}
								phone={item.phone}
								visits={item.visits}
								payed={item.Info.Stats[0].sum}
								averageCheck={item.Info.Stats[0].AverageCheck}
								lastVisit={item.Info.Stats[0].lastvisit}
								date={item.dateofbirth}
							/>
						))}
					</div>
				</div>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
			<button
				onClick={() => setIsAddFormVisible((prev) => !prev)}
				className='clients__add'
			>
				<svg className='clients__add-icon' height='24' width='24'>
					<use xlinkHref='./icons/Header_Sprite.svg#icon-header-add' />
				</svg>
				Добавить клиента
			</button>
			<ClientsAddForm
				isVisible={isAddFormVisible}
				setIsVisible={setIsAddFormVisible}
				setUsers={setUsers}
				users={users}
			/>
			<ClientsPopup
				isVisible={isPopupVisible}
				setIsVisible={setIsPopupVisible}
			/>
		</>
	);
}

export default Clients;
