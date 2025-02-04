import { ReactNode } from "react"

type AppProviderProps = {
    children: ReactNode;
};

export function AppProvider({children}: AppProviderProps){
    return <FetchAPIProvider> {children}</FetchAPIProvider>
}