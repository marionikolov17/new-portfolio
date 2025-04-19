"use client";
import { createContext, useState, Dispatch, SetStateAction, useContext } from "react";

interface NavigationContextType {
    isNavOpen: boolean;
    setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavigationContext = createContext<NavigationContextType | null>(null);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <NavigationContext.Provider value={{ isNavOpen, setIsNavOpen }}>{children}</NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
};

