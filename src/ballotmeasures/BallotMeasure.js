import React from 'react';
import "./BallotMeasure.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BallotMeasure = () => {
  const LearnMore = () => {
    return (
      <div className="button">
        <Link to="/ballotmeasures" className="learnmore">Learn More</Link>
      </div>
    )
  }
  return (
    <div className="ballot-cont">
      <div className="shadow-box">
        <div className="textbox">
          <h1 className="nyccouncil" >Ballot Measures</h1>
          <p className="measures-info">
            fdk fjdksla;ri fjdkslaj fhdsafdsa
            fhdsafudoiw cmoooo 1jkdslamc
            fjdjsah. fjfj kfdlsa; xndljsafds
            fkdlsa; piwpoqwoq nxmdsndh mdlamcx,
            fdsa uiourel,n fjdkla.
          </p>
          <LearnMore />
        </div>
      </div>
    </div>
  )
}

export default BallotMeasure;