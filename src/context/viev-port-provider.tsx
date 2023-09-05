'use client'
import React, { createContext, useContext, useState } from 'react';

interface ViewportContextType {
    activeSection: string | null;
    setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}

const ViewportContext = createContext<ViewportContextType | undefined>(undefined);

export const useViewport = () => {
    const context = useContext(ViewportContext);
    if (!context) {
        throw new Error('useViewport must be used within a ViewportProvider');
    }
    return context;
};

export default function ViewportProvider  ({ children } : {children: React.ReactNode}) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <ViewportContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ViewportContext.Provider>
    );
};
