import React, {
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Region } from '../../types';
import clsx from 'clsx';
import Text from '../../Text/Text';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Select {
    onRegionChange: React.Dispatch<
        SetStateAction<{
            region: Region | '';
            inputText: string;
        }>
    >;
}

export default function Select({ onRegionChange }: Select) {
    const regions: Region[] = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania',
    ];

    const [isSelectVisible, setIsSelectVisible] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<Region | ''>('');

    const selectRef = useRef<HTMLDivElement>(null);

    function onRegionSelect(region: Region) {
        setSelectedRegion(region);
        onRegionChange((prevFilter) => ({
            ...prevFilter,
            region,
        }));
    }

    const detectClickOutside = useCallback(
        function onMouseDownHandler(event: MouseEvent | TouchEvent) {
            if (isSelectVisible) {
                return;
            } else {
                if (selectRef.current) {
                    selectRef.current.contains(event.target as Node);
                    setIsSelectVisible(false);
                }
            }
        },
        [isSelectVisible],
    );

    useEffect(() => {
        document.addEventListener('mousedown', detectClickOutside);
        document.addEventListener('touchstart', detectClickOutside);

        return () => {
            document.removeEventListener('mousedown', detectClickOutside);
            document.removeEventListener('touchstart', detectClickOutside);
        };
    }, [detectClickOutside]);

    return (
        <div
            className={clsx(
                'w-[188px] p-4 relative rounded-md select-none',
                'bg-white dark:bg-dark-blue',
                'flex justify-between items-center gap-10',
                'hover:cursor-pointer',
            )}
            onClick={() =>
                setIsSelectVisible((_isSelectVisible) => !_isSelectVisible)
            }
        >
            <Text fontSize='small' fontStyle='semiBold'>
                {selectedRegion || 'Filter by Region'}
            </Text>
            <ChevronDownIcon className='w-3 h-3 text-very-dark-blue-dark dark:text-white' />
            {isSelectVisible && (
                <div
                    className={clsx(
                        'w-full p-4 rounded-md',
                        'bg-white dark:bg-dark-blue',
                        'flex flex-col gap-4',
                        'absolute left-0 bottom-0 translate-y-[102%]',
                    )}
                    ref={selectRef}
                >
                    {regions.map((region) => (
                        <Text
                            key={region}
                            fontSize='small'
                            fontStyle='semiBold'
                            onClick={() => onRegionSelect(region)}
                        >
                            {region}
                        </Text>
                    ))}
                </div>
            )}
        </div>
    );
}
