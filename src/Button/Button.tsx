import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Text from '../Text/Text';
import { Context, useContext } from 'react';
import {
    DetailContext,
    DetailContextInterface,
} from '../DetailContext/context';

export default function Button() {
    const { setDetailCountry } = useContext(
        DetailContext as Context<DetailContextInterface>,
    );

    return (
        <div>
            <button
                className={clsx(
                    'py-2 px-9 rounded-md',
                    'bg-white dark:bg-dark-blue shadow-md',
                    'flex gap-3 items-center',
                )}
                onClick={() => setDetailCountry(null)}
            >
                <ArrowLeftIcon
                    className={clsx(
                        'w-4 h-4',
                        'text-very-dark-blue-dark dark:text-white',
                    )}
                />
                <Text fontSize='base'>Back</Text>
            </button>
        </div>
    );
}
