import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Select from './Select/Select';
import { useDebouncedCallback } from 'use-debounce';

export default function Filter() {
    const onChangeHandler = useDebouncedCallback(async (value: string) => {
        try {
            const response = await fetch(
                'https://restcountries.com/v3.1/region/africa',
            );

            if (response.ok) {
                const data = await response.json();
                console.log('onChangeHandler ~ data:', data);
            } else {
                throw new Error('Something went wrong');
            }
        } catch {
            throw new Error('Something went wrong');
        }
    }, 1000);

    return (
        <div
            className={clsx(
                'flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center sm:gap-0',
                'relative',
            )}
        >
            <input
                className={clsx(
                    'sm:w-96',
                    'pl-16 py-4 outline-none rounded-md',
                    'text-dark-gray placeholder:text-dark-gray  dark:text-white dark:placeholder:text-white',
                    'bg-white dark:bg-dark-blue',
                    'transition-colors duration-300',
                    'text-sm text-very-dark-blue-dark dark:text-white',
                )}
                type='text'
                placeholder='Search for a country...'
                onChange={(event) => onChangeHandler(event.target.value)}
            />
            <MagnifyingGlassIcon
                className={clsx(
                    'w-4 h-4',
                    'text-dark-gray dark:text-white',
                    'transition-colors duration-300',
                    'absolute sm:top-1/2 left-8 sm:-translate-y-1/2',
                )}
            />
            <Select />
        </div>
    );
}
