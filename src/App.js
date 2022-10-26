import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you want to Delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4();
     setFeedback([newFeedback, ...feedback]); 
  }
 
  return (
    <>
    <Header />
     <div className="container">
     <FeedbackForm handleAdd={addFeedback}/>
     <FeedbackStat feedback={feedback}/>
      <FeedbackList feedback ={feedback} handleDelete={deleteFeedback}/>
      
     </div>
    </>
  );
}

export default App;