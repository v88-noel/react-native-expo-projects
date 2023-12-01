import React, { useContext, useState } from "react";
import wall_data from "../assets/data.json"; 
import { COMMENT_ID_ADDEND } from "./constants";

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
    
    const addMessage = (new_message_value) =>{
        const new_message = {
            "id": app_data.length + 1,
            "message_content": new_message_value,
            "comments": []
        };          

        setAppData(previous_messages => [...previous_messages, new_message]);   
    }

    const deleteMessage = (message_id) => {
        setAppData(previous_messages => previous_messages.filter(message => message.id !== message_id));
    }

    const addComment = (message_id, new_comment) => {
        if(new_comment.length){
            setAppData(previous_messages => (
                previous_messages.map(message => (
                    message.id === message_id ? { 
                        ...message, comments: 
                            [{comment: new_comment, id: message.comments.length + COMMENT_ID_ADDEND }, ...message.comments] 
                        } : message
                ))
            ));
        }
    };

    const updateComment = (message_id, comment_id, updated_comment) => {
        if(updated_comment){
            setAppData(previous_messages => (
                previous_messages.map(message => (
                    message.id === message_id ? {
                    ...message,
                        comments: message.comments.map(comment =>
                            comment.id === comment_id ? { ...comment, comment: updated_comment } : comment
                        )
                    } : message
                ))
            ));
        }
    };

    const updateMessageContent = (message_id, new_content) => {
        if(new_content.length){
            setAppData(previous_messages => (
                previous_messages.map(message => (
                    message.id === message_id ? { ...message, message_content: new_content } : message
                ))
            ));
        }
    };

    const deleteComment = (message_id, comment_id) => {
        setAppData(previous_messages => (
            previous_messages.map(message => (
                message.id === message_id ? { ...message, comments: message.comments.filter(comment => comment.id !== comment_id) } : message
            ))
        ));
    };

    return (
        <AppContext.Provider value={app_data}>
            <AppUpdateContext.Provider value={{
                    addMessage: addMessage,
                    deleteMessage: deleteMessage,
                    addComment: addComment,
                    updateMessageContent: updateMessageContent,
                    updateComment: updateComment,
                    deleteComment: deleteComment
                }}
            >
                {children}
            </AppUpdateContext.Provider>
        </AppContext.Provider>
    )
}