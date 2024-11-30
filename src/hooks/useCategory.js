import { useState,useEffect } from "react";
import axios from "axios";
import { getAllCategories } from "../Apis/fakeStoreProdApis";


export function useCategory() {
    const [categories,setCategories] = useState(null);

    async function downloadCategories() {
        const response = await axios.get(getAllCategories(),{withCredentials: true});
        setCategories(response.data);
    }

    useEffect(()=>{
        downloadCategories();
    },[]);

    return [categories];
}