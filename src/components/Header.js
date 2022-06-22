import React from "react";

function Header(props) {
  return (
    <header>
      <div className="container flex space-between">
        <div className="flex center">
          <figure>
            <img
              src="https://play-lh.googleusercontent.com/xUdjCUw3hYSmTWsyfWZJxgjlYxBsktMeKjbrxUvJUEYaG9X6iXaX2XQijQLzPNuhcyo=w240-h480-rw"
              alt="logo"
            ></img>
          </figure>

          <h1>MY APPLICATION</h1>
          <span>
            <i className="fa fa-angle-down"></i>
          </span>
        </div>
        <div className="flex center">
          <figure>
            <img
              src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png"
              alt="user-icon"
              className="user-icon"
            ></img>
          </figure>
          <p>Pavan B.</p>
          <span>
            <i className="fa fa-angle-down"></i>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
