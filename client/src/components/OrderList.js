import React, { useState, useEffect } from 'react';
import Order from './Order';

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
      {orders.length ? (
        <>
          {orders.map((order) => {
            return (
              <Order
                key={order._id}
                date={order.date}
                total={order.total}
                products={order.products}
              />
            );
          })}
        </>
      ) : (
        <>
          <div id='empty-order-list'>
            <p>No orders could be found.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderList;
