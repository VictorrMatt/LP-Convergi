import React from 'react';

interface VerticalContainerProps {
  gap?: string;
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  children: React.ReactNode;
}

export const VerticalContainer: React.FC<VerticalContainerProps> = ({ children, gap, justify, align }) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap,
    justifyContent: justify,
    alignItems: align,
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};
