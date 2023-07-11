export const ConditionalEX2 = () => {
  const forgotPassword = false;
  let loginContent;
  if (forgotPassword) {
    loginContent = (
      <>
        <p>Who was your first pet?</p>
        <select name="" id="">
          <option value="">Doggy</option>
          <option value="">cat</option>
          <option value="">Lion</option>
          <option value="">Tiger</option>
          <option value="">horse</option>
        </select>
      </>
    );
  } else {
    loginContent = (
      <>
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
      </>
    );
  }

  let value = 2;
  let valueEl;

  //   if(value === 1){
  //     valueEl = <div>1</div>
  //   }else if(value === 2){
  //     valueEl = <div>2</div>
  //   } else if (value===3){
  //     valueEl = <div>2</div>
  //   }

  switch (value) {
    case 1:
      valueEl = <div>1</div>;
      break
    case 2:
      valueEl = <div>2</div>;
      break;
    case 3:
      valueEl = <div>3</div>;
      break;
  }

  return (
    <>
      <form action="">
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
        {loginContent}
      </form>
      <div>Value: {valueEl}</div>
    </>
  );
};
