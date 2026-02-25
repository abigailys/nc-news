
import { useState } from 'react'
import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState({
            username: 'grumpy19',
            name: 'Paul Grump',
            avatar_url:
                'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013'
        })

    return <UserContext value={{currentUser}}>
        {children} {/* This renders whatever is inside in <App /> */}
        </UserContext>
}

export default UserProvider;