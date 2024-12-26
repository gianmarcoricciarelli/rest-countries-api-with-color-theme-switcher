import clsx from 'clsx';
import Text from '../../Text/Text';

export default function DetailColumn({
    details,
}: {
    details: { [keyIdentifier: string]: string };
}) {
    return (
        <div className={clsx('flex flex-col gap-4')}>
            {Object.keys(details).map(
                (detailIdentifier) =>
                    details[detailIdentifier].length > 0 && (
                        <Text
                            key={detailIdentifier}
                            fontSize='base'
                            fontStyle='semiBold'
                        >
                            {detailIdentifier}:{' '}
                            <Text fontSize='base'>
                                {details[detailIdentifier]}
                            </Text>
                        </Text>
                    ),
            )}
        </div>
    );
}
