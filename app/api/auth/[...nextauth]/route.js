import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from '../../../../models/user'
import {connectToDB} from "../../../../utils/database"

console.log({
    clientId:process.env.GOOGLE_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET
})

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){

    },
    async signIn({profile}){
        try{
            await connectToDB();
            

            return true;


        }catch(error){
            console.log("Error!!!####",error)
        }

    }
})

export {handler as GET, handler as POST};