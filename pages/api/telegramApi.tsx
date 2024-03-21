import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { message } = req.body;
    const botToken = "";
    const chatID = "";

    const response = await axios.get(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${message}`
    );

    if (response.status === 200) {
      res.status(200).json({ status: "Message sent" });
    } else {
      res.status(500).json({ status: "Error sending message" });
    }
  } else {
    res.status(405).json({ status: "Method not allowed" });
  }
}
