import React from 'react';

const Header = props => {
  const { title } = props;
  return(
    <div className="md:flex-initial text-base text-gray-800 sm:text-2xl font-bold md:px-24 xl:px-64">
      {title}
    </div>
  );
}

export default Header;