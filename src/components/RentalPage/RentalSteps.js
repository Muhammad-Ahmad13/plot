import React from 'react'
import StepCard from './StepCard';
import "./RentalSteps.css";
import rentalstep1 from "../../assets/images/rentalstep1.png";
import rentalstep2 from "../../assets/images/rentalstep2.png";
import rentalstep3 from "../../assets/images/rentalstep3.png";

const RentalSteps = () => {
  return (
    <div className="rentalstepmain">
        <div className="container">
            <div className="rentalstepsec">
                <h6>Een huurwoning vinden in 3 stappen.</h6>
                <div className="rentalstepcontent">
                    <div className="rentalstepdata">
                        <StepCard
                        stephead = "1."
                        steppara = "Vul jouw huurwoning wensen in"
                        />
                    </div>
                    <div className="rentalstepimage">
                        <img src={rentalstep1} alt = "rentalsteps"/>
                    </div>
                </div>
                <div className="rentalstepcontent">
                    <div className="rentalstepimage">
                        <img src={rentalstep2} alt = "rentalsteps"/>
                    </div>
                    <div className="rentalstepdata">
                        <StepCard
                        stephead = "2."
                        steppara = "Ontvang dagelijks een lijst met woningen die voldoen aan jouw eisen"
                        />
                    </div>
                </div>
                <div className="rentalstepcontent">
                    <div className="rentalstepdata">
                        <StepCard
                        stephead = "3."
                        steppara = "Reageer z.s.m. op de woningen en wees als één van de eersten"
                        />
                    </div>
                    <div className="rentalstepimage">
                        <img src={rentalstep3} alt = "rentalsteps"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default RentalSteps;