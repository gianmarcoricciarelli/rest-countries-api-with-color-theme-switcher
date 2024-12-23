import clsx from 'clsx';
import React from 'react';

interface Text {
    fontStyle?: 'light' | 'semiBold' | 'extraBold';
    fontSize?: 'small' | 'base' | 'extraLarge';
    children: React.ReactNode;
}

export default function Text({
    fontStyle = 'light',
    fontSize = 'small',
    children,
}: Text) {
    return (
        <span
            className={clsx(
                {
                    'font-light': fontStyle === 'light',
                    'font-semibold': fontStyle === 'semiBold',
                    'font-extrabold': fontStyle === 'extraBold',
                    'text-sm sm:text-sm': fontSize === 'small',
                    'text-sm sm:text-base': fontSize === 'base',
                    'text-sm sm:text-2xl': fontSize === 'extraLarge',
                },
                'text-very-dark-blue-dark dark:text-white',
                'transition-colors duration-300',
            )}
        >
            {children}
        </span>
    );
}
