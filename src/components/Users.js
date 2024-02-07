import { Outlet } from 'react-router-dom';
import React from 'react';

export const Users = () => {
  return (
    <div>
      <h2>Users 1</h2>
      <h2>Users 2</h2>
      <h2>Users 3</h2>
      <Outlet />
    </div>
  );
};
