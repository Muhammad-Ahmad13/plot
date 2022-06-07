import React from 'react';
import "./WalterList.css";
const WalterListWrong = (props) => {
  return (
    <div>
        <div className="waltercomplist">
            <ul>
                <li>
                    <span>
                        <img src={props.walterlistimage1} alt="listImage"/>
                    </span>
                    {props.walterlistdata1}
                </li>
            </ul>

        </div>
    </div>
  );
}
export default WalterListWrong;