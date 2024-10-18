"use client";
import Header from "@/components/day3/Header";
import SectionFiled from "@/components/day3/SectionFiled";
import SectionCheckbox from "@/components/day3/SectionCheckbox";
import Title from "@/components/day3/Title";
import React from "react";
import SectionCheckboxnoTitle from "@/components/day3/SectionCheckboxnoTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  memoryData,
  memoryData1,
  memoryData2,
  QuestionDataS1,
  QuestionDataS2,
  QuestionDataS3,
  QuestionDataS4,
  QuestionDataS5,
} from "@/constant/QuestionData";
// Define the form data types
interface FormData {
  visuospatial: any;
  naming: any;
  memory: any;
  attention: any;
  language: any;
  abstraction: any;
  delayedRecall: any;
  orientation: any;
}

const Page: React.FC = () => {
  // Initialize react-hook-form
  const { register, handleSubmit } = useForm<FormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted Data:", JSON.stringify(data, null, 2));
  };

  return (
    <main>
      <Header
        onSaveClick={() => {
          handleSubmit(onSubmit)(); // Call handleSubmit directly
        }}
      />

      <form
        onSubmit={handleSubmit(onSubmit)} // Call onSubmit when form is submitted
      >
        {/* Form fields */}
        <Title title="Visuosptial / Executive" />
        <SectionFiled
          width="w-1/3"
          height="h-58"
          indexNo={2}
          questionData={QuestionDataS1}
          register={register}
          sectionKey="visuospatial"
        />

        <Title title="Naming" />
        <SectionFiled
          width="w-1/3"
          height="h-40"
          indexNo={2}
          questionData={QuestionDataS2}
          register={register}
          sectionKey="naming"
        />

        <Title title="Memory" />
        <SectionCheckbox
          {...memoryData}
          register={register}
          sectionKey="memory"
        />

        <Title title="Attention" />
        <SectionFiled
          width="w-1/2"
          height="h-48"
          indexNo={3}
          questionData={QuestionDataS3}
          register={register}
          sectionKey="attention"
        />
        <Title title="Language" />
        <SectionFiled
          width="w-1/2"
          height="h-48"
          indexNo={3}
          questionData={QuestionDataS4}
          register={register}
          sectionKey="language"
        />
        <Title title="Abstraction" />
        <SectionFiled
          width="w-1/2"
          height="h-48"
          indexNo={3}
          questionData={QuestionDataS5}
          register={register}
          sectionKey="abstraction"
        />
        <Title title="Delayed recall" />
        <SectionCheckbox
          {...memoryData1}
          register={register}
          sectionKey="delayedRecall"
        />
        <Title title="Orientation" />
        <SectionCheckboxnoTitle
          {...memoryData2}
          register={register}
          sectionKey="orientation"
        />
      </form>
    </main>
  );
};

export default Page;
