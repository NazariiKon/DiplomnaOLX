import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Search from '../../Search/search';
import "./style.css";
import promo from "../../../images/icon/promo.png";
import ellipse from "../../../images/icon/Ellipse.png";
import plas_path from "../../../images/icon/plas_path.png";
import geo from "../../../images/icon/geo.png";
import { useActions } from '../../../hooks/useActions';

const OredrList = () => {
	const { basket } = useTypedSelector((store) => store.profile);
	const { BasketAll, BasketDelete } = useActions();

	const totalPrice: number = basket.reduce(
		(prevValue: number, currentValue: { price: number; }) => prevValue + Number(currentValue.price),
		0
	);

	const cities = [
		{ value: 'Kyiv', name: 'Київ', obl: 'Київська область' },
		{ value: 'Kharkiv', name: 'Харків', obl: 'Харківська область' },
		{ value: 'Odesa', name: 'Одеса', obl: 'Одеська область' },
		{ value: 'Dnipro', name: 'Дніпро', obl: 'Дніпропетровська область' },
		{ value: 'Zaporizhzhia', name: 'Запоріжжя', obl: 'Запорізька область' },
		{ value: 'Lviv', name: 'Львів', obl: 'Львівська область' },
		{ value: 'Kryvyi Rih', name: 'Кривий Ріг', obl: 'Дніпропетровська область' },
		{ value: 'Mykolaiv', name: 'Миколаїв', obl: 'Миколаївська область' }
	];

	useEffect(() => {
		try {
			BasketAll();
		} catch (error) {
			console.log("Server error global");
		}
	}, []);

	const deleteFromLike = (id: number) => {
		try {
			BasketDelete(id);
			BasketAll();
		} catch (error) {
			console.log("Server error global");
		}
	}
	return (
		<div className="px-5">
			<Search></Search>
			<div className="container-panel row">
				<div className="col-9 mt-3 row">
					<p className="col-4 text-table text-center">Товар</p>
					<p className="col-3 text-table">Характеристика</p>
					<p className="col-3 text-table text-center">Ціна</p>
					<hr className="table-line col-md-11 mx-5" />
				</div>
				<div className="col-3 pt-1">
					<img className="col-lg-12 col-md-12 col-sm-12" src={promo}></img>
				</div>

				<div className="col-9">
					{
						basket.map((adv: any, index: any) => {
							return (
								<div className="row" key={index}>
									<div className="col-4 text-center">
										<img className="col-xl-7 col-md-10 table-image text-center" src={"/images/" + adv.image} ></img>
									</div>
									<div className="col-3 align-self-center">
										<p className="table-title">{adv.name}</p>
										<p className="table-desc">{adv.description}</p>
									</div>
									<div className="col-3 text-center align-self-center">
										<code className="table-price">{adv.price}</code>
										<code className="table-price"> грн</code>
										<img src={plas_path} onClick={() => deleteFromLike(adv.id)} className="mx-5" role="button"></img>
									</div>
									<hr className="table-lineItem mt-4 col-md-10 mx-5" />
								</div>
							);
						})
					}
				</div>


				<div className="col-3 row parent">
					<div className="col-7">
						<code className="table-info">{basket.length}</code>
						<code className="table-info"> товари на суму</code>
						<br />
						<p className="table-info mt-3">Вартість доставки</p>
					</div>
					<div className="col-5">
						<code className="table-priceInfo">{totalPrice}</code>
						<code className="table-priceInfo"> грн</code>
						<p className="table-info mt-3">За тарифами перевізника</p>
					</div>

					<div className="row child">
						<code className="col-6 table-priceResultText">До сплати:</code>
						<div className="col-6">
							<code className="table-priceResult">{totalPrice}</code>
							<code className="table-priceResult"> грн</code>
						</div>
						<button className="table-btn col-md-12 mt-4 mb-4">Підтверджую замовлення</button>
						<div className="">
							<p className="table-confirmText">Підтверджуючи замовлення, я приймаю умови:</p>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label table-confirmText" htmlFor="flexCheckDefault">
									положення про обробку і захист персональних даних
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="flexCheck" />
								<label className="form-check-label table-confirmText" htmlFor="flexCheck">
									угоди користувача
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<p className="text-order mt-5">Оформлення замовлення</p>
				<p className="text-order mt-5"><img src={ellipse} className="px-1"></img> Ваші контактні дані</p>
				<form>
					<div className="form-group row mt-4">
						<div className="col-4">
							<label className="text-order">Призвіще</label>
							<input type="name" className="form-control mt-3 input-order" />
						</div>
						<div className="col-4">
							<label className="text-order">Ім’я</label>
							<input type="name" className="form-control mt-3 input-order" />
						</div>
						<div className="col-4">
							<label className="text-order">По батькові</label>
							<input type="name" className="form-control mt-3 input-order" />
						</div>
						<div className="col-4 mt-3">
							<label className="text-order">Номер телефону</label>
							<input className="form-control mt-3 input-order" type="tel"
								pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
							></input>
						</div>
					</div>
					<p className="text-order mt-4"><img src={ellipse} className="px-1"></img> Доставка</p>
					<p className="text-order mt-3">Ваше місто</p>

					<div className="border border-secondary col-6 p-3">
						<img src={geo} className=""></img>
						<select className="col-11 border border-white customSelect mx-1">
							{cities.map((city) => (
								<option value={city.value}>{city.name}</option>
							))}
						</select>
					</div>

					<div className="form-check row mt-3">
						<div className="form-check mt-2">
							<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
							<label className="text-order form-check-label" htmlFor="flexRadioDefault1">
								Самовивіз з Укрпошта
							</label>
						</div>
						<div className="form-check mt-2">
							<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
							<label className="text-order form-check-label" htmlFor="flexRadioDefault2">
								Самовивіз з Нової  Пошти
							</label>
						</div>
						<div className="form-check mt-2">
							<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
							<label className="text-order form-check-label" htmlFor="flexRadioDefault3">
								Кур’єр Нова Пошта
							</label>
						</div>
					</div>
					<p className="text-order mt-5"><img src={ellipse} className="px-1"></img> Оплата</p>
					<div className="form-check row">
						<div className="form-check">
							<input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault5" />
							<label className="text-order form-check-label" htmlFor="flexRadioDefault5">
								Оплата під час отримання товару
							</label><br />
							<p className='text-order-small'>Послуга післяплати оплачується окремо, за тарифами перевізника</p>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault6" />
							<label className="text-order form-check-label" htmlFor="flexRadioDefault6">
								Оплатити зараз
							</label>
						</div>
					</div>
					{/* <button type="submit" className="btn btn-primary">Submit</button> */}
				</form>
			</div >
		</div >
	);
};

export default OredrList;