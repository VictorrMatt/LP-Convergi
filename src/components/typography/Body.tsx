import React from 'react';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const variants = {
  small: {
    medium: 'text-[14px] leading-[18px] font-medium',
    regular: 'text-[14px] leading-[18px] font-normal',
  },
  medium: {
    medium: 'text-[16px] leading-[20px] font-medium',
    regular: 'text-[16px] leading-[20px] font-normal',
  },
  large: {
    medium: 'text-[18px] leading-[22px] font-medium',
    regular: 'text-[18px] leading-[22px] font-normal',
  },
} as const;

const bodyVariants = cva('tracking-[1%] text-neutral-0', {
  variants: {
    variant: {
      small: {
        medium: variants.small.medium,
        regular: variants.small.regular,
      },
      medium: {
        medium: variants.medium.medium,
        regular: variants.medium.regular,
      },
      large: {
        medium: variants.large.medium,
        regular: variants.large.regular,
      },
    },
    subVariant: {
      medium: 'font-medium',
      regular: 'font-normal',
    }
  },
  defaultVariants: {
    variant: 'medium',
    subVariant: 'regular',
  },
});

type Variant = keyof typeof variants;
type SubVariant = keyof typeof variants['medium']; // Assuming 'medium' has sub-variants

export interface BodyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof bodyVariants> {
  label?: React.ReactNode | string;
  subVariant?: SubVariant;
}

const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ label, children, className, variant = 'medium', subVariant = 'regular', ...props }, ref) => {
    const safeVariant = (variant || 'medium') as Variant;
    const safeSubVariant = (subVariant || 'regular') as SubVariant;
    const content = label || children;
    const variantStyles = variants[safeVariant][safeSubVariant];

    return (
      <p
        ref={ref}
        className={cn(bodyVariants({ variant: safeVariant, subVariant: safeSubVariant }), className)}
        {...props}
      >
        {content}
      </p>
    );
  }
);

Body.displayName = 'Body';

export { Body, bodyVariants };
