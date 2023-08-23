import React, { useRef, useState } from "react";
import { Modal } from "./Modal";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const childRef = useRef(null);

  const searchValue = (value) => {
    console.log('value', value);
  }

  const focusInput = () => {
    console.log('running focus input');
    childRef.current.focus();
  }
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <button>Home</button>
      <SearchBar searchValue={searchValue} ref={childRef}/>
      <button onClick={focusInput }>focus child input</button>

      <button onClick={() => setShowModal(true)}>Login</button>
      <br />
      {/* {showModal &&<Modal onClose={setShowModal}/>} */}
      <Modal
        visible={showModal}
        onClose={setShowModal}
        heading={"Login"}
        description={"please login into the app"}
      ></Modal>
    </nav>
  );
};
