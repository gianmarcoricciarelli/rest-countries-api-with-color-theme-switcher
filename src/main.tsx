import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CountryContextProvider } from './CountriesContext/CountriesContext.tsx';

createRoot(document.getElementById('root')!).render(
    <CountryContextProvider>
        <App />
    </CountryContextProvider>,
);
