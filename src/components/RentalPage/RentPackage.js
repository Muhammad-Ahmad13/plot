import React from 'react';
import PackageCard from './PackageCard';
import "./RentPackage.css";
import listCorrect from "../../assets/images/correct-white.png";
const RentPackage = () => {
  return (
    <div className="rentapackagemain">
        <div className="container">
            <h2>
                Packages
            </h2>
            <div className="rentpackagesec">
                <div className="rentpackagedata1">
                    <PackageCard
                    packHead = "Standard"
                    packNum = "$3000"
                    packdur = "/per month"
                    packPara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    packImage1 = {listCorrect}
                    packImage2 = {listCorrect}
                    packImage3 = {listCorrect}
                    packItem1 = "Lorem Ipsum is simply "
                    packItem2 = "Lorem Ipsum is simply "
                    packItem3 = "Lorem Ipsum is simply "
                    packAnc = "Get Instant quote"
                    packLab = "See More Features"
                    />
                </div>
                <div className="rentpackagedata2">
                    <PackageCard
                    packHead = "Premium"
                    packNum = "$4000"
                    packdur = "/per word"
                    packPara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    packImage1 = {listCorrect}
                    packImage2 = {listCorrect}
                    packImage3 = {listCorrect}
                    packItem1 = "Lorem Ipsum is simply "
                    packItem2 = "Lorem Ipsum is simply "
                    packItem3 = "Lorem Ipsum is simply "
                    packAnc = "Get Instant quote"
                    packLab = "See More Features"
                    />

                </div>
                <div className="rentpackagedata3">
                    <PackageCard
                    packHead = "Advanced"
                    packNum = "$5000"
                    packdur = "/per month"
                    packPara = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    packImage1 = {listCorrect}
                    packImage2 = {listCorrect}
                    packImage3 = {listCorrect}
                    packItem1 = "Lorem Ipsum is simply "
                    packItem2 = "Lorem Ipsum is simply "
                    packItem3 = "Lorem Ipsum is simply "
                    packAnc = "Get Instant quote"
                    packLab = "See More Features"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default RentPackage;