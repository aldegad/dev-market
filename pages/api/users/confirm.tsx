import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";

async function handler(req:NextApiRequest, res:NextApiResponse<ResponseType>) {
  const { token } = req.body;
  
  return res.status(200).end();
}
export default withHandler("POST", handler)