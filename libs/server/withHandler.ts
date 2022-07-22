import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface ConfigType {
  method: "GET" | "POST" | "DELETE",
  handler:(req:NextApiRequest, res:NextApiResponse) => void,
  isPrivate?: boolean
}

export default function withHandler({
  method,
  handler,
  isPrivate = true
}:ConfigType) {
  return async function(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== method) {
      // 405 is bad request
      return res.status(405).end();
    }
    if(isPrivate && !req.session.user) {
      // 인증실패 401
      return res.status(401).json({ ok: false, error: "Plz, login" })
    }

    try {
      console.log("⭐️ Got Data", req.body);
      await handler(req, res);
    }
    catch(error) {
      console.log(error);
      // 500 is server error
      return res.status(500).json({ error });
    }

  }
}