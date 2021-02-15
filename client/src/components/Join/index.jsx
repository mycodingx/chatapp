import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <React.Fragment>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1>Join</h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="joinInput"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Room"
              className="joinInput mt-20"
              onChange={(event) => setRoom(event.target.value)}
            />
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className="button mt-20" type="submit">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Join;
