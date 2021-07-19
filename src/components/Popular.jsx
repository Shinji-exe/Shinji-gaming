import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import "./Popular.css"
import {URL,config} from "../services"
//${AIRTABLE_BASE}
//${AIRTABLE_KEY
//import { getDefaultNormalizer } from "@testing-library/react"const AIRTABLE_KEY = process.env.AIRTABLE_KEY




function Popular(){
    console.log(URL)
    const [pops, setPops] = useState ([])

    useEffect(()=>{
    getData();
    },[]);

    const getData = async () => {
        const response = await axios.get(URL, config)
        console.log(response.data.records)
        setPops(response.data.records)
    }
return(
<div>
    <div>
        {pops? pops.map((pop) => {
            return (
                
                <Link to = {`/popular/${pop.id}`} key={pop.id}>{pop.fields.name}</Link>
                
                
            )
        }):null}
    </div>
</div>
)
}

export default Popular