import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = event =>{
    event.preventDefault()
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const updateUser ={name,email}

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        alert('User Updated successfully')
      }
    })
  }



  return (
    <div>
      <p>Update information of {loadedUser.name}</p>

      <form onSubmit={handleUpdate}>
        Name : <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
        <br />
        Email: <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
