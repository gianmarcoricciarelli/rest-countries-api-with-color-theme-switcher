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
import Text from './Text/Text';

export default function App() {
    const { fetchCountries, isLoading, error } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );
    const { detailCountry } = useContext(
        DetailContext as Context<DetailContextInterface>,
    );

    const showCountries = !detailCountry && !isLoading && !error;

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return (
        <div
            className={clsx(
                'min-h-full',
                'bg-very-light-gray dark:bg-very-dark-blue-dark transition-colors duration-300',
                'flex flex-col',
            )}
        >
            <Header />
            <div className={clsx('px-5 py-8 md:px-20', 'flex flex-col')}>
                {!detailCountry && <Filter />}
                {detailCountry && <Button />}
            </div>
            {(showCountries && <CardsContainer />) ||
                (isLoading && (
                    <div className='flex justify-center items-center grow'>
                        <Spinner />
                    </div>
                )) ||
                (error && (
                    <div className='flex justify-center items-center grow'>
                        <Text fontStyle='extraBold' fontSize='extraLarge'>
                            Something went wrong!
                        </Text>
                    </div>
                ))}
            {detailCountry && <Detail country={detailCountry} />}
        </div>
    );
}
