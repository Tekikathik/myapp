import React from "react";
import "./Ranking.css";

const Ranking = ({ users }) => {
  return (
    <div className="ranking">
      <h1 className="ranking-title">Ranking</h1>
      <div className="ranking-list">
        {users.map((user, i) => (
          <div key={i} className="ranking-item">
            <h1>{i+1}</h1>
            {user}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
