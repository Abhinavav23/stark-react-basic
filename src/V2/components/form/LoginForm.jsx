export const LoginForm = () => {

    let userName = '';
    let password = ''

    const getUserName = (event) => {
        // console.log(event);
        // code to check if there is already a user with this value
        // synthetic event
        userName = event.target.value
    }

    const getPassword = (event) => {
        password = event.target.value
    }


    const login = (ev) => {
        ev.preventDefault();
        console.log('username is ', userName);
        console.log('password is ', password);
    }

    return(
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={getUserName}/>
            <br />
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" onChange={getPassword}/>
            <br />
            <button onClick={login}>login</button>
        </form>
    )
}