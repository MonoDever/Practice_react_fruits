
const urlPath = "http://localhost:26691/";

export async function SearchFruitCriteria(value) {
    const subPath = `api/Fruit/SearchFruit?fruitname=${value}`;
    const response = await fetch(`${urlPath}${subPath}`, { method: 'GET' })
    const jsonResponse = await response.json();

    return jsonResponse;
}

export async function AddFruit(value){
    console.log(JSON.stringify(value));
    const subPath = `api/Fruit/InsertFruit`;
    const response = await fetch(`${urlPath}${subPath}`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(value)
    })
    const jsonResponse = await response.json();

    return jsonResponse;
}

