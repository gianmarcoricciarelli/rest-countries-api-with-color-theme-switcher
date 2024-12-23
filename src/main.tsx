import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CountryContextProvider } from './CountriesContex/CountriesContex.tsx';

createRoot(document.getElementById('root')!).render(
    <CountryContextProvider>
        <App />
    </CountryContextProvider>,
);
