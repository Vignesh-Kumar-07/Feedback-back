import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider= ({children}) => {
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'this is text - 1',
            rating:10
        },
        {
            id:2,
            text:'this is text - 2',
            rating:7
        },
        {
            id:3,
            text:'this is text - 3',
            rating:5
        }
    ])
    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    
    //update id
    function updateFeedback(id,upFeed){
        setFeedback(feedback.map(item => item.id === id ? {...item,...upFeed} : item))
    }
    // set item to be updated
    function editFeedback(item){
        setFeedbackEdit({
            item,
            edit:true
        }
        )
    }
    //Delete Feednach
    function deleteFeedback(id){
        
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    function addFeedback(newFeedback){
        newFeedback.id = uuidv4
        setFeedback(prevFeedback => [newFeedback,...prevFeedback])
    }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext