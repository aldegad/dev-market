import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number
    }
  }
}

const cookieOptions = {
  cookieName: "dev_market_sesson",
  password: process.env.COOKIE_PASSWORD!
}

export function withApiSession(fn:any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}