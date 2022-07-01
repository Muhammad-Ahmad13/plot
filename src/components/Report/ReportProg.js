import React from 'react';
import ProgressCard from './ProgressCard';
import ReportAdvice from './ReportAdvice';
import "./ReportProg.css";
const ReportProg = (props) => {
  return (
    <>
        <div className="container">
          <div className="reportprogmain">
            <div className="reportprogsec">
              <div className="reportProgdata">
                <h3>
                  {props.propertyName}
                </h3>
                <p>
                  <span>{props.pApart}</span>
                  <span>{props.pYear}</span>
                  <span>{props.pRoom}</span>
                  <span>{props.pArea}</span>
                  <span>{props.pLocation}</span>
                  <span>{props.pdataloc}</span>
                  <span>{props.pPrice}</span>
                </p>
              </div>
              <div className="tablistcontent">
                <ul className="nav nav-pills pills-direction mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-price-tab" data-bs-toggle="pill" data-bs-target="#pills-price" type="button" role="tab" aria-controls="pills-price" aria-selected="true">Prijs</button>
                  </li>
                  <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-pricem-tab" data-bs-toggle="pill" data-bs-target="#pills-pricem" type="button" role="tab" aria-controls="pills-pricem" aria-selected="false">prijs/m</button>
                  </li>
              </ul>
            </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active " id="pills-price" role="tabpanel" aria-labelledby="pills-price-tab">
              <div className="tabSection">
            <div className="progcontent1">
                <div className="progresscontent">
                  <ProgressCard
                    progname={props.name1}
                    progvalue={props.value1}
                    // progStyle1={props.widthdata}
                    // progValue1={props.widthValue}
                  />      
                  </div>
                </div>
                <div className="progcontent2">
                  <div className="progresscontent">
                    <ProgressCard
                      progname={props.name2}
                      progvalue={props.value2}
                      // progStyle2={props.widthdata}
                      // progValue2={props.widthValue}
                      // progStyle2={props.style2}
                    />
                  </div>
                </div>
                <div className="progcontent3">
                  <div className="progresscontent">
                    <ProgressCard
                      progname={props.name3}
                      progvalue={props.value3}
                      // progStyle3={props.widthdata}
                      // progValue3={props.widthValue}
                      // progStyle3={props.style3}
                    />
                    </div>
                </div>
                <div className="progcontent4">
                  <div className="progresscontent">
                    <ProgressCard
                      progname={props.name4}
                      progvalue={props.value4}
                      // progStyle4={props.widthdata}
                      // progValue4={props.widthValue}
                      // progStyle4={props.style4}
                    />
                    </div>
                </div>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-pricem" role="tabpanel" aria-labelledby="pills-pricem-tab">
              <div className='tabSection'>
            <div className="progcontent1">           
                <div className="progresscontent">
                    <ProgressCard
                      progname={props.name5}
                      progvalue={props.value5}
                      // progStyle5={props.style5}
                    />
                    </div>
                </div>
                <div className="progcontent2">
                  <div className="progresscontent">
                    <ProgressCard
                      progname={props.name6}
                      progvalue={props.value6}
                      // progStyle6={props.style6}
                    /> 
                    </div>
                </div>
                <div className="progcontent3">
                  <div className="progresscontent">
                    <ProgressCard
                      progname={props.name7}
                      progvalue={props.value7}
                      // progStyle7={props.style7}
                    />
                  </div>
                </div>
                <div className="progcontent4">
                    <div className="progresscontent">
                      <ProgressCard
                        progname={props.name8}
                        progvalue={props.value8}
                        // progStyle8={props.style8}
                      />   
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="reportadvice">
          <ReportAdvice/>
        </div>
        </div>
    </div>
    </>
  );
}
export default ReportProg;