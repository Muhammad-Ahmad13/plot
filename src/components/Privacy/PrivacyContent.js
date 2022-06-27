import React from 'react';
import { Link } from 'react-router-dom';
import "./PrivacyContent.css";
import PrivacyHead from './PrivacyHead';
import PrivacyPara from './PrivacyPara';
const PrivacyContent = ()=> {
  return (
    <>
    <div className="container">
    <div className="pcontentmain">
        <h2>
            Privacy- en cookieverklaring
        </h2>
        <PrivacyPara
        Privpara="Via onze webwinkel worden privacygevoelige gegevens oftewel persoonsgegevens verwerkt. Winnaars en Winst acht een zorgvuldige
        omgang met persoonsgegevens van groot belang. Persoonlijke gegevens worden door ons dan ook zorgvuldig verwerkt en beveiligd."/>
        <PrivacyPara
        Privpara="Bij onze verwerking houden wij ons aan de eisen die de privacywetgeving stelt. Dat betekent onder andere dat wij:"/>
        <div className="privacylist">
            <ul>
                <li>
                    Onze doeleinden duidelijk specificeren voordat wij persoonsgegevens verwerken, via deze privacyverklaring;
                </li>
                <li>
                    Onze verzameling van persoonsgegevens beperken tot alleen de persoonsgegevens die nodig zijn voor legitieme doeleinden;
                </li>
                <li>
                    U eerst expliciet toestemming vragen om uw persoonsgegevens te verwerken in gevallen waarin uw toestemming is vereist;
                </li>
                <li>
                    Passende beveiligingsmaatregelen nemen om uw persoonsgegevens te beschermen en dat ook eisen van partijen die in onze opdracht persoonsgegevens verwerken;
                </li>
                <li>
                    Uw recht respecteren om uw persoonsgegevens op uw aanvraag ter inzage te bieden, te corrigeren of te verwijderen.
                </li>
            </ul>
        </div>
        <div className="linkPara">
            <p>
                Winnaars en Winst is de verantwoordelijke voor de gegevensverwerking. In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen en
                gebruiken en met welk doel bij de webwinkel <Link to="/">www.plotcore.com.</Link> Wij raden u aan deze zorgvuldig te lezen.
            </p>
        </div>
        <PrivacyPara
        Privpara="Als u vragen heeft, of wilt weten wat we precies van u bijhouden, neem dan contact op met Winnaars en Winst"/>
        <div className="pheadPara">
            <PrivacyHead
            PrivHead="Afhandelen bestelling"/>
            <PrivacyPara Privpara="Wanneer u bij ons een bestelling plaatst, gebruiken wij uw persoonsgegevens om deze netjes af te kunnen handelen. Wij mogen uw 
            persoonsgegevens dan aan onze bezorgdienst geven om de bestelling bij u te laten bezorgen. Ook krijgen wij informatie over uw betaling van uw bank of
            creditcardmaatschappij."/>
            <PrivacyPara Privpara="Hiervoor gebruiken wij uw e-mailadres en ip-adres. Hier hebben wij een legitiem belang bij. Wij bewaren deze informatie tot uw
            bestelling is afgerond. Bepaalde klantgegevens bewaren wij langer in verband met de wettelijke fiscale bewaarplicht."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
            PrivHead="Verstrekken aan derden"/>
            <PrivacyPara Privpara="WWij werken met bepaalde bedrijven samen, die uw hierboven genoemde persoonsgegevens van ons kunnen ontvangen."/>
            <PrivacyPara Privpara="Voor het afhandelen van de bestellingen werken wij samen met:"
            />
            <div className="privacylist">
            <ul>
                <li>
                    Onze betalingsprovider Stripe, Inc. (gevestigd buiten de EU)
                </li>
            </ul>
        </div>
        </div>
        <div className="pheadPara">
            <PrivacyHead
            PrivHead="Uw account"/>
            <PrivacyPara Privpara="Bij bepaalde onderdelen van onze webwinkel moet u zich eerst registreren. U moet dan informatie over uzelf opgeven en een gebruikersnaam
             kiezen. Daarmee maken wij een account, waarop u kunt inloggen met die gebruikersnaam en een zelfgekozen wachtwoord."/>
            <PrivacyPara Privpara="Hiervoor gebruiken wij uw e-mailadres. Hier hebben wij een legitiem belang bij. Wij bewaren deze informatie tot u het account opheft."/>
            <PrivacyPara Privpara="Wij bewaren deze informatie zodat u ze niet steeds opnieuw in hoeft te vullen en zodat wij u kunnen contacteren in het kader van uitvoering van de overeenkomst.
             U kunt via uw account informatie aanpassen wanneer u dat wilt."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
            PrivHead="Verstrekken aan derden"/>
            <PrivacyPara Privpara="Wij werken met bepaalde bedrijven samen, die uw hierboven genoemde persoonsgegevens van ons kunnen ontvangen."/>
            <PrivacyPara Privpara="Van deze partijen zijn Segment, Intercom en Mixpanel gevestigd buiten de EU."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Contactformulier en Nieuwsbrief"/>
            <PrivacyPara Privpara="Met het contactformulier kunt u ons vragen stellen of aanvragen doen."/>
            <PrivacyPara Privpara="Hiervoor gebruiken wij uw e-mailadres. Dit doen wij op basis van uw toestemming. Wij bewaren deze informatie totdat we
             zeker weten dat u tevreden bent met onze reactie."/>
            <PrivacyPara Privpara="Wij bieden een nieuwsbrief waarmee wij geïnteresseerden willen informeren over onze producten en/of diensten.
             Iedere nieuwsbrief bevat een link waarmee u zich kunt afmelden."/>
            <PrivacyPara Privpara="Via uw account kunt u dit ook doorgeven."/>
            <PrivacyPara Privpara="Uw e-mailadres wordt alleen met uw toestemming toegevoegd aan de lijst van abonnees. Deze gegevens worden bewaard totdat u het abonnement opzegt."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
            PrivHead="Verstrekken aan derden"/>
            <PrivacyPara Privpara="Wij werken met bepaalde bedrijven samen, die uw hierboven genoemde persoonsgegevens van ons kunnen ontvangen."/>
            <PrivacyPara Privpara="Van deze partijen zijn Segment, Intercom en Mixpanel gevestigd buiten de EU."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Locatiegegevens"/>
            <PrivacyPara Privpara="Als dat nodig is voor de dienst, kunnen wij locatiegegevens (GPS) van u verzamelen. Hiervoor wordt op het moment zelf uw toestemming gevraagd."/>
            <PrivacyPara Privpara="Tevens kunnen deze (locatie) gegevens opgeslagen en verwerkt worden door de aanbieder van bijvoorbeeld de navigatie/kaartensoftware, zoals
             Google Maps of Mapbox, maar de gegevens kunnen ook worden gebruikt door bijvoorbeeld Google of Apple zelf. Daar hebben wij geen controle over. Lees dus 
             altijd ook de privacyverklaringen van de desbetreffende aanbieder."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Advertenties"/>
            <PrivacyPara Privpara="Onze webwinkel vertoont advertenties.Deze publiceren wij niet zelf, dat doen advertentiebureaus waarmee wij samenwerken. Deze bureaus houden bij of u ze leuk vindt,
             en gebruiken die informatie om in de toekomst alleen nog maar leuke of interessante advertenties en aanbiedingen te doen."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Verstrekking aan andere bedrijven of instellingen"/>
            <PrivacyPara Privpara="Met uitzondering van de hierboven genoemde partners, geven wij uw persoonsgegevens onder geen voorwaarde aan andere bedrijven of instellingen, behalve als wij dat
             wettelijk verplicht zijn (bijvoorbeeld als de politie dat eist bij een vermoeden van een misdrijf)."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Statistieken"/>
            <PrivacyPara Privpara="Wij houden statistieken bij over het gebruik van onze webwinkel"/>
            <PrivacyPara Privpara="In onze webwinkel zijn social media buttons opgenomen. Hiermee verzamelen de beheerders van deze diensten uw persoonsgegevens."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Cookies"/>
            <PrivacyPara Privpara="Onze webwinkel gebruikt cookies. Cookies zijn kleine bestandjes waar we informatie in kunnen opslaan zodat u die niet steeds hoeft in te
             vullen. Maar we kunnen er ook mee zien dat u ons weer bezoekt."/>
            <PrivacyPara Privpara="Wanneer u onze webwinkel voor het eerst bezoekt, tonen wij een melding met uitleg over cookies. Hierbij zullen we vragen om uw akkoord 
            voor het gebruik van deze cookies."/>
            <PrivacyPara Privpara="U kunt via uw browser het plaatsen van cookies uitschakelen, maar sommige dingen van onze webwinkel werken dan niet goed meer."/>
            <PrivacyPara Privpara="Met andere bedrijven die cookies plaatsen hebben wij afspraken gemaakt over het gebruik van de cookies. Toch hebben wij geen volledige controle
             op wat zij zelf met de cookies doen. Lees dus ook hun privacyverklaringen. (Let op: deze kunnen regelmatig wijzigen)"/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Google Analytics"/>
            <PrivacyPara Privpara="Wij gebruiken Google Analytics om bij te houden hoe bezoekers onze webwinkel gebruiken. Wij hebben een verwerkersovereenkomst met
             Google gesloten. Daarin staan strikte afspraken te maken over wat zij mogen bijhouden. Wij hebben Google niet toegestaan de verkregen Analytics
              informatie te gebruiken voor andere Google diensten. Wij laten Google de IP-adressen anonimiseren."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Beveiliging"/>
            <PrivacyPara Privpara="Beveiliging van persoonsgegevens is voor ons van groot belang. Om uw privacy te beschermen, nemen wij de volgende maatregelen:"/>
            <div className="privacylist">
            <ul>
                <li>
                Toegang tot persoonsgegevens wordt afgeschermd met een gebruikersnaam en wachtwoord;
                </li>
                <li>
                Toegang tot persoonsgegevens wordt afgeschermd met een gebruikersnaam en een login token;
                </li>
                <li>
                Wij nemen fysieke maatregelen zoals sloten en kluizen voor toegangsbescherming van de systemen waarin persoonsgegevens opslagen zijn;
                </li>
                <li>
                Wij maken gebruik van beveiligde verbindingen (Secure Sockets Layer of SSL) waarmee alle informatie tussen u en onze website wordt afgeschermd wanneer uw persoonsgegevens invoert;
                </li>
                <li>
                    Wij houden logs bij van alle opvragingen van persoonsgegevens.
                </li>
            </ul>
        </div>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Wijzigingen in deze privacyverklaring"/>
            <PrivacyPara Privpara="ij behouden ons het recht voor om wijzigingen aan te brengen in deze privacyverklaring. Het verdient aanbeveling om deze privacyverklaring
             geregeld te raadplegen, zodat u van deze wijzigingen op de hoogte bent. Wij zullen ons best doen wijzigingen ook apart aan te kondigen."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Inzage, wijzigen en verwijderen van uw gegevens"/>
            <PrivacyPara Privpara="Als u vragen hebt of wilt weten welke persoonsgegevens wij van u hebben, kunt u altijd contact met ons opnemen. Zie de contactgegevens hieronder."/>
            <PrivacyPara Privpara="U hebt de volgende rechten:"/>
            <div className="privacylist">
            <ul>
                <li>
                    Uitleg krijgen over welke persoonsgegevens we hebben en wat we daarmee doen;
                </li>
                <li>
                    Inzage in de precieze persoonsgegevens die we hebben het laten corrigeren van fouten;
                </li>
                <li>
                    Het laten verwijderen van verouderde persoonsgegevens;
                </li>
                <li>
                    Intrekken van toestemming;
                </li>
                <li>
                    Bezwaar maken tegen een bepaald gebruik.
                </li>
            </ul>
        </div>
        <PrivacyPara Privpara="Let op dat u altijd duidelijk aangeeft wie u bent, zodat we zeker weten dat we geen gegevens van de verkeerde persoon aanpassen of verwijderen."/>
        </div>
        <div className="pheadPara">
            <PrivacyHead
             PrivHead="Klacht indienen"/>
            <PrivacyPara Privpara="Als u vindt dat wij u niet op de juiste manier helpen, dan heeft u het recht om een klacht in te dienen bij de toezichthouder. Deze heet de Autoriteit Persoonsgegevens."/>
        </div>
        <div className="pheadfoot">
            <PrivacyHead
             PrivHead="Contactgegevens"/>
            <span >Winnaars en Winst</span>
            <span >Boompjes 40</span>
            <span >3011 XB Rotterdam</span>
            <Link to="mailto:info@plotcore.com">info@plotcore.com</Link>
        </div>
    </div>
    </div>
    </>
  );
}
export default PrivacyContent;