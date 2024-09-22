import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useContext } from "react"
import { Quiz } from "./assets/quizstore"

const Question2=()=>{
  const{marks1}=useContext(Quiz);
  const [checkboxvalue,setcheckboxvalue]=useState([]);
  const [percantage, setpercantage] = useState(20);
  const [countdown, setCountdown] = useState(60); // Initialize countdown for 60 seconds
  const navigate = useNavigate(); // For navigation after timer ends

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      // Handle what happens when countdown reaches 0
    
      navigate("/question3");
    }
  }, [countdown, navigate]);
  
  
  const handleonchange=(e)=>{
   const flag=e.target.checked;
   const value=e.target.value;
   console.log(value);
   setpercantage(percantage + 20);
  
   if(flag){
    setcheckboxvalue([...checkboxvalue,value])
    
   }
   submit2(value);
   window.alert("your answere is submitted")
  }
  const submit2=(value)=>{
    if(value==="Lahore"){
     marks1();
    
    }
    

  }
  return (
    <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3"><div className="all-handle">
<h1 className="question-handle">Question No 2:</h1>
    <h1 className="question-handle1">which city is the heart  of Pakistan .</h1>
    <div class="form-check checkbox-handle">
  <input class="form-check-input"  type="radio" name="Lahor" value="Lahore" id="flexCheckDefault" onChange={handleonchange}/>Lahore

</div>
<div class="form-check checkbox-handle">
  <input class="form-check-input" type="radio" name="Lahor" value="islamabad" id="flexCheckChecked" onChange={handleonchange}/>islamabad

</div>
<div class="form-check checkbox-handle">
  <input class="form-check-input" type="radio" name="Lahor" value="Karachi" id="flexCheckChecked" onChange={handleonchange} />Karachi
  
</div>
<div class="form-check checkbox-handle">
  <input class="form-check-input" type="radio" name="Lahor" value="Fata" id="flexCheckChecked" onChange={handleonchange}/>Fata
 
</div>

<Link to="/question3"> <button  class="btn btn-primary button-handle1 button-handle1 button" > Next</button>  </Link>
</div>
</div>
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

export default Question2