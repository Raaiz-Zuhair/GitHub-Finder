import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-xl p-8 max-w-3xl w-full shadow-lg mt-5 mx-auto">
      {children}
    </div>
  );
};

export default Card;
