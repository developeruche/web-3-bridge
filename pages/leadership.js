import Header from "../components/header";
import {useState, useEffect} from "react";


function Leadership() {
    const [users, setUsers] = useState([])
    const [onClientSide, setOnClientSide] = useState(false)

    useEffect(() => {
        let users_ = JSON.parse(localStorage.getItem("webthree"));
        users_.sort((a, b) => {
            return a.iteration - b.iteration;
        })

        setUsers(users_);
        console.log(users, "working")

        if (typeof window !== "undefined") {
            setOnClientSide(true);
        }
    }, [])
    

    return (
        <div>
            {/* this page would display the top ten workout participant */}
            <Header />
            <br />

            {
                users && onClientSide ? (
                    <ul className="leadership__list">
                        <li>
                            <p>{users[0].name}</p> <p>{users[0].iteration.length}</p> <p>{users[0].iteration[users[0].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[1].name}</p> <p>{users[1].iteration.length}</p> <p>{users[1].iteration[users[1].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[2].name}</p> <p>{users[2].iteration.length}</p> <p>{users[2].iteration[users[2].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[3].name}</p> <p>{users[3].iteration.length}</p> <p>{users[3].iteration[users[3].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[4].name}</p> <p>{users[4].iteration.length}</p> <p>{users[4].iteration[users[4].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[5].name}</p> <p>{users[5].iteration.length}</p> <p>{users[5].iteration[users[5].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[6].name}</p> <p>{users[6].iteration.length}</p> <p>{users[6].iteration[users[6].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[7].name}</p> <p>{users[7].iteration.length}</p> <p>{users[7].iteration[users[7].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[8].name}</p> <p>{users[8].iteration.length}</p> <p>{users[8].iteration[users[8].iteration.length - 1]}</p>
                        </li>
                        <li>
                            <p>{users[9].name}</p> <p>{users[9].iteration.length}</p> <p>{users[9].iteration[users[9].iteration.length - 1]}</p>
                        </li>
                    </ul>
                ) : ""
            }        
        </div>
    )
}

export default Leadership
