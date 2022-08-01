import { UniqueComponentId } from 'primereact/utils';
import { Order } from './types';

interface OrderProps {
  data: Order;
}

const OrderItem = (props: OrderProps) => {
  //dateCreated, statusName, items, region, city, street, homeNumber, consumerFirstName, consumerSecondName, consumerPhone,
	const { data:{id, items}} = props;
	const quan = items.reduce((prev, current) => prev, 0);
	const totalSum = items.reduce((prev, current) => prev + current.buyPrice, 0)
  return (
    <>
      <div className="row m-3">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="accordion-item">
            <h2 className="accordion-header" id={`${id}`}>
              <div className="row">
                <button
                  className="accordion-button collapsed col"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${id}`}
                >
                  <div className="col">№: {id}</div>
                </button>
              </div>
            </h2>
            <div
              id={`collapse${id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`${id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              {items.map(({ productName, buyPrice, productImage }) => {
                  return (
                    <div className="card m-2" key={UniqueComponentId()}>
                      <div className="card-body row">
                        <div className="media">
                          <div className="row my-auto flex-column flex-md-row">
                            <div className="col align-self-center">
                              <img
                                className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                src={"/images/" + productImage[0]}
                                width="100"
                                height="56"
                                alt={"/images/" + productImage[0]}
                              />
                            </div>
                            <div className="col my-auto">
                              <small>Товар: {productName}</small>
                            </div>
                            <div className="col my-auto">
                              <small>Ціна : {buyPrice} $</small>
                            </div>
                            <div className="col my-auto">
                              <h6 className="mb-0">
                                Cума : {buyPrice} $
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="d-flex">
                  <b> Загальна сума: {totalSum} $</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};

export default OrderItem;