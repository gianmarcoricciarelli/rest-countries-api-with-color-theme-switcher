import clsx from 'clsx';
import { Context, useContext } from 'react';
import {
    CountriesContext,
    CountriesContextInterface,
} from '../CountriesContext/CountriesContext';
import Text from '../Text/Text';
import { Country } from '../types';
import DetailColumn from './DetailColumn/DetailColumn';
import Borders from './Borders/Borders';

export default function Detail({ country }: { country: Country }) {
    const { countries } = useContext(
        CountriesContext as Context<CountriesContextInterface>,
    );

    const nativeName = Object.keys(country.name.nativeName)
        .map(
            (nativeNameIdentifier) =>
                country.name.nativeName[nativeNameIdentifier].common,
        )
        .join(', ');
    const currencies = Object.keys(country.currencies)
        .map(
            (currencyIdentifier) => country.currencies[currencyIdentifier].name,
        )
        .join(',');
    const languages = Object.keys(country.languages)
        .map((languageIdentifier) => country.languages[languageIdentifier])
        .join(', ');
    let borders: string[] = [];
    if (country.borders) {
        borders = countries.reduce((bordersNames, currentCountry) => {
            if (country.borders?.includes(currentCountry.fifa)) {
                return [...bordersNames, currentCountry.name.common];
            }

            return bordersNames;
        }, [] as string[]);
    }

    return (
        <div
            className={clsx(
                'px-5 md:px-20 py-8',
                'flex flex-col gap-8 sm:gap-16 xl:grid xl:grid-cols-2 xl:gap-32',
            )}
        >
            <div className='sm:max-w-[400px] sm:max-h[200px] md:max-w-[600px] md:max-h-[400px]'>
                <img
                    className='w-full h-full object-fill'
                    src={country.flags.png}
                    alt={`${country.name.common}'s Flag`}
                />
            </div>
            <div className={'flex flex-col justify-center'}>
                <div className='flex flex-col gap-8 sm:gap-16'>
                    <Text fontSize='extraLarge' fontStyle='extraBold'>
                        {country.name.common}
                    </Text>
                    <div className='flex flex-col gap-8 md:grid md:grid-cols-2 sm:gap-16'>
                        <DetailColumn
                            details={{
                                'Native Name': nativeName,
                                Population: country.population.toLocaleString(),
                                Region: country.region,
                                'Sub Region': country.subregion || '',
                            }}
                        />
                        <DetailColumn
                            details={{
                                'Top Level Domain': country.tld[0],
                                Currencies: currencies,
                                Languages: languages,
                            }}
                        />
                    </div>
                    {borders.length > 0 && <Borders borders={borders} />}
                </div>
            </div>
        </div>
    );
}
