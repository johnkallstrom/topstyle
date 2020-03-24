import React, { useState } from 'react';

const Footer = () => {
  const [date, setDate] = useState(new Date());

  return (
    <footer id='footer'>
      <p>
        TopStyle &copy; {date.toLocaleDateString('se-SE', { year: 'numeric' })}
      </p>
    </footer>
  );
};

export default Footer;
