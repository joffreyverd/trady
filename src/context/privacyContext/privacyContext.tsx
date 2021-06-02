import React, { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';
const PrivacyContext = createContext(null);

type Props = {
  children: ReactNode
}

function PrivacyProvider({ children }: Props): ReactElement {
  const [privacyState, setPrivacyState] = useState(false);

  function setLocalStorage(privacy: string): void {
    localStorage.setItem('Privacy', privacy);
  }

  useEffect(() => {
    const getPrivacy = localStorage.getItem('Privacy');
    if (getPrivacy === 'active') {
      setPrivacyState(true);
    } else {
      setPrivacyState(false);
    }
  }, []);

  useEffect(() => {
    if (privacyState) {
      setLocalStorage('active');
    } else {
      setLocalStorage('inactive');
    }
  }, [privacyState]);

  return (
    <PrivacyContext.Provider
      value={{
        privacyState: privacyState,
        setPrivacyState: setPrivacyState,
      }}>
      {children}
    </PrivacyContext.Provider>
  );
}

export { PrivacyContext, PrivacyProvider };
