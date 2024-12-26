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
    fifa: string;
    subregion?: string;
    capital?: string;
    borders?: string[];
};

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
