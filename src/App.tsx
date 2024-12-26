import { Context, useContext, useEffect } from 'react';
import Filter from './Filter/Filter';
import Header from './Header/Header';
import clsx from 'clsx';
import {
    CountriesContext,
    CountriesContextInterface,
} from './CountriesContext/CountriesContext';
import CardsContainer from './CardsContainer/CardsContainer';
import { DetailContext, DetailContextInterface } from './DetailContext/context';

export default function App() {
    const { countries, fetchCountries, isLoading, error } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );
    const { detailCountry } = useContext(
        DetailContext as Context<DetailContextInterface>,
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
                {!detailCountry && <Filter />}
                {detailCountry && <p>Detail</p>}
            </div>
            {(!detailCountry &&
                !isLoading &&
                !error &&
                countries.length > 0 && <CardsContainer />) ||
                (isLoading && <p>Loading</p>) ||
                (error && <p>Error</p>)}
            {detailCountry && <p>Detail</p>}
        </div>
    );
}
