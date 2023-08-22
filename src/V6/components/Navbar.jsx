import React, { useState } from "react";
import { Modal } from "./Modal";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav>
      <button>Home</button>
      <button onClick={() => setShowModal(true)}>Login</button>
      <br />
      {/* {showModal &&<Modal onClose={setShowModal}/>} */}
      <Modal
        visible={showModal}
        onClose={setShowModal}
        heading={"Login"}
        description={"please login into the app"}
      > 
        
      </Modal>
    </nav>
  );
};
