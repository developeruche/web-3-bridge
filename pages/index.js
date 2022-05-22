import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from "react";
import Header from '../components/header';


export default function Home() {
  const [formId, setFromId] = useState("");
  const [formName, setFromName] = useState("");
  const [formStep, setFromStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("")

  const data = [
    {
      id: 1,
      name: "uche",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 2,
      name: "user1",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 3,
      name: "user2",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 4,
      name: "user3",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 5,
      name: "user4",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 6,
      name: "user5",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 7,
      name: "user6",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 8,
      name: "user7",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 9,
      name: "user8",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 10,
      name: "user9",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 11,
      name: "user10",
      current_no_steps: 0,
      iteration: []
    },
    {
      id: 12,
      name: "user11",
      current_no_steps: 0,
      iteration: []
    },
  ];

  useEffect(() => {
    if(localStorage.getItem("webthree")) {
      // pass
    }else {
      localStorage.setItem("webthree", JSON.stringify(data))
    }
    
  }, [])

  const handleFormSubmit = e => {
    e.preventDefault();
    setErrorMessage("")


    // get the user from the storage and convert them to javascript 
    let users = JSON.parse(localStorage.getItem("webthree"));

    // validate that the id sent in by the user is associated with an account
    let user = users.filter((user) => user.id == formId)

    if(user.length == 0) {
      setErrorMessage("Invalid ID...");
      return
    }else {
      // check if iteration length is 4 (4 if the max)
      if (user[0]?.iteration.length >= 4) {
        setErrorMessage("you have maxed out your iteration...")
      } else {
        // adding new iteration
        let last_i_index = user[0]?.iteration.length - 1;
        if (last_i_index > 0) {
          let lastIterationStep = user[0]?.iteration[last_i_index];

          if(formStep < lastIterationStep * 2) {
            setErrorMessage("Invalid step, expected something higher")
            return
          }
          
          if(formStep > lastIterationStep * 3) {
            setErrorMessage("Invalid step, expected something lesser")
            return
          }

          user[0].iteration.push(formStep)
        }else {
          user[0].iteration.push(formStep)
        }
        
      }
    }

    let users_filter = users.filter((user) => user.id !== formId);
    users_filter.push(user)
    localStorage.setItem("webthree", JSON.stringify(users_filter));
  }

  return (
    <div className="workout__home">
      <Head>
        <title>Web3Workout</title>
        <meta name="description" content="The is an application for skill test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <br />
        <br />
        {/* Here User can be able to add data to there iterations */}
        {
          errorMessage ? (
          <h1>
            ERROR: {errorMessage}
          </h1>
          ) : ""
        }

        <div className="workout__home__container">
          <form>
            <input 
              type="text" 
              placeholder="Enter your Web3Bridge id" 
              value={formId}
              required
              onChange={e => {
                setFromId(e.target.value)
              }}
            />

            {/* <input 
              type="text" 
              name="name" 
              id="form_name" 
              placeholder="Enter Your Name" 
              value={formName}
              required
              onChange={e => {
                setFromName(e.target.value)
              }}
            /> */}

            <input 
              type="number" 
              name="step" 
              id="form_steps" 
              placeholder="Enter the number of steps taken during the iteration."
              value={formStep}
              required
              onChange={e => {
                setFromStep(e.target.value)
              }}
              />

              <button onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
      </main>
    </div>
  )
}
