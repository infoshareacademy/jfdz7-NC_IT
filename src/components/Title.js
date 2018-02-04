import React from 'react';

const style = {
  fontSize: '12px',
  borderBottom: '1px solid black'
};

export default (props) => {
  /**
   * Title accepts "heading" prop that will change what it displays.
   * This way Title component can be reused across the whole application
   */
  const { heading } = props;

  return <h1 style={style}>{heading}</h1>;
}