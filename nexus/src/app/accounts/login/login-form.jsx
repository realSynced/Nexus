import Link from "next/link";
import { providers, signIn, getSession, csrfToken } from "next-auth";

// Create your own next-auth Login Pages : https://www.youtube.com/watch?v=kB6YNYZ63fw
// Next-Auth Login Authentication Tutorial with Next.js App Directory: https://www.youtube.com/watch?v=w2h54xz6Ndw
// My Login Authentication & User Registration Setup for React & Next.js | Kinde Auth : https://www.youtube.com/watch?v=WtHQGlKGUrU&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=22
// NextJS Authentication Crash Course with NextAuth.js : https://www.youtube.com/watch?v=o_wZIVmWteQ

export default function LoginForm({ providers, csrfToken }) {
  const handleLogin = () => {
    alert("Hello");
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginForm.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accesstoken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    // csrfToken: await csrfToken(context)
  };
};
