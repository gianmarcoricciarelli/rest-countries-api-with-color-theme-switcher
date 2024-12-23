export type Country = {
    name: {
        common: string;
        nativeName: {
            [nativeNameIdentifier: string]: {
                common: string;
            };
        };
    };
    population: number;
    region: string;
    subregion?: string;
    capital?: string;
    tld: string[];
    currencies: {
        [currencyIdentifier: string]: {
            name: string;
        };
    };
    languages: {
        [laguageIdentifier: string]: string;
    };
    borders: string[];
};

export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';
