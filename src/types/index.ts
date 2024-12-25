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
    flags: {
        png: string;
        svg: string;
    };
    languages: {
        [laguageIdentifier: string]: string;
    };
    borders: string[];
};

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
