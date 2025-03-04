import React from "react";
import Header3 from "../Header3";

function ProcessParagraph() {
  const topline1 = "";
  const topline2 = "";
  const bottomline1 = "";
  const bottomline2 = "";
  const bottomline3 = "";
  return (
    <section className="my-[15vh]">
      <div className="w-[90%] mx-auto md:ml-auto md:mr-0">
        <div className="flex items-start gap-[8vw]">
     
          <div>
            <Header3 phrase={topline1} />
            <Header3 phrase={topline2} />
          </div>
        </div>
        <div>
          <Header3 phrase={bottomline1} />
          <Header3 phrase={bottomline2} />
          <Header3 phrase={bottomline3} />
        </div>
      </div>
    </section>
  );
}

export default ProcessParagraph;
