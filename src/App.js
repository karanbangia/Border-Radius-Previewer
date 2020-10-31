import './App.css';
import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import InputSlider from "react-input-slider";

const App = () => {
  const [side1, setSide1] = useState(40);
  const [side2, setSide2] = useState(40);
  const [side3, setSide3] = useState(40);
  const [side4, setSide4] = useState(40);
  const [textAreaValue, setTextAreaValue] = useState(`
  {
    border-top-left-radius: ${side1}px;
    border-top-right-radius: ${side2}px;
    border-bottom-left-radius: ${side3}px;
    border-bottom-right-radius: ${side4}px;
  }
  `);

  function extracted() {
    setTextAreaValue(`
  {
    border-top-left-radius: ${side1}px;
    border-top-right-radius: ${side2}px;
    border-bottom-left-radius: ${side3}px;
    border-bottom-right-radius: ${side4}px;
  }
  `)
  }

  const handleChangeS1 = e => {
    let s = e.target.value;
    setSide1(s);
    document.getElementById("rounded-box").style.borderTopLeftRadius = (s + 'px');
    extracted();
  }
  const handleChangeS2 = e => {
    let s = e.target.value;
    setSide2(s);
    document.getElementById("rounded-box").style.borderTopRightRadius = (s + 'px');
    extracted();

  }
  const handleChangeS3 = e => {
    let s = e.target.value;
    setSide3(s);
    document.getElementById("rounded-box").style.borderBottomLeftRadius = (s + 'px');
    extracted();

  }
  const handleChangeS4 = e => {
    let s = e.target.value;
    setSide4(s);
    document.getElementById("rounded-box").style.borderBottomRightRadius = (s + 'px');
    extracted();

  }

  function copyText() {
    let copiedText = document.getElementById("css-out");
    copiedText.select();
    document.execCommand("copy");
    alert("Copied Text: " + copiedText.value);
  }

  return (
      <div className="main">
        <div className="sliders">
        <div className="slider1">
          <InputSlider axis="y" y={side1} ymin={0} ymax={500} onChange={({y}) => {
            setSide1(y);
            document.getElementById("rounded-box").style.borderTopLeftRadius = (side1 + 'px');
            extracted();
          }}/>
        </div>
        <div className="slider2">
          <InputSlider axis="y" y={side2} ymin={0} ymax={500} onChange={({y}) => {
            setSide2(y)
            document.getElementById("rounded-box").style.borderTopRightRadius = (side2 + 'px');
            extracted();
          }}/>
        </div>
        <div className="slider3">
          <InputSlider axis="y" y={side3} ymin={0} ymax={500} onChange={({y}) => {
            setSide3(y)
            document.getElementById("rounded-box").style.borderBottomLeftRadius = (side3 + 'px');
            extracted();
          }}/>
        </div>
        <div className="slider4">
          <InputSlider axis="y" y={side4} ymin={0} ymax={500} onChange={({y}) => {
            setSide4(y)
            document.getElementById("rounded-box").style.borderBottomRightRadius = (side4 + 'px');
            extracted();
          }}/>
        </div>
      </div>
        <div className="container1">
          <Card style={{width: '25rem'}}>

            <Row>
              <Col className="text-left">
                <input style={{width: '3rem'}} type="text" name="s1" value={side1}
                       onChange={handleChangeS1}/>
              </Col>
              <Col className="text-right">
                <input style={{width: '3rem'}} type="text" name="s2" value={side2}
                       onChange={handleChangeS2}/>
              </Col>
            </Row>
            <div name="rounded-box" id="rounded-box">Your content here</div>
            <Row>
              <Col className="text-left">
                <input style={{width: '3rem'}} type="text" name="s3" value={side3}
                       onChange={handleChangeS3}/>
              </Col>
              <Col className="text-right">
                <input style={{width: '3rem'}} type="text" name="s4" value={side4}
                       onChange={handleChangeS4}/>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="container2">
          <textarea id="css-out" value={textAreaValue} type="text" className="cssbox"/>
        </div>
        <div className="container3">
          <button onClick={copyText}>Copy text</button>
        </div>
      </div>

  )
}
export default App;