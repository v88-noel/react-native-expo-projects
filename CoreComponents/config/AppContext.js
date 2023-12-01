import React, { useContext, useState } from "react";
import wall_data from "../assets/data.json"; 

const AppContext = React.createContext();
const AppUpdateContext = React.createContext();

export function useData(){
    return useContext(AppContext)
}

export function useUpdateData(){
    return useContext(AppUpdateContext)
}

export function AppContextProvider({children}){
    const [app_data, setAppData] = useState(wall_data);
    
    function addMessage(new_message_value){
        const new_message = {
            "id": app_data.length + 1,
            "message_content": new_message_value,
            "comments": []
        };          

        setAppData(previous_messages => [...previous_messages, new_message]);   
    }

    function deleteMessage(message_id){
        setAppData(previous_messages => previous_messages.filter(message => message.id !== message_id));
    }

    function addComment(message_id, new_comment) {
        if(new_comment.length){
            setAppData(previous_messages => (
                previous_messages.map(message => (
                    message.id === message_id ? { 
                        ...message, comments: 
                            [{comment: new_comment, id: message.comments.length+1}, ...message.comments] 
                        } : message
                ))
            ));
        }
    };

    return (
        <AppContext.Provider value={app_data}>
            <AppUpdateContext.Provider value={{
                    addMessage: addMessage,
                    deleteMessage: deleteMessage,
                    addComment: addComment
                }}
            >
                {children}
            </AppUpdateContext.Provider>
        </AppContext.Provider>
    )
}