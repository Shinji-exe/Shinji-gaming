import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import { config, historyURL } from "../services"
import axios from "axios"
import { drop } from "lodash"
//${AIRTABLE_BASE}
//${AIRTABLE_KEY
//import { getDefaultNormalizer } from "@testing-library/react"
// const AIRTABLE_KEY = process.env.AIRTABLE_KEY
// const AIRTABLE_BASE = process.env.AIRTABLE_BASE
// const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`



function History(){
    //console.log(URL)
    const [drops, setDrops] = useState ([])

    useEffect(()=>{
    getData();
    },[]);

    const getData = async () => {
        const response = await axios.get(historyURL, config)
        console.log(response.data.records)
        setDrops(response.data.records)
        
    }
return(
<div>
    <div>
        {drops? drops.map((drop) => {
        return (
            <Link to = {`/history/${drop.id}`} key={drop.id}>{drop.fields.name}</Link>
        )
        }):null}
    </div>
</div>
)
}

export default History