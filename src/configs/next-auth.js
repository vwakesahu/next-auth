import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        otp: {
          label: "OTP",
          type: "text",
          placeholder: "Enter otp",
        },
      },
      async authorize(credentials, req) {
        console.log(req.body);
        //verify the OTP
        // this user will be fetched from the database params from credentials
        const user = {
          _id: "1",
          name: "vwakesahu",
          email: "admin@example.com",
          username: "admin",
          password: "admin",
          isVerified: false,
        };
        const genaratedOTP = "123456";

        if (credentials?.otp == genaratedOTP) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(token);
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.username = token.username;
      }
      // console.log(session);
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET,
};
