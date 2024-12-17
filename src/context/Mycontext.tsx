import React, { createContext, useState, ReactNode } from "react";

// Define the types for the context value
interface HomeContextType {
  open?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
}

// Create the context with a default value (to avoid `undefined`)
export const HomeContext = createContext<HomeContextType>({
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
});

// Context provider component
interface HomeContextProviderProps {
  children: ReactNode;
}

export const HomeContextProvider: React.FC<HomeContextProviderProps> = ({
  children,
}) => {
  // State to control the `open` state
  const [open, setOpen] = useState<boolean>(false);

  // Methods to open and close
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <HomeContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </HomeContext.Provider>
  );
};
