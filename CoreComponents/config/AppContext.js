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

    // function deleteMessage(message_id){
    //     setAppData(previous_messages => previous_messages.filter(message => message.id !== message_id));
    // }

    return (
        <AppContext.Provider value={app_data}>
            <AppUpdateContext.Provider value={{
                    addMessage: addMessage
                    // deleteMessage: deleteMessage
                }}
            >
                {children}
            </AppUpdateContext.Provider>
        </AppContext.Provider>
    )
}