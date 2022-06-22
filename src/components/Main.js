import React from "react";

function Main(props) {
  let { setEditFormVisibility, isEditFormVisible, list, handleList } = props;

  return (
    <main className="flex-60">
      <button
        className="btn"
        onClick={() => setEditFormVisibility(!isEditFormVisible)}
      >
        Add User
      </button>
      <table>
        <thead>
          <th>#</th>
          <th>User</th>
          <th>Last Signed In</th>
          <th>Role</th>
          <th></th>
        </thead>
        {list.map((ele, i) => {
          return (
            <tbody key={i}>
              <td>{i + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.date}</td>
              <td>{ele.role}</td>
              <td>
                <i className="fa fa-trash " onClick={() => handleList(i)}></i>
              </td>
            </tbody>
          );
        })}
      </table>
    </main>
  );
}

export default Main;
