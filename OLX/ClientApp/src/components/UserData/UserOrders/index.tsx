import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Search from '../../Search/search';
import OrderItem from './orderItem';
import "./style.css";
import plas_path from "../../../images/icon/plas_path.png";
import promo from "../../../images/icon/promo.png";

const OredrList = () => {
	const { GetOrdersList } = useActions();
	const { orders } = useTypedSelector(store => store.profile)
	useEffect(() => {
		GetOrdersList();
	}, [GetOrdersList]);
	return (
		<div className="px-5">
			<Search></Search>
			<div className="container-panel row">
				<div className="col-8 mt-3 row">
					<p className="col-4 text-table text-center">Товар</p>
					<p className="col-3 text-table">Характеристика</p>
					<p className="col-3 text-table text-center">Ціна</p>
					<hr className="table-line mx-3" />
				</div>
				<div className="col-4 pt-1 px-5">
					<img className="" src={promo}></img>
				</div>

				<div className="col-8">
					<div className="row">
						<div className="col-4 text-center">
							<img className="table-image text-center" src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"></img>

						</div>
						<div className="col-3 align-self-center">
							<p className="table-title">Пальто клітинка</p>
							<p className="table-desc">Розмір М</p>
						</div>
						<div className="col-3 text-center align-self-center">
							<code className="table-price">550</code>
							<code className="table-price"> грн</code>
							<img src={plas_path} className="mx-5"></img>
						</div>
						<hr className="table-line mx-3 mt-2" />
					</div>

					<div className="row">
						<div className="col-4 text-center">
							<img className="table-image text-center" src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"></img>

						</div>
						<div className="col-3 align-self-center">
							<p className="table-title">Пальто клітинка</p>
							<p className="table-desc">Розмір М</p>
						</div>
						<div className="col-3 text-center align-self-center">
							<code className="table-price">550</code>
							<code className="table-price"> грн</code>
							<img src={plas_path} className="mx-5"></img>
						</div>
						<hr className="table-line mx-3 mt-2" />
					</div>
				</div>


				<div className="col-4 px-4 row">
					<div className="col-6">
						<code className="table-info">3</code>
						<code className="table-info"> товари на суму</code>
						<br />
						<p className="table-info mt-5">Вартість доставки</p>
					</div>
					<div className="col-6">
						<code className="table-priceInfo"> 1500</code>
						<code className="table-priceInfo"> грн</code>
						<p className="table-info mt-5">За тарифами перевізника</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OredrList;