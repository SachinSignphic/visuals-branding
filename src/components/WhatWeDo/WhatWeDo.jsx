import { ScrollButton } from "../";
import { Tab } from '@headlessui/react';
import { useState } from "react";
import "./WhatWeDo.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import accordianData from "../../assets/accodianData";

// eslint-disable-next-line react/prop-types
const WhatWeDo = ({scrollTo}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="what-we-do" id="what-we-do">
        <h1 className="ff-almeria-r sec-color">What we <span className="blk-color">do</span>.</h1>
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
                  {/* <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-2m">02</span><h1 className="ff-almeria-r sec-color">Steam Overlay Packages</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-2m">03</span><h1 className="ff-almeria-r sec-color">Custom Widgets</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-2m">04</span><h1 className="ff-almeria-r sec-color">Motion Design & Animation</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-2m">05</span><h1 className="ff-almeria-r sec-color">Emotes & Badges</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-2m">06</span><h1 className="ff-almeria-r sec-color">3D Environment Creation</h1></Tab> */}
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
                  {/* <Tab.Panel className={"ff-gillroy-u sec-color widget-content"}>
                      <span className="blk-color ff-almeria-b">Build your identity</span> alongside our brand experts.
                        We’ll design a cohesive, one of a kind look that’s
                        inspired by your unique personality, values and
                        audience. <br /><br />
                        The <span className="blk-color ff-almeria-b">#1</span> starting place for creators seeking a
                        professional rebrand - or building their first live-
                        streaming identity. Your <span className="blk-color ff-almeria-b">Visuals Branding </span>kit will
                        include :<br /><br />
                        Logo Design<br />
                        Color palette creation<br />
                        Typography selection<br />
                        Brand guidelines, including logo usage & visual
                        language
                  </Tab.Panel>
                  <Tab.Panel className={"fs-2s blk-color"}>Content 2</Tab.Panel>
                  <Tab.Panel className={"fs-2s blk-color"}>Content 3</Tab.Panel>
                  <Tab.Panel className={"fs-2s blk-color"}>Content 4</Tab.Panel>
                  <Tab.Panel className={"fs-2s blk-color"}>Content 5</Tab.Panel>
                  <Tab.Panel className={"fs-2s blk-color"}>Content 6</Tab.Panel> */}
                </Tab.Panels>
              </Tab.Group>
            </div>
        </div>
        <Accordion className="accordian-mobile">
            {
              accordianData.map( ({header, content}, i) => {
                return (
                  <AccordionItem header={header} key={i}>
                    {content}
                  </AccordionItem>
                );
                })
            }
        </Accordion>
    </div>
  )
}

export default WhatWeDo;