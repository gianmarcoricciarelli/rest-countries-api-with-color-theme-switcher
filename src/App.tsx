import Header from './Header/Header';
import clsx from 'clsx';

export default function App() {
    return (
        <div
            className={clsx(
                'h-full bg-very-light-gray dark:bg-very-dark-blue-dark',
                'transition-colors duration-300',
                'flex flex-col',
            )}
        >
            <Header />
        </div>
    );
}
