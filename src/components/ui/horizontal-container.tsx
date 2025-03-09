import React from 'react';

interface HorizontalContainerProps {
  gap?: string;
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  children: React.ReactNode;
}

export const HorizontalContainer: React.FC<HorizontalContainerProps> = ({ children, gap, justify, align }) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
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
