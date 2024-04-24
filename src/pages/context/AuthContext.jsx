import React from 'react';
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Context = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const userGet = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const userInfo = userGet && userGet?.data?.results[0]
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));



    useEffect(() => {
        if (!userInfo) return;
        console.log("userInfo redux kontrol", userInfo);
        navigate("/dashboard")
    }, [userInfo]);

    const data = {
        user,
        setUser,
    }

    useEffect(() => {
        if (!user) return
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    return (

        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context)