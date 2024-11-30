import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleSubmit = event =>{
    event.preventDefault()
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
  }



  return (
    <div>
      <p>Update information of {loadedUser.name}</p>

      <form onSubmit={handleSubmit}>
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
