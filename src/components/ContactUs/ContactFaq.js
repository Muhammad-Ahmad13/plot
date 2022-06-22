import React from 'react';
import "./ContactFaq.css";
const ContactFaq=()=> {
  return (
    <div className="faqmain">
        <div className="container">
            <h1>
                FAQ
            </h1>
            <div className="faqContent">
                <div className="accordion faqAccordionMain" id="accordionExample">
                    <div className="accordion-item faqAccordion">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Wat is plotcore?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5>
                                    Plotcore is ontstaan uit irritatie door de woningmarkt. Plotcore ondersteunt starters bij het zoeken naar een woning in de krappe
                                    woningmarkt. Uit lange analyses en veel tijd, is het ons gelukt om een digitale assistent (kunstmatige intelligentie) te
                                    ontwikkelen voor starters en woningzoekende.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item faqAccordion">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Wat heb ik er als starter aan?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5>
                                    Plotcore is ontstaan uit irritatie door de woningmarkt. Plotcore ondersteunt starters bij het zoeken naar een woning in de krappe
                                    woningmarkt. Uit lange analyses en veel tijd, is het ons gelukt om een digitale assistent (kunstmatige intelligentie) te
                                    ontwikkelen voor starters en woningzoekende.
                                </h5>
                            </div>
                        </div>
                   </div>
                   <div className="accordion-item faqAccordion">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Ik heb een verbetering/idee voor Plotcore, kan ik dit doorgeven?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h5>
                                    Plotcore is ontstaan uit irritatie door de woningmarkt. Plotcore ondersteunt starters bij het zoeken naar een woning in de krappe
                                    woningmarkt. Uit lange analyses en veel tijd, is het ons gelukt om een digitale assistent (kunstmatige intelligentie) te
                                    ontwikkelen voor starters en woningzoekende.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}
export default ContactFaq;