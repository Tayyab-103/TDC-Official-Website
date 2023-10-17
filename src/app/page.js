import * as React from "react";
import Herosection from "./_components/Herosection";
import TabSection from "./_components/TabSection";
import ContactUs from "./_home/contact-us";
import Review from "./_home/review";
import AutoSlider from "./_components/slider";
import ContractingModels from "./_components/contractingModels";
import ConnectUs from "./_components/ConnectUs";
import Providedservices from "./_components/Providedservices";
import Aboutussection from "./_components/Aboutussection";

export default function HomePage() {
  return (
    <>
      <Herosection />
      <TabSection />
      <Providedservices />
      <Aboutussection />
      <AutoSlider />
      <br />
      <ContractingModels />
      <Review />
      <ContactUs />
      <ConnectUs />
    </>
  );
}
