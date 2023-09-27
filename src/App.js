import { useEffect, useState } from "react"
import { fetchApi } from "./api/api"
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

export default function App(){

const [coins , setCoins] = useState([])

    useEffect(()=>{
        async function getApi(){
            const response = await fetchApi();
            setCoins(response);
        }
        getApi();
    }
    ,[])
    console.log(coins);
    return (
        <>
            <MainPage data={coins}/>
        </>
    )
}
