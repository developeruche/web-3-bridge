import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from "react";


export default function Home() {
  const [formId, setFromId] = useState("");
  const [formName, setFromName] = useState("");
  const [formStep, setFromStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      // adding inital data to the storage, the local storage would serve as the db
      if(localStorage.getItem("w3w")) {
        // pass
      } else {

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

        localStorage.setItem("w3w", data)
      }
      
    }
  }, [])


  const handleFormSubmit = (e) => {
    e.preventDefault()

    // fetching the data of the user who owns the id provided

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3Workout</title>
        <meta name="description" content="The is an application for skill test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Here User can be able to add data to there iterations */}
        {
          errorMessage ? (
          <h1>
            ERROR: {errorMessage}
          </h1>
          ) : ""
        }
        
        <form>
          <input 
            type="text" 
            placeholder="Enter your Web3Bridge id" 
            value={formId}
            required
          />

          <input 
            type="text" 
            name="name" 
            id="form_name" 
            placeholder="Enter Your Name" 
            value={formName}
            required
          />

          <input 
            type="number" 
            name="step" 
            id="form_steps" 
            placeholder="Enter the number of steps taken during the iteration."
            value={formStep}
            required
            />
        </form>
      </main>
    </div>
  )
}
