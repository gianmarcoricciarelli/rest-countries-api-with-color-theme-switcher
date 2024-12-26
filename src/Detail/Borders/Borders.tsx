import clsx from 'clsx';
import Text from '../../Text/Text';

export default function Borders({ borders }: { borders: string[] }) {
    return (
        <div className={'flex flex-col gap-4 md:flex-row md:items-center'}>
            <Text fontSize='base' fontStyle='semiBold'>
                Border Countries:
            </Text>
            <div className={clsx('flex flex-wrap gap-3')}>
                {borders.map((border) => (
                    <div
                        key={border}
                        className={clsx(
                            'py-2 px-9 rounded-md',
                            'bg-white dark:bg-dark-blue shadow-md',
                        )}
                    >
                        <Text fontSize='base'>{border}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
}
