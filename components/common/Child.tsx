import React from 'react';

interface IChildProps {
  children: React.ReactNode;
}

const Child = ({ children, ...props }: IChildProps) => {
  const child = React.Children.only(children);

  return React.isValidElement(child) ? React.cloneElement(child, props) : <></>;
};

export default Child;
