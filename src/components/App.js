import React, { useState, useEffect } from "react";
import Aside from "./Aside";
import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import { nanoid } from "nanoid";
function App(props) {
  //for localStorage
  const getLocalData = () => {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };
  //All state variables
  const [isEditFormVisible, setEditFormVisibility] = useState(false);
  const [active, setActive] = useState("");
  const [list, setList] = useState(getLocalData());
  const [userData, setUserData] = useState({
    name: "",
    role: "",
  });

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  function handleList(i) {
    if (list.length) {
      setList(handleDelete(i));
    }
  }
  function handleDelete(i) {
    let result = list.filter((item, idx) => idx !== i);
    console.log(list);

    return result;
  }
  const handleFormChange = (event) => {
    event.preventDefault();
    let fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;
    const newUserData = { ...userData };
    newUserData[fieldName] = fieldValue;
    setUserData(newUserData);
  };
  //handling submit request
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: nanoid(),
      date: new Date().toLocaleTimeString(),
      name: userData.name,
      role: userData.role,
    };
    const newList = [...list, newUser];
    setList(newList);
    console.log(newList);

    setUserData({
      name: "",
      role: "",
    });
    setEditFormVisibility(false);
  };
  useEffect(() => {
    // storing list
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <Header />
      <div className="container flex">
        <Aside
          setEditFormVisibility={setEditFormVisibility}
          isEditFormVisible={isEditFormVisible}
          setActive={setActive}
          active={active}
          handleClick={handleClick}
        />
        <Main
          setEditFormVisibility={setEditFormVisibility}
          isEditFormVisible={isEditFormVisible}
          list={list}
          handleList={handleList}
        />
      </div>
      {isEditFormVisible && (
        <Form
          setEditFormVisibility={setEditFormVisibility}
          isEditFormVisible={isEditFormVisible}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          userData={userData}
        />
      )}
    </>
  );
}

export default App;
