import axios from "axios"
import React from "react"
// import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import "./Details.css"
// const AIRTABLE_KEY = process.env.AIRTABLE_KEY
// const AIRTABLE_BASE = process.env.AIRTABLE_BASE
//const URL = `https://api.airtable.com/v0/appRO0rCJdUDTZSSQ/Table%201`


function Details(){
    const [details, setDetails] = useState(undefined)
    const params = useParams();
    // const URL = `https://api.airtable.com/v0/appRO0rCJdUDTZSSQ/Table%201/${params.id}`
    useEffect(()=> {
        const fetchInfo = async () => {
            const URL = `https://api.airtable.com/v0/appRO0rCJdUDTZSSQ/Table%201/${params.id}`
            const response = await axios.get(URL, {headers: {Authorization: `Bearer keysmrF2PXlXRQYeg`}})
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
    <p>{details?.fields.description2}</p>
    <p>{details?.fields.origins2}</p>
    <img src = {details?.fields.image2} alt="image2"/>

    
</div>

    )
}

export default Details