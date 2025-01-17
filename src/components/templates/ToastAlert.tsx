import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastifyProps {
  message: string;
  msgType?: string;
}

const ToastAlert: React.FC<ToastifyProps> = ({ message, msgType }) => {
  useEffect(() => {
    toast(message, { autoClose: 5000 });
  }, []);

  return (
    <div>
      <ToastContainer  theme="light" position="top-center" rtl={true} pauseOnHover />
    </div>
  );
};

export default ToastAlert;
