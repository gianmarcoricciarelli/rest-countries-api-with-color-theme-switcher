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
                    'absolute sm:top-1/2 left-8 sm:-translate-y-1/2',
                )}
            />
            <Select onRegionChange={setFilter} />
        </div>
    );
}
