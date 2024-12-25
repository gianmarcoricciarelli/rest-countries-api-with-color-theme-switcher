import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CountryContextProvider } from './CountriesContext/CountriesContext.tsx';
import DetailContextProvider from './DetailContext/provider.tsx';

createRoot(document.getElementById('root')!).render(
    <CountryContextProvider>
        <DetailContextProvider>
            <App />
        </DetailContextProvider>
    </CountryContextProvider>,
);
