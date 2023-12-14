import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

 export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize (credentials) {
                const {username, password } = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({username});
                    //check if usernames match
                    if (!user) {
                        return null;
                    }
                    //check if passwords match
                    const passMatch = await bcrypt.compare(password, user.password);
                    if (!passMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };