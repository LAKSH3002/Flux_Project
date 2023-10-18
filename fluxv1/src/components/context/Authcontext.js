import { createContext,useContext,useEffect,useState } from "react";
import { auth } from "../../Firebase";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({children})
{
    const[user,setUser] = useState({})

    function SignUp(email,password)
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function LogIn(email,password)
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut()
    {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    })
    return(
        <AuthContext.Provider value={{SignUp,LogIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth()
{
    return useContext(AuthContext)
}