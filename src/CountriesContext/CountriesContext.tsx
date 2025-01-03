import { createContext, useCallback, useState } from 'react';
import { Country } from '../types';

export interface CountriesContextInterface {
    countries: Country[];
    fetchCountries: (region?: string) => void;
    filterCountries: (params: { region?: string; inputText: string }) => void;
    isLoading: boolean;
    error: boolean;
    inputText: string;
}
export const CountriesContext = createContext<CountriesContextInterface | null>(
    null,
);

export function CountryContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [allCountries, setAllCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [inputText, setInputText] = useState('');

    const fetchCountries = useCallback(async function fetchCountries() {
        try {
            setIsLoading(true);
            setError(false);

            const response = await fetch('https://restcountries.com/v3.1/all', {
                method: 'GET',
            });
            if (response.ok) {
                const data: Country[] = await response.json();
                setAllCountries(data);
                setFilteredCountries(data);
            } else {
                throw new Error(`${response.status}: Something went wrong`);
            }
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const filterCountries = useCallback(
        ({ region, inputText }: { region?: string; inputText: string }) => {
            let _filteredCountries: Country[] = [];

            if (region && inputText) {
                _filteredCountries = allCountries.filter(
                    (country) =>
                        country.region === region &&
                        country.name.common
                            .toLowerCase()
                            .includes(inputText.toLowerCase()),
                );
            } else if (region) {
                _filteredCountries = allCountries.filter(
                    (country) => country.region === region,
                );
            } else if (inputText) {
                _filteredCountries = allCountries.filter((country) =>
                    country.name.common
                        .toLowerCase()
                        .includes(inputText.toLowerCase()),
                );
            } else {
                _filteredCountries = allCountries;
            }

            setInputText(inputText);
            setFilteredCountries(_filteredCountries);
        },
        [allCountries],
    );

    return (
        <CountriesContext.Provider
            value={{
                countries: filteredCountries,
                fetchCountries,
                filterCountries,
                isLoading,
                error,
                inputText,
            }}
        >
            {children}
        </CountriesContext.Provider>
    );
}
