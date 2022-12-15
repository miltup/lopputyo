import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3000/lopputyo/';

function AdminLogin() {
  const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        axios.post(URL + 'admin/adminlogin.php', {})
        .then(response => 
            setLoggedUser(response.data))
        .catch(error => alert(error.message));
    }, []);

    function logOut(){
        axios.get(URL + 'admin/adminlogout.php' )
        .then(response => setLoggedUser(null))
        .catch(error => alert(error.message));
    }

    return (
        <div>
            {loggedUser && <button type='button' onClick={logOut}>Kirjaudu ulos</button>}
           {loggedUser ? <AdminPage username={loggedUser} /> : <Login setLoggedUser={setLoggedUser} />}
        </div>
    );
}

function Login({setLoggedUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function logIn() {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        axios.post(URL + 'admin/adminlogin.php', formData )
        .then(response => 
            setLoggedUser(response.data))
            .catch(error => alert(error.message));
    }

    return (
        <form>
            <label>Käyttäjänimi: </label>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)}/>
            <br></br>
            <label>Salasana: </label>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <br></br>
            <button type='button' onClick={logIn}>Kirjaudu sisään</button>
        </form>
    )
}
export default AdminLogin;

function AdminPage({username}) {

    return (
        <>
        <div>
            <h5>Tervetuloa {username}!</h5>
        </div>
        <div>
        <Admin />
        </div>
        <div>
        <Register />
        </div>
        </>
    )
}

function Admin() {

    const addCategory = (e) => {
        e.preventDefault();

        const data = {
          category_name: e.target.category_name.value
        }
        axios.post(URL + 'admin/addcategories.php', data)
        .then(response => {
            console.log(response);
            alert('Tuoteryhmä lisätty.')
        })
        .catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
      }
    return (
    <>
    <div className="container">
        <h5>Tuoteryhmän lisääminen</h5>
        <form onSubmit={addCategory}>
            <div>
            <label>Tuoteryhmän nimi: </label>
            <input type="text" placeholder="tuoteryhmä" name="category_name" />
            </div>
            <br></br>
            <button variant="primary" type="submit">Lisää tuoteryhmä</button>
        </form>
    </div>
    </>
    );
} 

function Register({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function addUser(e){
  
      const json = {username, password};

      axios.post(URL + 'admin/adduser.php',  json)
        .then(response => setUser(username))
        .catch(error => alert(error.message));
    }
  
    return(
      <div>
        <form>
          <label>
            Käyttäjänimi:
            <input type="text" onChange={e => setUsername(e.target.value)}></input>
          </label>
          <label>
            Salasana:
            <input type="password" onChange={e => setPassword(e.target.value)}></input>
          </label>
          <button type="button" onClick={addUser}>Lisää käyttäjä</button>
        </form>
      </div>
    )
  }
  