import clsx from 'clsx';
import Card from './Card/Card';
import { Context, useContext } from 'react';
import {
    CountriesContext,
    CountriesContextInterface,
} from '../CountriesContext/CountriesContext';
import Text from '../Text/Text';

export default function CardsContainer() {
    const { countries, inputText } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );

    return (
        <div
            className={clsx('px-10 md:px-20 py-8', {
                'flex flex-col gap-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-6':
                    countries.length > 0,
                'flex justify-center': countries.length === 0,
            })}
        >
            {countries.length > 0 &&
                countries.map((country) => (
                    <Card key={country.name.common} country={country} />
                ))}
            {countries.length === 0 && (
                <Text fontSize='extraLarge' fontStyle='extraBold'>
                    {`No results for "${inputText}"`}
                </Text>
            )}
        </div>
    );
}
