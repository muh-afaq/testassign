import React, { useState } from "react";

interface TrialSectionProps {
  trialNumber: string;
  initialValues: boolean[]; // Changed prop name to initialValues for clarity
}

const TrialSection: React.FC<TrialSectionProps> = ({ trialNumber, initialValues }) => {
  const [values, setValues] = useState<boolean[]>(initialValues);

  const handleCheckboxChange = (index: number) => {
    setValues(prevValues =>
      prevValues.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <tr>
      <td className="p-2 border">{trialNumber}</td>
      {values.map((value, index) => (
        <td key={index} className="p-2 border">
          <input
            type="checkbox"
            checked={value}
            onChange={() => handleCheckboxChange(index)}
          />
          <span className="ml-2 flex-row">{value ? "Yes" : "No"}</span>
        </td>
      ))}
    </tr>
  );
};

export default TrialSection;
