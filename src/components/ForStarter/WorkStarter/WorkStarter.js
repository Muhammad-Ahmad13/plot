import React from 'react'
import Kunnen from '../../HomePage/Kunnen/Kunnen';
import WorkStarterCard from './WorkStarterCard';
import "./WorkStarter.css";
import work1 from "../../../assets/images/work1.png";
import work2 from "../../../assets/images/work2.png";
import work3 from "../../../assets/images/work3.png";
import { Link } from 'react-router-dom';
const WorkStarter = () => {
  return (
      <div className='mainstarter'>
         <div className="container">
             <div className="workstartermain">
                <div className="workstarterHead">
                    <Kunnen
                        kunHead="How it works"
                        kunPara="Lorem ipsum georening bukoska vaben. Dogyns eurong.
                        Povisovis josm, emedan semis. Harat rar par."
                    />
                </div>
             </div>
         </div>
         <div className="Workstarter-bg">
            <div className="container">
                    <div className="WorkStarterContent">
                        <div className="StarterContent">
                            <WorkStarterCard
                            workHead="1."
                            workPic={work1}
                            workPara="U bent elke dag op de hoogte van de nieuwste woningen en kunt hierdoor snel reageren op woningen."
                            />
                        </div>
                        <div className="StarterContent">
                            <WorkStarterCard
                            workHead="2."
                            workPic={work2}
                            workPara="Elke dag ontvangt u een lijst met woningen in heel Nederland die voldoen aan uw eisen"
                            />
                        </div>
                        <div className="StarterContent">
                            <WorkStarterCard
                            workHead="3."
                            workPic={work3}
                            workPara="U bent elke dag op de hoogte van de nieuwste woningen en kunt hierdoor snel reageren op woningen."
                            />
                        </div>
                    </div>
                    <div className="workstarter-anc">
                        <Link to="#">Direct starten</Link>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default WorkStarter;