import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();

    function GotoCarPage(){
        navigate('Car',{replace:true});
    }
    function GotoFruitPage(){
        navigate('Fruit',{replace:true});
    }

    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/Car">Car</Link>
            <button style={{ width:'100px',height:'50px' }} onClick={() => GotoCarPage()}>NextPage</button>
            <button style={{ width:'100px',height:'50px' }} onClick={() => GotoFruitPage()}>GO to Fruity</button>
        </div>
    )
}