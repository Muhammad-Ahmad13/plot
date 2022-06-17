import React from 'react';
import SearchContentData from './SearchContentData';
import haticon1 from "../../assets/images/proposhat.png";
import haticon2 from "../../assets/images/proposwhite.png";
import searchicon from "../../assets/images/searchicon.png";
import "./ProposSearchContent.css";
import { Link } from 'react-router-dom';
const ProposSearchContent = () => {
  return (
      <>
      <div className='searchitmain'>
          <div className="searchit1">
            <form>
                <input type="text"
                placeholder="Search"/>
                <div className='searchabs'>
                    <img src={searchicon}/>
                </div>
            </form>
          </div>
          <div className="searchit2">
              <span>Top</span>
              <img src={haticon1}/>
              <span>Show All</span>
              <img src={haticon1}/>
          </div>
      </div>
    <div className="searchcontentmain">
        <h3>Top ideeën</h3>
        <div className="contentmaindata">
            <SearchContentData
            pdatahead="Idee"
            pdatapara="Ik wil graag de WOZ-waarde langer dan een jaar zien."
            pdataanc="In ontwikkeling"
            pnum1="301"
            main2img1={haticon1}
            pnum2="21"
            main2img2={haticon2}
            />
        </div>
        <div className="contentmaindata">
            <SearchContentData
            pdatahead="Idee"
            pdatapara="Ik wil KM-ratio kunnen veranderen."
            pdataanc="In ontwikkeling"
            pnum1="301"
            main2img1={haticon1}
            pnum2="21"
            main2img2={haticon2}
            />
        </div>
        <div className="contentmaindata anccolor1">
            <SearchContentData
            pdatahead="Idee"
            pdatapara="Ik wil ook in België kunnen zoeken."
            pdataanc="In ontwikkeling"
            pnum1="301"
            main2img1={haticon1}
            pnum2="21"
            main2img2={haticon2}
            />
        </div>
        <h3>
            Alle ideeën
        </h3>
        <div className="contentmaindata anccolor2">
            <SearchContentData
            pdatahead="Idee"
            pdatapara="Ik wil graag een profielfoto uploaden. "
            pdataanc="nog te weinig stemmen"
            pnum1="301"
            main2img1={haticon1}
            pnum2="21"
            main2img2={haticon2}
            />
        </div>
        <div className="contentmaindata anccolor2">
            <SearchContentData
            pdatahead="Idee"
            pdatapara="Ik wil de kleuren van de cijfers veranderen."
            pdataanc="nog te weinig stemmen"
            pnum1="301"
            main2img1={haticon1}
            pnum2="21"
            main2img2={haticon2}
            />
        </div>
        <div className="contentmainanc text-center">
            <Link to ="#">Meer</Link>
        </div>
    </div>
    </>
  )
}
export default ProposSearchContent;