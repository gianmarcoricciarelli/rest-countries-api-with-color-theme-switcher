import React, { useState } from 'react';
import { DetailContext } from './context';
import { Country } from '../types';

export default function DetailContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [detailCountry, setDetailCountry] = useState<Country | null>(null);

    return (
        <DetailContext.Provider value={{ detailCountry, setDetailCountry }}>
            {children}
        </DetailContext.Provider>
    );
}
