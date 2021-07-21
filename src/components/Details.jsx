import axios from "axios"
import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
// import '~video-react/dist/video-react.css';
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import "./Details.css"
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
 const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
//const URL = `https://api.airtable.com/v0/appRO0rCJdUDTZSSQ/Table%201`


function Details(){
    const [details, setDetails] = useState(undefined)
    const params = useParams();
    // const URL = `https://api.airtable.com/v0/{}/Table%201/${params.id}`
    useEffect(()=> {
        const fetchInfo = async () => {
            const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201/${params.id}`
            const response = await axios.get(URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
            console.log(response.data)
            setDetails(response.data)
        }
    fetchInfo();
    },[params.id])

    //  const fetchInfo = async () => {
    //      const response = await axios.get(URL, {headers: {Authorization: `Bearer keysmrF2PXlXRQYeg`}})
    //      console.log(response.data)
    //      setDetails(response.data)
    //  }

//const params = useParams();

console.log(params.id)
    return(
<div className="infos">
    <p>{details?.fields.name}</p>
    <p><em>{details?.fields.description}</em></p>
    <p>{details?.fields.origins}</p>
    <img src = {details?.fields.images} alt="image1"/>
    <p><em>{details?.fields.description2}</em></p>
    <p>{details?.fields.origins2}</p>
    <img src = {details?.fields.image2} alt="image2"/>
    <div className = "video">
    <ReactPlayer url = {details?.fields.vids}/>
    </div>
    
     <p>{details?.fields.webs}</p>
    
</div>

    )
}

export default Details