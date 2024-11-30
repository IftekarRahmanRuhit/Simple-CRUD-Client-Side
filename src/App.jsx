
import './App.css'

function App() {

  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(user.insertId){
        alert('User Added Successfully')
        form.reset();
      }
    })


  }



  return (
    <>

      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        Name : <input type="text" name='name' id='' />
        <br />
        Email: <input type="email" name='email' id='' />
        <br />
        <input type="submit" value="Add user" />
      
      </form>
      
    </>
  )
}

export default App