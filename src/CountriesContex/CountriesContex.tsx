import { createContext, useCallback, useState } from 'react';
import { PartialReplace } from '../utilityTypes';

interface Country {
    name: string;
    population: number;
    region: string;
    capital?: string;
}

export interface CountriesContextInterface {
    countries: Country[];
    fetchCountries: (region?: string) => void;
}
export const CountriesContext = createContext<CountriesContextInterface | null>(
    null,
);

export function CountryContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [countries, setCountries] = useState<Country[]>([]);

    const fetchCountries = useCallback(async function fetchCountries(
        region?: string,
    ) {
        let url = 'https://restcountries.com/v3.1/all';

        if (region) {
            url =
                url.slice(0, url.length - 3) + `region/${region.toLowerCase()}`;
        }

        try {
            const response = await fetch(url, { method: 'GET' });

            if (response.ok) {
                const data: PartialReplace<
                    Country,
                    {
                        name: {
                            common: string;
                        };
                        capital?: string[];
                    }
                >[] = await response.json();
                const parsedData: Country[] = data.map((country) => ({
                    name: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital ? country.capital[0] : undefined,
                }));
                setCountries(parsedData);
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <CountriesContext.Provider
            value={{ countries: countries, fetchCountries }}
        >
            {children}
        </CountriesContext.Provider>
    );
}
