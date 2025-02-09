// pages/api/get-ip.ts
import GetIpAddress from '@/models/IP';
import ConnectDB from '@/utils/ConnectDB';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';



export async function GET(req : Request) {
    try {
      await ConnectDB();

      const url = 'https://api.ipify.org?format=json';

      const data = await axios.get(url)

      let ipData = data?.data?.ip
  
      const newGetIp = await GetIpAddress.create({
        IP: ipData
      });

      console.log(newGetIp, 'new get ippppppppppppppppp')
  
      return NextResponse.json({
        status: "success",
        message: `آی پی شما با موفقیت دریافت شد`,
      });
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: " مشکلی در سرور رخ داده است " },
        { status: 500 }
      );
    }
  }
  