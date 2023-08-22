import React, { useState } from "react";
import { Modal } from "./Modal";

export const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const heading = "product Details";
  return (
    <section>
      <h3>Product 1</h3>
      <button onClick={() => setShowModal(true)}>show Details</button>
      <Modal
        visible={showModal}
        onClose={setShowModal}
        heading={heading}
        description={"detailed description"}
      />
    </section>
  );
};
