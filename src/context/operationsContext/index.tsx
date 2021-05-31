import React, { createContext, useState, ReactNode, ReactElement } from 'react';
import data from 'assets/operations.json';

const OperationsContext = createContext(null);

type Props = {
  children: ReactNode
}

function OperationsProvider({ children }: Props): ReactElement {
  const [filteredOperations, setFilteredOperations] = useState(data);

  return (
    <OperationsContext.Provider
      value={{
        data,
        filteredOperations: filteredOperations,
        setFilteredOperations: setFilteredOperations,
      }}
    >
      {children}
    </OperationsContext.Provider>
  );
}

export { OperationsContext, OperationsProvider };
