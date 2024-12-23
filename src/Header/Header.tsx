import { MoonIcon } from '@heroicons/react/24/outline';
import Text from '../Text/Text';
import clsx from 'clsx';

export default function Header() {
    function onClickHandler() {
        const html = document.querySelector('html');

        if (html) {
            html.classList.toggle('dark');
        }
    }

    return (
        <div
            className={clsx(
                'px-5 py-12 lg:px-20 lg:py-5',
                'bg-white dark:bg-dark-blue',
                'transition-colors duration-300',
                'flex justify-between items-center',
            )}
        >
            <Text fontSize='extraLarge' fontStyle='extraBold'>
                Where in the world?
            </Text>
            <div
                className='flex items-center gap-2 hover:cursor-pointer'
                onClick={onClickHandler}
            >
                <MoonIcon
                    className={clsx(
                        'w-4 h-4',
                        'text-very-dark-blue-dark dark:text-white',
                        'transition-colors duration-300',
                    )}
                />
                <Text fontSize='base' fontStyle='semiBold'>
                    Dark Mode
                </Text>
            </div>
        </div>
    );
}
