import clsx from 'clsx';

export default function CardsContainer() {
    return (
        <div
            className={clsx(
                'px-10 md:px-20 py-8',
                'flex flex-col gap-16 md:grid md:grid-cols-4',
            )}
        >
            <p>Cards Container</p>
            <p>Cards Container</p>
            <p>Cards Container</p>
            <p>Cards Container</p>
        </div>
    );
}
