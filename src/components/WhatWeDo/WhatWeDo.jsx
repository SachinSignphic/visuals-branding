import { ScrollButton } from "../";
import { Tab } from '@headlessui/react';
import { useState } from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div className="what-we-do">
        <h1 className="ff-almeria-r sec-color fs-3l">What we <span className="blk-color">do</span>.</h1>
        <div className="what-widget">
            <div className="scroll-button-container">
                <ScrollButton />
            </div>
            <div className="widget-tab">
              <Tab.Group vertical selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <Tab.List style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  justifyContent: "flex-start"
                }}>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-3s">01</span><h1 className="ff-almeria-r sec-color fs-3s">Branding</h1> </Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-3s">02</span><h1 className="ff-almeria-r sec-color fs-3s">Steam Overlay Packages</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-3s">03</span><h1 className="ff-almeria-r sec-color fs-3s">Custom Widgets</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-3s">04</span><h1 className="ff-almeria-r sec-color fs-3s">Motion Design & Animation</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-3s">05</span><h1 className="ff-almeria-r sec-color fs-3s">Emotes & Badges</h1></Tab>
                  <Tab className={"tab"} as="a"><span className="blk-color ff-almeria-r fs-3s">06</span><h1 className="ff-almeria-r sec-color fs-3s">3D Environment Creation</h1></Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className={"fs-3s ff-gillroy-u sec-color"}>
                      <span className="blk-color ff-almeria-b fs-3s">Build your identity</span> alongside our brand experts.
                        We’ll design a cohesive, one of a kind look that’s
                        inspired by your unique personality, values and
                        audience. <br /><br />
                        The <span className="blk-color ff-almeria-b fs-3s">#1</span> starting place for creators seeking a
                        professional rebrand - or building their first live-
                        streaming identity. Your <span className="blk-color ff-almeria-b fs-3s">Visuals Branding </span>kit will
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
                  <Tab.Panel className={"fs-2s blk-color"}>Content 6</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo