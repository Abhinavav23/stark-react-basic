export const SignUp = () => {
  let userInfo = {};
  const saveInfo = (ev) => {
    // if(ev.target.name === 'firstName'){
    //     userInfo.firstName = ev.target.value
    // }
    // if(ev.target.name === 'lastName'){
    //     userInfo.lastName = ev.target.value
    // }
    // if(ev.target.name === 'email'){
    //     userInfo.email = ev.target.value
    // }
    const { name, value } = ev.target;
    userInfo[name] = value;
  };

  const signUp = (ev) => {
    ev.preventDefault();
    console.log(userInfo);
  };

  return (
    <form>
      <label htmlFor="firstName">first Name: </label>
      <input type="text" name="firstName" id="firstName" onChange={saveInfo} />
      <br />
      <label htmlFor="lastName">Last Name: </label>
      <input type="text" name="lastName" id="lastName" onChange={saveInfo} />
      <br />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" onChange={saveInfo} />
      <br />
      <button onClick={signUp}>signUp</button>
    </form>
  );
};
