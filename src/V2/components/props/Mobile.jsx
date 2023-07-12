export const Mobile = (props) => {
    console.log('props', props);
   const {
        brand,
        modelName,
        price,
        //   specification: { screen, battery, camera },
        screen,
        battery,
        camera,
      } = props
  return (
    <section
      style={{ border: "1px solid gray", padding: "10px", margin: "10px 40px" }}
    >
      <p>Brand: {brand}</p>
      <p>Model: {modelName}</p>
      <p>Price: {price}</p>
      <div>
        <p>specification</p>
        <p>Screen: {screen}</p>
        <p>Battery: {battery}</p>
        <p>camera: {camera}</p>
      </div>
    </section>
  );
};
