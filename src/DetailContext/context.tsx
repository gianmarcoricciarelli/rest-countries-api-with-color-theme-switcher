import React, { createContext, SetStateAction } from 'react';
import { Country } from '../types';

export interface DetailContextInterface {
    detailCountry: Country | null;
    setDetailCountry: React.Dispatch<SetStateAction<Country | null>>;
}
export const DetailContext = createContext<DetailContextInterface | null>(null);
