import React from 'react';
import Child from '../common/Child';

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
  width?: number;
  height?: number;
  fill?: any;
  stroke?: any;
  type?: 'fill' | 'stroke';
}

const Icon = ({
  children,
  width,
  height,
  size,
  fill,
  stroke,
  type = 'fill',
  ...props
}: IconProps) => {
  return React.cloneElement(<Child>{children}</Child>, {
    ...(type === 'fill' ? { fill } : {}),
    ...(type === 'stroke' ? { stroke } : {}),
    width: width ?? size,
    height: height ?? size,
    ...props
  });
};

export default Icon;
