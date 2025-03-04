import React from "react";
import Header3 from "../Header3";

function AboutMe() {
  const line1 = "I'm Fadhilah Nurhidayah"
  const line2 = "I provide data science services"
  const line3 = "by transforming raw data into"
  const line4 = "valuable insights"
  const line5 = "through data analysis,"
  const line6 = "machine learning, and predictive"
  const line7 = "modeling to help businesses"
  const line8 = "make data-driven decisions."

  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className={`text-[14px] md:text-[18px]`}>
          About me
        </p>
        <div className="flex-1">
          <Header3 phrase={line1} className="indent-[10%]"/>
          <Header3 phrase={line2}/>
          <Header3 phrase={line3}/>
          <Header3 phrase={line4}/>
          <Header3 phrase={line5}/>
          <Header3 phrase={line6}/>
          <Header3 phrase={line7}/>
          <Header3 phrase={line8}/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
