import { ScrollButton } from "../";
import { Tab } from '@headlessui/react';
import { useState } from "react";
import "./WhatWeDo.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import accordianData from "../../assets/accodianData";
import chevronsDown from "/chevrons-down.svg";

// eslint-disable-next-line react/prop-types
const WhatWeDo = ({scrollTo}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="what-we-do" id="what-we-do">
        <h1 className="ff-almeria-r sec-color what-title">What we <span className="blk-color">do</span>.</h1>
        <div className="what-widget">
            <div className="scroll-button-container">
                <ScrollButton scrollTo={scrollTo} style={{marginRight: "2.5rem"}} />
            </div>
            <div className="widget-tab">
              <Tab.Group vertical selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <Tab.List style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }} className="tab-group">
                  {
                    accordianData.map( (title, i) => {
                      return(
                        <Tab key={i} className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-2m">{"0" + i}</span><h1 className="ff-almeria-r sec-color">{title.header}</h1> </Tab>
                      );
                    })
                  }
                </Tab.List>
                <Tab.Panels>
                {
                    accordianData.map( (contents, i) => {
                      return(
                        <Tab.Panel key={i} className={"ff-gillroy-u sec-color widget-content"}>
                          {contents.content}
                        </Tab.Panel>
                      );
                    })
                  }
                </Tab.Panels>
              </Tab.Group>
            </div>
        </div>
        <Accordion transition className="accordian-mobile">
            {
              accordianData.map( ({header, content}, i) => {
                return (
                  <AccordionItem header={
                    <h2 className="ff-almeria-r" style={{width: "100%", position: "relative"}}>
                      <span className="blk-color" style={{marginRight: "1rem"}}>{'0'+`${i + 1}`}</span>
                      {header}
                      <img src={chevronsDown} alt="" style={{position: "absolute", right: "0", filter: "invert(1)"}}/>
                    </h2>
                  } key={i}>
                    <div className='ff-gillroy-u sec-color widget-content'>
                    {content}
                    </div>
                  </AccordionItem>
                );
                })
            }
        </Accordion>
        <div className="scroll-button-container">
                <ScrollButton scrollTo={scrollTo} />
        </div>
    </div>
  )
}

export default WhatWeDo;