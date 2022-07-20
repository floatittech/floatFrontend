import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { JwtUtils, UrlUtils } from "../../../constants/Utils";

namespace NextAuthUtils {
  export const refreshToken = async function (refreshToken: unknown) {
    try {
      
      const response = await axios.post(
        // "http://localhost:8000/api/auth/token/refresh/",
        UrlUtils.makeUrl(
          process.env.BACKEND_API_BASE,
          "api",
          "auth",
          "token",
          "refresh",
        ),
        {
          refresh: refreshToken,
        },
      );
        // console.log(response.data, " ye akki refresh ka h");
        
      const { access, refresh } = response.data;
      // still within this block, return true
      return [access, refresh];
    } catch {
      return [null, null];
    }
  };
}



export const authOptions: NextAuthOptions = {
  // debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // maxAge: 120,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      
      
      if (user) {
        console.log(user, "akki user");
        console.log(account, "akki account");
        console.log(token, "akki token");
        const { access_token, id_token } = account;
        const g_access_token = access_token
        const g_id_token = id_token
        try {
          const response = await axios.post(
            UrlUtils.makeUrl(
            process.env.BACKEND_API_BASE,
            "api",
            "social",
            "login",
            "google",
          ),
            {
              access_token: g_access_token,
              id_token: g_id_token,
            }
          );
          console.log(response.data, "-- ye axios ne resp diya h -- ");
          const { access_token, refresh_token, user } = response.data;
          // console.log(token, "-----token me kay h before----");
          token = {
            ...token,
            accessToken: access_token,
            refreshToken: refresh_token,
            role : user.role,
          };
          return token;
        } catch (error) {
          return null;
        }
      }
      // console.log(token, "-----session wala token h---");

      //Below If For checking the need of Refreshing The Token
      if (JwtUtils.isJwtExpired(token.accessToken as string)) {
        const [newAccessToken, newRefreshToken] = await NextAuthUtils.refreshToken(token.refreshToken);
        if (newAccessToken && newRefreshToken) {
          token = {
            ...token,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000 + 2 * 60 * 60),
          };
          //console.log(token, " ye freseh ke baad ---");
          
          return token;
        }
        // unable to refresh tokens from DRF backend, invalidate the token
        return {
          ...token,
          exp: 0,
        };
      }

      // token Valid
      return token;
    },

    async session({ session, token, user}) {
      session.accessToken = token.accessToken
      session.role = token.role
      //session.userId = token.
      return session
    }
  }

};

export default function (req: NextApiRequest, res: NextApiResponse) {
  NextAuth(req, res, authOptions);
}