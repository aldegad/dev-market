import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";

async function handler(req:NextApiRequest, res:NextApiResponse) {
    console.log("🚗 Get Data", req.body);
    return res.json({ ok: true });
}

export default withHandler("POST", handler)