'use client';
import { createContext, useState, useContext, useCallback } from 'react';

interface NavigationContextType {
  isNavOpen: boolean;
  toggleNav: () => void;
}

export const NavigationContext = createContext<NavigationContextType | null>(
  null,
);

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen);
  }, [isNavOpen]);

  return (
    <NavigationContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
