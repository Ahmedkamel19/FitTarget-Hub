import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[85%] max-w-[85%] mx-auto">
      {children}
    </div>
  );
};

export default Layout; 