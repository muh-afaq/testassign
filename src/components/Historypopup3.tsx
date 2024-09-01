import React from "react";
import { IoClose } from "react-icons/io5";

interface HistoryPopupProps {
  onClose: () => void;
  title: string;
}

const Historypopup3: React.FC<HistoryPopupProps> = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <IoClose className=" text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Historypopup3;
