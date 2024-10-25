import './Client.scss';

export default function Client({
	id,
	src,
	name,
	phone,
	visits,
	payed,
	averageCheck,
	lastVisit,
	date,
	checkMore,
}) {
	return (
		<div className='client'>
			<span className='client__cell'>
				<div className='client__cell-info'>
					<div className='client__cell-wrapper'>
						<img alt={name} src={`/img/${src}`} />
					</div>
					<h6 className='client__cell-title'>
						{name}
						<span className='client__cell-phone'>{phone}</span>
					</h6>
				</div>
			</span>
			<span className='client__cell'>{visits}</span>
			<span className='client__cell'>{payed}₽</span>
			<span className='client__cell'>{averageCheck}₽</span>
			<span className='client__cell'>{lastVisit}</span>
			<span className='client__cell'>{date}</span>
			<span onClick={checkMore} className='client__cell'>
				Подробнее
			</span>
		</div>
	);
}
