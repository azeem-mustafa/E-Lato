import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useRequests } from './RequestProvider'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}


export function ConversationsProvider({ id, children }) {

    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const { requests } = useRequests()
    const [selectedConversationIndex, setSelectedConversationIndex]= useState(0)

    function createConversations(recipients){
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    function addMessageToConversation({ recipients, text, sender }){
        setConversations(prevConversations => {
            let madeChange = false
            const newMessage = { sender, text }
            console.log(recipients)

            const newConversations = prevConversations.map(conversation =>{
                if (arrayEquality(conversation.recipients, recipients)){
                    madeChange = true
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage]
                    }
                }

                return conversation
            })

            if (madeChange) {
                return newConversations

            }else {
               return [...prevConversations, 
                { recipients, messages: [newMessage]}] 
            }
        })
    }

    function sendMessage ( recipients, text){
        addMessageToConversation({ recipients, text, sender: id })
    }

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const request = requests.find(request => {
                return request.id === recipient
            })

            const name = (request && request.name) || recipient
            return { id: recipient, name}
        })

        const messages = conversation.messages.map(message => {
            
            const request = requests.find(request => {
                return request.id === message.sender
            })

            const name = (request && request.name) || message.sender

            const fromMe = id === message.sender 
            return {...message, senderName: name, fromMe}
        })

        const selected = index === selectedConversationIndex
        return {...conversations, messages, recipients, selected}
    })

    const value = {
        conversations: formattedConversations, 
        selectedConversation: formattedConversations[selectedConversationIndex],
        selectedConversationIndex: setSelectedConversationIndex,
        sendMessage,
        createConversations
    }


    return (
        <ConversationsContext.Provider value= {value}>
            {children}
        </ConversationsContext.Provider>
    )
}



function arrayEquality(a, b){
    if (a.length !== b.length) return false

    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })
}


