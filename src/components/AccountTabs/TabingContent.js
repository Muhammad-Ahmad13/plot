import React from 'react';
import TabingEdit from './TabingEdit';
import Tabinginvoice from './Tabinginvoice';
import Tabingpass from './Tabingpass';
import TabingService from './TabingService';
import "./TabingContent.css";
const TabingContent = () => {
  return (
    <div className="tcontentmain">
        <h4>
            Account Overview 
        </h4>
        <ul class="nav nav-pills pills-direction mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-edit-tab" data-bs-toggle="pill" data-bs-target="#pills-edit" type="button" role="tab" aria-controls="pills-edit" aria-selected="true">Edit Profile</button>
            </li>
            <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-service-tab" data-bs-toggle="pill" data-bs-target="#pills-service" type="button" role="tab" aria-controls="pills-service" aria-selected="false">Services</button>
            </li>
            <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-invoice-tab" data-bs-toggle="pill" data-bs-target="#pills-invoice" type="button" role="tab" aria-controls="pills-invoice" aria-selected="false">Invoices</button>
            </li>
            <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-pass-tab" data-bs-toggle="pill" data-bs-target="#pills-pass" type="button" role="tab" aria-controls="pills-pass" aria-selected="false">Change your Password</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active " id="pills-edit" role="tabpanel" aria-labelledby="pills-edit-tab">
                <TabingEdit/>
            </div>
            <div class="tab-pane fade" id="pills-service" role="tabpanel" aria-labelledby="pills-service-tab">
                <TabingService/>
            </div>
            <div class="tab-pane fade" id="pills-invoice" role="tabpanel" aria-labelledby="pills-invoice-tab">
                <Tabinginvoice/>
            </div>
            <div class="tab-pane fade" id="pills-pass" role="tabpanel" aria-labelledby="pills-pass-tab">
                <Tabingpass/>
            </div>
        </div>
    </div>
  );
}
export default TabingContent;