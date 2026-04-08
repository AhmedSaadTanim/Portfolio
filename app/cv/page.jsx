import ClickableLink from "@/components/ClickableLink";
import Section from "@/components/Section";
import React from "react";

const CV = () => {
  return (
    <Section heading="Curriculum Vitae">
      <p className="mt-4 mb-2 text-lg">
        You can download a PDF copy of my{" "}
        <ClickableLink
          linkText="CV"
          link="https://drive.google.com/file/d/1S1dtDx_U1FLnoQjIS2KAhNmStbroy187/view?usp=sharing"
        />{" "}
        here
      </p>
      <iframe
        src="https://drive.google.com/file/d/1S1dtDx_U1FLnoQjIS2KAhNmStbroy187/preview"
        className="w-full h-[calc(100dvh-20rem)] border-none"
        title="PDF Viewer"
      ></iframe>
    </Section>
  );
};

export default CV;
