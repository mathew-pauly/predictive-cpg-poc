import React, {useContext, useState} from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import { Context } from '../../context/AppContext';
const App = () => {
  const context = useContext(Context);
  const [question, setQuestion] = useState({})
  const [anwser, setAnswer] = useState('')
  const [evidence, setEvidence] = useState('The USPSTF recommends 1-time screening for abdominal aortic aneurysm (AAA) with ultrasonography in men aged 65 to 75 years who have ever smoked.')
  const {state} = context;
  const {questions} =  state;
  const onQuestionSelect =(question) =>{
    setQuestion(question)
  }
  const onSubmit =()=>{
    const payload = {id: question.id, question: question.text, anwser};
    alert(JSON.stringify(payload))
  }
  const onAnwserChange =(e)=>{
    setAnswer(e.target.value)
  }
  const onDatasetAdd = ()=>{

  }
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
      <div className="row">
          <div className="col-md-9 left">
            <div className="question-container">
              <h4>Question</h4>
              <p>{question.text}</p>
            </div>
            <div className="answer-container">
              <h4>Anwser</h4>
              <input type="text" value={anwser} onChange={onAnwserChange}/>
            </div>
            <div className="evidence-container">
              <h4>Evidence</h4>
              <p>{evidence}</p>
            </div>
            <div className="btn-submit">
              <button type="button" className="btn btn-secondary" onClick={onSubmit}>Submit</button>
            </div>
            <div className="decision-tree-container">
              <h6>Decision Tree Authoring Tool</h6>
            </div>
            <div className="btn-dataset">
              <button type="button" className="btn btn-secondary" onClick={onDatasetAdd}>ADD TO DATASET</button>
            </div>
          </div>
          <div className="col-md-3 right">
            <div className="questions-container">
              <h4>Asked Questions</h4>
              {
                questions.map((question)=>{
                return <p key={question.id} onClick={()=>onQuestionSelect(question)}>{question.text} 
                  {
                    question.topics.map((topic, idx)=>{
                      return <span key={idx} className="tag">{topic}</span>
                    })
                  }
                </p>
                })
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="dataset-container">
              <h4>Labelled Dataset</h4>
              <div className="row">
                <div className="col-md-6">
                  <h5>Guideline</h5>
                  <hr />
                </div>
                <div className="col-md-6">
                  <h5>Decision Tree</h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
