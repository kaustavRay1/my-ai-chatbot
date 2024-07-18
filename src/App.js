import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [question,setQuestion] =useState("");
  const [answer,setAnswer] =useState("");
  async function generateSolution() {
    console.log("loading..");
     const response= await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key= YOUR API KEY", 
      method:"post",
      data:{contents:[ 
        {parts :[
          {text : question },],},],},

    })
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
   <>
   <div style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column"}}>
   <h1>AI Chatbot</h1>
   <textarea  cols={50} rows={10} value={question} onChange={e =>setQuestion(e.target.value)}/><br/>
   <button onClick={generateSolution}>Generate Answer</button><br/>
   <textarea  cols={50} rows={10} value={answer}/>
   </div>
   </>
  );
}

export default App;
