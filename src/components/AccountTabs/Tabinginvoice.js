import React from 'react';
import "./Tabinginvoice.css";
const Tabinginvoice = () => {
  return (
    <div className="tinvoicemain">
        <h4>
            Billing History
        </h4>
        {/* <div style={{overflowX:"scroll"}}> */}
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Invoice No.</th>
                    <th>Product</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
                <tr>
                    <td>May 20, 2022</td>
                    <td>121-1212- 1314</td>
                    <td>1 x   Plot core Plus (at € 3.237 per month) </td>
                    <td>€ 2.203</td>
                </tr>
            </tbody>
        </table>
        {/* </div> */}

    </div>
  );
}
export default Tabinginvoice;