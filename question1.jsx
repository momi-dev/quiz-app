import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Quiz } from "./assets/quizstore";

const Question1 = () => {
  const { marks1 } = useContext(Quiz);
  const [checkboxvalue, setcheckboxvalue] = useState([]);
  const [percantage, setpercantage] = useState(0);
  const [countdown, setCountdown] = useState(60); // Initialize countdown for 60 seconds
  const navigate = useNavigate(); // For navigation after timer ends

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      // Handle what happens when countdown reaches 0
    
      navigate("/question2");
    }
  }, [countdown, navigate]);

  const handleonchange = (e) => {
    const flag = e.target.checked;
    const value = e.target.value;
    console.log(value);
    setpercantage(percantage + 20);

    if (flag) {
      setcheckboxvalue([...checkboxvalue, value]);
      submit1(value);
    }
  };

  const submit1 = (value) => {
    if (value === "Islamabad") {
      marks1();
    }
  };

  const onclickest = () => {
    window.alert("Your answer is submitted");
  };

  return (
    <div className="container px-4 text-center">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3">
            <h1 className="question-handle">Question No 1:</h1>
            <h1 className="question-handle1">Which city is the capital of Pakistan?</h1>
            <div className="form-check checkbox-handle">
              <input
                className="form-check-input"
                type="checkbox"
                name="a"
                id="flexCheckDefault"
                onChange={handleonchange}
                value="Lahore"
              />
              Lahore
            </div>
            <div className="form-check checkbox-handle">
              <input
                className="form-check-input"
                type="checkbox"
                name="a"
                id="flexCheckChecked"
                onChange={handleonchange}
                value="Islamabad"
              />
              Islamabad
            </div>
            <div className="form-check checkbox-handle">
              <input
                className="form-check-input"
                type="checkbox"
                name="a"
                id="flexCheckChecked"
                onChange={handleonchange}
                value="Karachi"
              />
              Karachi
            </div>
            <div className="form-check checkbox-handle">
              <input
                className="form-check-input"
                type="checkbox"
                name="a"
                id="flexCheckChecked"
                onChange={handleonchange}
                value="Fata"
              />
              Fata
            </div>

            <Link to="/question2">
              <button
                className="btn btn-primary button-handle1 button"
                onClick={onclickest}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
        <div className="col">
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
  );
};

export default Question1;
