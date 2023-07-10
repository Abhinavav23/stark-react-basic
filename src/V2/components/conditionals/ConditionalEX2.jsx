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

  return (
    <form action="">
      <label htmlFor="username">username</label>
      <input type="text" id="username" />
      {loginContent}
    </form>
  );
};
