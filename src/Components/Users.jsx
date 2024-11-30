
/* eslint-disable react-hooks/rules-of-hooks */
import { useLoaderData } from "react-router-dom";


const users = () => {

    const users = useLoaderData()

    const handleDelete = _id => {
        console.log( 'Delete' ,_id)
        fetch(`http://localhost:5000/users/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            {users.length}
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} <button onClick={() => handleDelete(user._id)}>X</button> </p>)
                }
            </div>
        </div>
    );
};

export default users;