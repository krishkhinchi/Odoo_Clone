import React,{createContext, useState, useContext} from 'react'


const Counter = ({children}) => {

    const name = createContext();
    const useContext = () => {
        const [count, setCount] = useState(0);
        const [email,setEmail] = useState("");
    }
    
    return (
        <>
        </>
    )
}

export default Counter