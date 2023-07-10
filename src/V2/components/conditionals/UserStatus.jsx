export const UserStatus = () => {
  const loggedInState = true;
  const grocerySelected = true;

  if (!loggedInState) {
    // early returns
    return <div>Please login First</div>;
  }

  if (grocerySelected) {
    return (
      <div>
        <h2>RS 1 deals</h2>
        <p>Namkeen </p>
        <p>packeged food</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Shopping site</h2>
      <p>Mobile</p>
      <p>electronics</p>
      <p>slider</p>
      <p>book a flight</p>
    </div>
  );
};
