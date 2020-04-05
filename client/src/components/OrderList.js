import React, { useState, useEffect } from 'react';
import '../assets/OrderList.css';
import Moment from 'react-moment';

const OrderList = ({ currentUser }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5000/api/order';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        let result = filterOrderData(data);
        setOrders(result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const filterOrderData = (data) => {
    let result = data.filter(
      (order) =>
        order.customer === `${currentUser.firstName} ${currentUser.lastName}`
    );
    return result;
  };

  return (
    <div id='order-list'>
      <ul>
        {orders.map((order) => {
          return (
            <div key={order._id} className='order-wrapper'>
              <li>
                <Moment format='YYYY-MM-DD HH:mm'>{order.date}</Moment>
              </li>
              <li>Total: {order.total} kr</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default OrderList;
