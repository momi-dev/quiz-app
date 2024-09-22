import { useContext } from "react"
import { Quiz } from "./assets/quizstore"

import { Link ,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";




const Question5=()=>{

  const{marks}=useContext(Quiz);
  const{marks1}=useContext(Quiz);
  const [percantage, setpercantage] = useState(80);
  const [countdown, setCountdown] = useState(60); // Initialize countdown for 60 seconds
  const navigate = useNavigate(); // For navigation after timer ends

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      // Handle what happens when countdown reaches 0
    
      navigate();
    }
  }, [countdown, navigate]);
 
  const [checkboxvalue,setcheckboxvalue]=useState([]);
  
  const handleonchange=(e)=>{
    const flag=e.target.checked;
    const value=e.target.value;
    console.log(value);
    setpercantage(percantage + 20);
   
    if(flag){
     setcheckboxvalue([...checkboxvalue,value])
     submit5(value);
    }
   }
   const submit5=(value)=>{
     if(value==="Markhor"){
      marks1();
     }
   
   
    
   }
   const onclickest=()=>{
    window.alert("your answere is submitted")
    document.getElementById('res_marks').style.display="block"
  }



  
  return(
    <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3"><div className="all-handle">
<h1 className="question-handle">Question No 5:</h1>
    <h1 className="question-handle1">which is the national animal    of Pakistan .</h1>
    <div class="form-check checkbox-handle">
  <input class="form-check-input"  type="radio" name="La" value="Lion" id="flexCheckDefault" onChange={handleonchange}/>Lion
 
</div>
<div class="form-check checkbox-handle">
  <input class="form-check-input" type="radio" name="La" value="Fox" id="flexCheckChecked"onChange={handleonchange} />Fox

</div>
<div class="form-check checkbox-handle">
  <input class="form-check-input" type="radio" name="La" value="Markhor" id="flexCheckChecked" onChange={handleonchange}/>Markhor

</div>
<div class="form-check checkbox-handle">
  <input class="form-check-input" type="radio" name="La" value="Goat" id="flexCheckChecked"onChange={handleonchange} />Goat

</div>
<button type="button " class="btn btn-primary button-handle button1-handle" onClick={()=>{submit5();onclickest();}}>your result </button>
<div className="marks-handle result-handle"id="res_marks" style={{display:"none"}}>your total marks out of five is: {marks}</div>

</div></div>
    </div>
    <div class="col">
       <div className="p-3">
            <h1 className="progress-bar-text">Progress bar</h1>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={percantage}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar"
                style={{ width: `${percantage}%` }}
              >
                {percantage}%
              </div>
            </div>

            <h2 className="countdown-text">Time Left: {countdown}s</h2>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: `${(countdown / 60) * 100}%` }}
              ></div>
            </div>
          </div>
    </div>
  </div>
</div>



  )
}


export default Question5