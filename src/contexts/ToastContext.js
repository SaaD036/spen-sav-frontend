import { createContext, useContext, useRef } from 'react';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Toast } from 'primereact/toast';

const SEVERITY = {
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warn',
    ERROR: 'error',
};

const ToastContext = createContext(undefined);

export const ToastContextProvider = ({ children }) => {
    const toastRef = useRef(null);

    const showToast = (options) => {
        const updatedOptions = {};

        if (!toastRef.current) {
            return;
        }

        updatedOptions.severity = options.type || SEVERITY.SUCCESS;
        updatedOptions.detail = options.message;
        updatedOptions.life = 4500;

        toastRef.current.show(updatedOptions);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            <Toast
                ref={toastRef}
                position="bottom-left"
            />
            <div>{children}</div>
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            'useToastContext have to be used within ToastContextProvider',
        );
    }

    return context;
};
