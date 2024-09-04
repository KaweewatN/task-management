import {getServerSession, NextAuthOptions, User, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {TEST_USER} from "@services/constants/constant";
import {AuthResponse} from "../../../../types/auth-response";
import {JWT} from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email", placeholder: "test@email.com"},
        password: {label: "Password", type: "password"},
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
      ): Promise<User | null> {
        if (!credentials) return null;

        if (TEST_USER && (await credentials.password) === TEST_USER.password) {
          return {
            id: TEST_USER.id.toString(),
            name: TEST_USER.name,
            email: TEST_USER.email,
          };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({token, user}: {token: JWT; user: User}) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({session, token}: {session: Session; token: JWT}) => {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);

export async function authenticateUser(): Promise<AuthResponse> {
  const session = await getServerAuthSession();
  if (!session) {
    throw {response: "No session found"};
  }
  return {session, response: "Session found"};
}
