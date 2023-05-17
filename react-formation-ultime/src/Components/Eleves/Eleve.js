import React from "react";
import "./Eleve.css";

class Eleve extends React.Component {
  render() {
    return (
      <div className="eleve">
        <h1>{this.props.nom}</h1>
        <p>
          Moyenne scolaire : <b>{this.props.moyenne}/20</b>
        </p>
      </div>
    );
  }
}

export default Eleve;
