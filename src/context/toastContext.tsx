import React, { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';
const ToastContext = createContext(null);

type Props = {
  children: ReactNode
}

function ToastProvider({ children }: Props): ReactElement {
  const [toastState, setToastState] = useState('');

  useEffect(() => {
    if (toastState) {
      const timer = setTimeout(() =>
        setToastState(''), 3000
      );
      return () => clearTimeout(timer);
    }
  }, [toastState]);

  return (
    <ToastContext.Provider
      value={{
        toastState: toastState,
        setToastState: setToastState,
      }}>
      {children}
      { toastState &&
        <div className='toast'>
          {toastState}
        </div>
      }
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
