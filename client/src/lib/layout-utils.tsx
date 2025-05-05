import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  as: Component = 'div' 
}) => {
  return (
    <Component className={`w-[85%] max-w-[85%] mx-auto ${className}`}>
      {children}
    </Component>
  );
};

export default Container; 