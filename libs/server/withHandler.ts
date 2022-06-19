import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(method:"GET"|"POST"|"DELETE", fn:(req:NextApiRequest, res:NextApiResponse) => void) {
    return async function(req:NextApiRequest, res:NextApiResponse) {
        if(req.method !== method) {
            // 405 is bad request
            return res.status(405).end();
        }

        try {
            await fn(req, res);
        }
        catch(error) {
            console.log(error);
            // 500 is server error
            return res.status(500).json({ error });
        }

    }
}