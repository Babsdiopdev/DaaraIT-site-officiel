import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
const MenuItem = ({ menuItem }) => {
  const { to, label } = menuItem;
  return (
      <NavLink
        to={to}
        class="flex items-center md:mb-2 p-2.5  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {label}
      </NavLink>
  );
};

export default MenuItem;
