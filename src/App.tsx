import { Context, useContext, useEffect } from 'react';
import Filter from './Filter/Filter';
import Header from './Header/Header';
import clsx from 'clsx';
import {
    CountriesContext,
    CountriesContextInterface,
} from './CountriesContex/CountriesContex';

export default function App() {
    const { countries, fetchCountries, isLoading, error } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );
    console.log('App ~ countries:', countries);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return (
        <div
            className={clsx(
                'h-full bg-very-light-gray dark:bg-very-dark-blue-dark',
                'transition-colors duration-300',
                'flex flex-col',
            )}
        >
            <Header />
            <div className={clsx('px-5 py-8 md:px-20', 'flex flex-col')}>
                <Filter />
            </div>
            {!isLoading && !error && countries.length > 0 && <p>Countries</p>}
            {isLoading && <p>Loading</p>}
            {error && <p>Error</p>}
        </div>
    );
}
