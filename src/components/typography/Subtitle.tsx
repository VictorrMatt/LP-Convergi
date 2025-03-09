import React from 'react';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const variants = {
  caption: 'text-[12px] leading-[16px] font-normal',
  subtitle: 'text-[16px] leading-[20px] font-medium',
} as const;

const subtitleVariants = cva('tracking-[1%] text-neutral-0', {
  variants: {
    variant: variants,
  },
  defaultVariants: {
    variant: 'subtitle',
  },
});

const headingMap = {
  caption: 'p',
  subtitle: 'h6',
} as const;

type Variant = keyof typeof variants;

export interface SubtitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof subtitleVariants> {
  label?: React.ReactNode | string;
}

const Subtitle = React.forwardRef<HTMLElement, SubtitleProps>(
  ({ label, children, className, variant = 'subtitle', ...props }, ref) => {
    const safeVariant = (variant || 'subtitle') as Variant;
    const content = label || children; // Use label or children
    const Tag = headingMap[safeVariant];

    return React.createElement(
      Tag,
      {
        ref,
        className: cn(subtitleVariants({ variant: safeVariant }), className),
        ...props,
      },
      content
    );
  }
);

Subtitle.displayName = 'Subtitle';

export { Subtitle, subtitleVariants };
