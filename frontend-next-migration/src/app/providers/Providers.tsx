"use client"
import {ReactNode} from "react";
import { Provider as ReduxProvider } from 'react-redux';
import { store,persistor} from '../providers/StoreProvider';
import { PersistGate } from 'redux-persist/integration/react'
import {ToastContainer} from "react-toastify";
import { ThemeProvider } from "@/app/providers/ThemeProvider";


interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <ToastContainer />
                    {children}
                </ThemeProvider>
            </PersistGate>
        </ReduxProvider>
    );
}