import Header from "@/components/day3/Header";
import SectionFiled from "@/components/day3/Section";
import SectionFiled1 from "@/components/day3/Section1";
import Title from "@/components/day3/Title";
import React from "react";

const page = () => {
  return (
    <main>
      <Header />
      <Title title="Visuosptial / Execuite" />
      <SectionFiled1 />
      <Title title="Attention" />
      <SectionFiled  />
    </main>
  );
};

export default page;
