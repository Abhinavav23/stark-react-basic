export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div>All rights reserved &copy; {year}</div>
      <div>Please contact stark batch for more info</div>
    </>
  );
};
