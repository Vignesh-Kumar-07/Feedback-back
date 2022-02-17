import React, { useState }  from "react";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import { FeedbackProvider } from "./contex/FeedbackContext";

export default function App(){
    
    const [feedback,setFeedback]  = useState(FeedbackData)

   

   
    return(
        <FeedbackProvider>
        <div>
            <Header/>
            <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList/>
            </div>
        </div>
        </FeedbackProvider>

    )
}