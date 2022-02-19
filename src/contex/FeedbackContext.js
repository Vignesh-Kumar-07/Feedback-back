import { createContext,useState,useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider= ({children}) => {
    
    // loading
    const [isLoading,setIsLoading] = useState(true)
    
    const [feedback,setFeedback] = useState([])

    useEffect(() =>{
        fetchFeedback()
    },[])

    // fetch Api
    // function fetchFeedback(){
    //     fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
    //         .then(res => res.json())
    //         .then(data  => setFeedback(data))
    //         setIsLoading(false)
    // }

    const fetchFeedback  = async() =>{
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    
    //update Feedback 

    // function updateFeedback(id,upFeed){
    //     setFeedback(feedback.map(item => item.id === id ? {...item,...upFeed} : item))
    // }

    async function updateFeedback(id,upFeed){
        const response = await fetch(`/feedback/${id}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(upFeed)
        })
        const data = await response.json()
        
        setFeedback(feedback.map(item => item.id === id ? {...item,...data} : item))
    }
    // set item to be updated
    function editFeedback(item){
        setFeedbackEdit({
            item,
            edit:true
            }
        )
    }
    
    //Delete Feedback
    
    // function deleteFeedback(id){
    //     if(window.confirm("Are you sure you want to delete?")){     
    //         setFeedback(feedback.filter(item => item.id !== id))
    //     }
    // }
    
    // using REST API to deleta feed back 
    async function deleteFeedback(id){
        if(window.confirm("Are you sure you want to delete?")){     
            await fetch(`/feedback/${id}`,{
                method:'DELETE'
            })
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    // Before REST API-------
    // function addFeedback(newFeedback){
    //     newFeedback.id = uuidv4
    //     setFeedback(prevFeedback => [newFeedback,...prevFeedback])
    // }
    
    // After Fetching API
    async function addFeedback(newFeedback){
        const response = await fetch('/feedback',{
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback(prevFeedback => [data, ...prevFeedback])
    }
    


    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext