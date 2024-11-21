import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import Google from "next-auth/providers/google"


const users = [
  {
    name: "Ande", 
email: "kdpolygraphy@email.com",
password: "qwerty123",
image: ""
},
{
  name: "Pepe", 
  email: "email@email.com",
  password: "qwerty123",
  image: ""
  }
]
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
              params: {
                prompt: "select_account", // Это заставит Google показывать выбор аккаунта при каждом входе
              },
            },
          }),
          Credentials({
            credentials: {
              email: {label: 'email', type: 'email', required: true},
              password: {label: 'password', type: 'password', required: true}
            },
            async authorize(credentials) {
              if(!credentials?.email || !credentials?.password) return null
console.log(users);

              const currentUser = users.find(user => user.email === credentials.email)

              if(currentUser && currentUser.password === credentials.password) {
            // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
              const { password, ...userWithoutPass } = currentUser;

                return userWithoutPass 
              }

              return null
            }

          })
         
  ],
  pages: {
    signIn: '/signin',
  }
}

export default NextAuth(authOptions)