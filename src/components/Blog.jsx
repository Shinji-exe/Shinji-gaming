import React from "react"
import "./Blog.css"
import {useEffect, useState} from "react"
import axios from "axios"
import { blogURL,config } from "../services"
import {useHistory} from "react-router-dom"
import Particles from "react-particles-js"



function Blog(){
    const [names, setNames] = useState('')
    const [topics, setTopics] = useState('')
    const [comments, setComments] = useState('')
    const [requests, setRequests] = useState([]);
    const [toggle,setToggle] = useState(false)
    const history = useHistory()
    //console.log(URL)

    useEffect(()=>{
    
    postData()
    },[]);

    const postData = async() => {
        const response = await axios.get(blogURL, config)
        setRequests(response.data.records)
    } 
async function handleSubmit(event)
{
    event.preventDefault();
    const newBlog = {
        names,
        topics,
        comments
    }
    await axios.post(blogURL, { fields: newBlog },config)
   // history.push("/Blog")
    setNames("")
    setTopics("")
    setComments("")
    postData();
}

async function handleDelete(id,e) {
    e.preventDefault();
    const response = await axios.delete(`${blogURL}/${id}`, config)
    history.push("/blog")
}

    return(
        <div className="pad">
        {requests.map((request)=>{
            return(
                <div className="diff">
                    <h3>{request.fields.names}</h3>
            
                <h4>{request.fields.topics}</h4>
                
            <p>{request.fields.comments}</p>
            <button onClick={(e)=>handleDelete(request.id,e)}>Delete</button>
                </div>
            )
        })}
        
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value ={names} onChange={(event)=> setNames(event.target.value)} type = "text" placeholder=""></input>
            <label>Topic</label>
            <input value={topics} onChange={(event) => setTopics(event.target.value)} type = "text" placeholder=""></input>
            <label>Comment</label>
            <input value={comments} onChange={(event) => setComments(event.target.value)} type = "comment" placeholder=""></input>
             <button type = "submit">Post</button>
        </form>
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
            "color":{
            "value":"#005496"
            },
            "line_linked": {
            "color": "#005496"
            },
	        "size": {
	            "value": 3
	        }
           
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
                
	        }
	    }
	}} />
        </div>
    )
}

export default Blog