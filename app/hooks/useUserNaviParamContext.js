import React, { useState } from "react"


export const UserNaviParamContext = React.createContext();

export default UserNaviParamProvider = ({ children }) => {
    const [ userNaviParam, setUserNaviParam ] = useState(null);

    return (
        <UserNaviParamContext.Provider value={{ userNaviParam, setUserNaviParam}}>
            {children}
        </UserNaviParamContext.Provider>
    )
};



