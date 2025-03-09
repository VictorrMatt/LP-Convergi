import React from 'react';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const variants = {
  h1: 'text-[56px] leading-[64px]',
  h2: 'text-[48px] leading-[56px]',
  h3: 'text-[40px] leading-[48px]',
  h4: 'text-[32px] leading-[40px]',
  h5: 'text-[24px] leading-[32px]',
  h6: 'text-[20px] leading-[24px]',
  h7: 'text-[16px] leading-[20px]',
  h8: 'text-[16px] leading-[20px]',
  h9: 'text-[14px] leading-[20px]',
  h10: 'text-[12px] leading-[16px]',
} as const;

const headlineVariants = cva('font-bold tracking-[1%] text-neutral-0', {
  variants: {
    variant: variants,
  },
  defaultVariants: {
    variant: 'h1',
  },
});

const headingMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h6',
  h8: 'h6',
  h9: 'h6',
  h10: 'h6',
} as const;

type Variant = keyof typeof variants;

export interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headlineVariants> {
  label?: React.ReactNode | string;
}

const Headline = React.forwardRef<HTMLHeadingElement, HeadlineProps>(
  ({ label, children, className, variant = 'h1', ...props }, ref) => {
    const safeVariant = (variant || 'h1') as Variant;
    const content = label || children; // Use label or children
    const Tag = headingMap[safeVariant];

    return React.createElement(
      Tag,
      {
        ref,
        className: cn(headlineVariants({ variant: safeVariant }), className),
        ...props,
      },
      content
    );
  }
);

Headline.displayName = 'Headline';

export { Headline, headlineVariants };
