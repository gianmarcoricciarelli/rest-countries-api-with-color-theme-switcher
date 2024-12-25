import clsx from 'clsx';
import { Country } from '../../types';
import Text from '../../Text/Text';

export default function Card({ country }: { country: Country }) {
    return (
        <div
            className={clsx(
                'w-56 h-80 rounded-md',
                'bg-white dark:bg-dark-blue shadow-md dark:shadow-none',
                'flex flex-col',
                'hover:cursor-pointer',
            )}
        >
            <div className='min-h-[50%] max-h-[50%]'>
                <img
                    className='h-full w-full overflow-hidden object-fill'
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

// object-fit: fill;
//     height: 100%;
//     width: 100%;
//     overflow: hidden;
// }
