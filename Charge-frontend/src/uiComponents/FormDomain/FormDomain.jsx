import React, { useState } from "react";
import "./FormDomain.css";
import FormInfo from "../../assets/form-info.svg";

import Domains from "../Modal/Domains";
import { toastError } from "../../utils/userHelperFuncs";

const FormComp2 = ({ domains, setDomains, coreDomains, setCoreDomains }) => {
  const [showInstr, setShowInstr] = useState(false);
  const [domainsCount, setDomainsCount] = useState(0);


  const [info, setInfo] = useState([
    { domain: "CHADEMO", core: 1, selected: false },
    { domain: "CCS", core: 1, selected: false },
    { domain: "TYPE 1", core: 1, selected: false },
    { domain: "TYPE 2", core: 1, selected: false },    
  ]);

  const handleClick = (card) => {
    // get coreDomain as string
    const coreValue = card.core === 0 ? "Management" : "TechDesign";
    setInfo(
      info.map((item) => {
        // get selected card
        if (item.domain === card.domain) {
          // can select or deselect
          if (
            domainsCount < 1 ||
            (domainsCount === 1 && domains.includes(item.domain))
          ) {
            // switch selected
            item.selected = !item.selected;

            // add to domains if not present
            if (!domains.includes(item.domain)) {
              setDomains([...domains, item.domain]);
            }
            // else remove from domains
            else if (domains.includes(item.domain)) {
              setDomains(domains.filter((domain) => domain !== item.domain));
            }
            // add to coreDomains if not present
            if (!coreDomains.includes(coreValue)) {
              setCoreDomains([...coreDomains, coreValue]);

            }
            // else remove from coreDomains
            else if (coreDomains.includes(coreValue)) {
              setCoreDomains(coreDomains.filter((core) => core !== coreValue));
            }
            // update domainsCount
            item.selected
              ? setDomainsCount(domainsCount + 1)
              : setDomainsCount(domainsCount - 1);
          }

          // can't select or deselect
          else {
            toastError("You can only select 1 technology");
          }
        }
        return item;
      })
    );
  };

  const Cards = () => {
    return info.map((card) => {
      return (
        <div
          className={`domain-container ${
            card.selected ? "selected-domain" : ""
          }`}
          onClick={() => {
            handleClick(card);
          }}
        >
          {card.domain}
        </div>
      );
    });
  };

  return (
    <div id="comp2-container">
      <div className="comp2-head">
        <h3>
          3. Choose your charging technology 
          <span style={{ color: "red" }}>*</span>
        </h3>
        <img
          src={FormInfo}
          alt=""
          className="form-info cursor-pointer"
          onClick={() => {
            setShowInstr(true);
          }}
        />
      </div>
      {!showInstr ? null : (
        <Domains setShowInstr={setShowInstr} showInstr={showInstr} />
      )}
      <div id="domains-container">{Cards()}</div>
    </div>
  );
};

export default FormComp2;
