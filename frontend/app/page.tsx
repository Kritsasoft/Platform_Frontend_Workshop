"use client";

import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [users, setUsers] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('http://localhost:4000/users');
        const usersData = await userResponse.json();
        setUsers(Array.isArray(usersData) ? usersData : []);

        const orderResponse = await fetch('http://localhost:4000/orders');
        const ordersData = await orderResponse.json();
        setOrders(Array.isArray(ordersData) ? ordersData : []);

        const productResponse = await fetch('http://localhost:4000/products');
        const productsData = await productResponse.json();
        setProducts(Array.isArray(productsData) ? productsData : []);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <section>
        <h2 className="text-xl font-bold mb-4">Users</h2>
        {users.length > 0 ? (
          <table className="w-full mb-8 border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 p-2">{user.id}</td>
                  <td className="border border-gray-300 p-2">{user.name}</td>
                  <td className="border border-gray-300 p-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users available</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Orders</h2>
        {orders.length > 0 ? (
          <table className="w-full mb-8 border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">User ID</th>
                <th className="border border-gray-300 p-2">Product ID</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-300 p-2">{order.id}</td>
                  <td className="border border-gray-300 p-2">{order.user_id}</td>
                  <td className="border border-gray-300 p-2">{order.product_id}</td>
                  <td className="border border-gray-300 p-2">{order.quantity}</td>
                  <td className="border border-gray-300 p-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders available</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Products</h2>
        {products.length > 0 ? (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 p-2">{product.id}</td>
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products available</p>
        )}
      </section>
    </div>
  );
}
