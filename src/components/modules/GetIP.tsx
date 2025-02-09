"use client";

import axios from "axios";
// pages/get-ip.tsx
import React, { useEffect, useState } from "react";

const GetIP: React.FC = () => {
  const [ip, setIP] = useState<string>("");

  async function GetIP() {
    const data = await axios
      .get('/api/get-ip')
      .then((res) => {
        setIP(res.data)
        console.log(res)
        // alert(res?.data?.message)
      } )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    GetIP();
  }, []);

  return (
    <div>
    </div>
  );
};

export default GetIP;
