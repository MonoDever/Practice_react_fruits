import { useState, useEffect } from "react"

const urlPath = "http://localhost:26691/";

function useSearchCar() {
    const subPath = "api/Car/SearchAllCar";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(urlPath + subPath)
            .then(Response => Response.json())
            .then(jsonResponse => setData(jsonResponse));
        console.log(data);

        // axios.get('http://localhost:26691/api/Car/SearchAllCar')
        // .then(response => response.json())
        // .then(jsonResponse => setData(jsonResponse));
        // console.log(data);

        //getData()
    }, [])

    // async function getData() {
    //     const response = await fetch(`${urlPath}${subPath}`);
    //     const jsonResponse = await response.json();
    //     setData(jsonResponse)
    // }

    return data;
}
export { useSearchCar }
