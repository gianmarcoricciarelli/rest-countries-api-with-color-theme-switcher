import clsx from 'clsx';
import Card from './Card/Card';
import { Context, useContext } from 'react';
import {
    CountriesContext,
    CountriesContextInterface,
} from '../CountriesContext/CountriesContext';

export default function CardsContainer() {
    const { countries } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );

    // TODO: HANDLE NO RESULT SCENARIO
    return (
        <div
            className={clsx(
                'px-10 md:px-20 py-8',
                'flex flex-col gap-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4',
            )}
        >
            {countries.map((country) => (
                <Card key={country.name.common} country={country} />
            ))}
        </div>
    );
}
