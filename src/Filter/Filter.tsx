import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Select from './Select/Select';
import { Context, useContext, useEffect, useState } from 'react';
import {
    CountriesContext,
    CountriesContextInterface,
} from '../CountriesContex/CountriesContex';
import { Region } from '../types';

export default function Filter() {
    const { filterCountries } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );

    const [filter, setFilter] = useState<{
        region: Region | '';
        inputText: string;
    }>({ region: '', inputText: '' });

    useEffect(() => {
        filterCountries(filter);
    }, [filter, filterCountries]);

    return (
        <div
            className={clsx(
                'flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center sm:gap-0',
                'relative',
            )}
        >
            <input
                id='countr-input'
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
                value={filter.inputText}
                onChange={(event) =>
                    setFilter((prevFilter) => ({
                        ...prevFilter,
                        inputText: event.target.value,
                    }))
                }
            />
            <MagnifyingGlassIcon
                className={clsx(
                    'w-4 h-4',
                    'text-dark-gray dark:text-white',
                    'transition-colors duration-300',
                    'absolute top-0 left-0 translate-x-[calc(50%_+_16px)] translate-y-[calc(50%_+_8px)]',
                )}
            />
            <Select onRegionChange={setFilter} />
        </div>
    );
}
