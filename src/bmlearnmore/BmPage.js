import React from 'react'
import '../ballotmeasures/BallotMeasure.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './BmPage.css';

const BmPage = () => {
  return (
    <div>
      <div className="ballot-cont2">
        <div className="textbox">
          <h1 className="title">Ballot Measures</h1>
          <p className="info">
            fdk fjdksla;ri fjdkslaj fhdsafdsa
            fhdsafudoiw cmoooo 1jkdslamc
            fjdjsah. fjfj kfdlsa; xndljsafds
            fkdlsa; piwpoqwoq nxmdsndh mdlamcx,
            fdsa uiourel,n fjdkla.
          </p>
          <div className="button">
            <Link to="/idk" className="learnmore">Learn More</Link>
          </div>
        </div>
      </div>

      <div className="ballot-cont">
        <div className="shadow-box">
          <div className="textbox">
            <h1 className="nyccouncil" >Proposal 1</h1>
            <p className="measures-info">
              (graphic goes here)
            </p>
            <p className="measures-info">
              fdk fjdksla;ri fjdkslaj fhdsafdsa
              fhdsafudoiw cmoooo 1jkdslamc
              fjdjsah. fjfj kfdlsa; xndljsafds
              fkdlsa; piwpoqwoq nxmdsndh mdlamcx,
              fdsa uiourel,n fjdkla.
            </p>
            <div className="button">
              <Link to="/ballotmeasures/newyorkproposal1" className="learnmore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="ballot-cont">
        <div className="shadow-box">
          <div className="textbox">
            <h1 className="nyccouncil" >Proposal 2</h1>
            <p className="measures-info">
              (graphic goes here)
            </p>
            <p className="measures-info">
              fdk fjdksla;ri fjdkslaj fhdsafdsa
              fhdsafudoiw cmoooo 1jkdslamc
              fjdjsah. fjfj kfdlsa; xndljsafds
              fkdlsa; piwpoqwoq nxmdsndh mdlamcx,
              fdsa uiourel,n fjdkla.
            </p>
            <div className="button">
              <Link to="/ballotmeasures/newyorkproposal2" className="learnmore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <p> etc., more containers as needed. </p>
      <br>
      </br>
      <br>
      </br>
    </div >
  )
}

export default BmPage
