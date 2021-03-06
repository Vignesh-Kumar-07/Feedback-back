import { useContext } from "react";
import Feedbackitem from "./Feedbackitem";
import {AnimatePresence,motion} from 'framer-motion'
import FeedbackContext from "../contex/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {

  const {feedback,isLoading} = useContext(FeedbackContext)
  
  if(!isLoading && (!feedback || feedback.length === 0)){
    return <p>No feedback yet</p>
  }
 

  const Feedback = feedback.map(item => 
    
    <motion.div
      key={item.id}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <Feedbackitem 
        key ={item.id} 
        item = {item}
        
      /> 
    </motion.div>
  )
  
  
  return isLoading ? (<Spinner/>) :
    (<div className='feedback-list'>
      <AnimatePresence>
        {Feedback}
      </AnimatePresence>
    </div>)
  
}

export default FeedbackList