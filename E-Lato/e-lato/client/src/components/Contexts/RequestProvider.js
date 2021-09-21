import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const RequestsContext = React.createContext()

export function useRequests() {
    return useContext(RequestsContext)
}


export function RequestsProvider({ children }) {

    const [requests, setRequests] = useLocalStorage('requests', [])

    function createRequest(id, name){
        setRequests(prevRequests => {
            return [...prevRequests, {id, name}]
        })
    }


    return (
        <RequestsContext.Provider value= {{ requests, createRequest}}>
            {children}
        </RequestsContext.Provider>
    )
}
