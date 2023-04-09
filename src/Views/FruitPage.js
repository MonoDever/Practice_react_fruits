import React, { useState,useEffect } from "react";
import { SearchFruitCriteria,AddFruit } from "../Services/FruitService";

const AddFruits = props => {
    const fruitObj = { "fruitname":"","fruiturl":"" }
    const [fruitName,setFruitName] = useState("");
    const [fruitPhoto,setFruitPhoto] = useState("");

    const CallAddFruit = (e) =>{
        AddFruit(fruitObj).then(response =>{
            console.log(response);
            if(response.status){
                alert('เพิ่มข้อมูลสำเร็จ');
            }else{
                alert('ทำรายการอีกครัง');
            }
        });
        
    }

    function Submit(){
        fruitObj.fruitname = fruitName;
        fruitObj.fruiturl = fruitPhoto;
        console.log(fruitObj);
        CallAddFruit()
    }

    return (<div class="marginAllSide boxShadow">

        <h3>Create</h3>
        <div class="row mb-3 TextAlignEnd" >
            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Name</label>
            <div class="col-sm-6">
                <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" 
                onChange={(e) => setFruitName(e.target.value)}
                />
            </div>
        </div>
        <div class="row mb-3 TextAlignEnd" >
            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Photo</label>
            <div class="col-sm-6">
                <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" 
                onChange={(e) => setFruitPhoto(e.target.value)} />
            </div>
        </div>
        <div class="row mb-3 marginTopBottom10px" >
            <div class="col-sm-4"></div>
        <button type="button" class="col-sm-1 btn btn-success paddingLeftRight5px ButtonColor" onClick={() => Submit()}>Save</button>
        <button type="button " class="col-sm-1 btn btn-outline-danger paddingLeftRight5px" onClick={() => props.action(false)}>Cancel</button>
        <div class="col-sm-4"></div>
        </div>

    </div>
    )
}

export default function SearchFruit(value) {
    const [fruitData, setFruitData] = useState([]);
    const [input, setInput] = useState("");
    const [isCreatePage, setIsCreatePage] = useState(false)

    const SearchFruit = (e) =>{
        SearchFruitCriteria(e).then(response =>{
            console.log(response);
            setFruitData(response);
        });
    }

    async function Search(event) {
        event.preventDefault();
        console.log(event.target.value);
        // useEffect(() => {
        //     setInput(event.target.value)
        // },[])
        await setInput(event.target.value);//TODO
        console.log(input);
        SearchFruit(event.target.value);
    }

    useEffect(() => {
        console.log(input);
        SearchFruit(input);
    },[input])

    function handleSearch(event){
        setInput(event.target.value);
    }

    function setStateIsCreate(boolValue){
        setIsCreatePage(boolValue);
    }

    return (
        <div>
            {
                isCreatePage === true ?
                    <AddFruits action={setStateIsCreate}/>
                    :
                    <div className="boxShadow" style={{ padding: '20px' }}>
                        <div class="row marginTopBottom10px" >
                            <div class="col-8"></div>
                            <div class="col TextAlignEnd" >
                                <button type="" className="btn btn-success ButtonColor"
                                    onClick={() => setStateIsCreate(true)}>เพิ่มผลไม้</button>
                            </div>
                        </div>
                        <div class="row marginTopBottom10px" >
                            <div class="col-8"></div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Search Here" aria-label=""
                                    // onChange={(e) => Search(e)} value={input}  />
                                    onChange={(e) => handleSearch(e)} value={input}  />

                            </div>

                        </div>

                        <table class="table" >
                            <thead class="table-light ">
                                <tr >
                                    <th >ชื่อผลไม้</th>
                                    <th class="TextAlignCenter" >Image</th>
                                </tr>
                            </thead>

                            {
                                fruitData.map(d => (
                                    <tr className="TextAlignCenter borderBottom">
                                        <td  >{d.fruitname}</td>
                                        <td ><img width='150px' height='150px' alt='' src={d.fruiturl} /></td>
                                    </tr>
                                ))}
                        </table>
                    </div>
            }
        </div>
    )
        }

