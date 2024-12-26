import clsx from 'clsx';
import { Context, useContext } from 'react';
import {
    DetailContext,
    DetailContextInterface,
} from '../../DetailContext/context';
import Text from '../../Text/Text';
import { Country } from '../../types';

export default function Card({ country }: { country: Country }) {
    const { setDetailCountry } = useContext(
        DetailContext as Context<DetailContextInterface>,
    );

    return (
        <div
            className={clsx(
                'rounded-md',
                'bg-white dark:bg-dark-blue shadow-md dark:shadow-none ',
                'flex flex-col',
                'transition-colors duration-300',
                'hover:cursor-pointer',
            )}
            onClick={() => setDetailCountry(country)}
        >
            <div className='min-h-[50%] max-h-[50%]'>
                <img
                    className='h-full w-full overflow-hidden object-fill rounded-t-md'
                    src={country.flags.png}
                    alt={`${country.name.common}'s Flag`}
                />
            </div>
            <div className='px-5 pt-5 flex flex-col gap-3'>
                <Text fontSize='base' fontStyle='extraBold'>
                    {country.name.common}
                </Text>
                <div className='flex flex-col gap-1'>
                    <Text fontStyle='semiBold'>
                        Population:{' '}
                        <Text>{country.population.toLocaleString()}</Text>
                    </Text>
                    <Text fontStyle='semiBold'>
                        Region: <Text>{country.region}</Text>
                    </Text>
                    <Text fontStyle='semiBold'>
                        Capital: <Text>{country.capital}</Text>
                    </Text>
                </div>
            </div>
        </div>
    );
}
