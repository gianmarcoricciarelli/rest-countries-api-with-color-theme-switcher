import clsx from 'clsx';
import { Context, useContext, useEffect } from 'react';
import Button from './Button/Button';
import CardsContainer from './CardsContainer/CardsContainer';
import {
    CountriesContext,
    CountriesContextInterface,
} from './CountriesContext/CountriesContext';
import Detail from './Detail/Detail';
import { DetailContext, DetailContextInterface } from './DetailContext/context';
import Filter from './Filter/Filter';
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

export default function App() {
    const { countries, fetchCountries, isLoading, error } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );
    const { detailCountry } = useContext(
        DetailContext as Context<DetailContextInterface>,
    );

    const showCountries =
        !detailCountry && !isLoading && !error && countries.length > 0;

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return (
        <div
            className={clsx('transition-colors duration-300', 'flex flex-col')}
        >
            <Header />
            <div className={clsx('px-5 py-8 md:px-20', 'flex flex-col')}>
                {!detailCountry && <Filter />}
                {detailCountry && <Button />}
            </div>
            {(showCountries && <CardsContainer />) ||
                (isLoading && (
                    <div className='w-full h-full flex justify-center items-center'>
                        <Spinner />
                    </div>
                )) ||
                (error && <p>Error</p>)}
            {detailCountry && <Detail country={detailCountry} />}
        </div>
    );
}
