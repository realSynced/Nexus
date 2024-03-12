import Link from "next/link";
import {providers, signIn, getSession, csrfToken} from "next-auth"

// Create your own next-auth Login Pages : https://www.youtube.com/watch?v=kB6YNYZ63fw
// Next-Auth Login Authentication Tutorial with Next.js App Directory: https://www.youtube.com/watch?v=w2h54xz6Ndw
// My Login Authentication & User Registration Setup for React & Next.js | Kinde Auth : https://www.youtube.com/watch?v=WtHQGlKGUrU&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=22
// NextJS Authentication Crash Course with NextAuth.js : https://www.youtube.com/watch?v=o_wZIVmWteQ


export default function LoginForm({providers, csrfToken}) {
    const handleLogin = () => {
        alert("Hello");
      };
    return (

        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
              <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" defaultChecked />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
              </div>
              <Link href="/accounts/signup" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</Link>
            </div>
            <button type="submit" onClick={handleLogin} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </form>
        </div>
      </div>

    );
}

LoginForm.getInitialProps = async(context) => {
  const{req, res} = context;
  const session = await (getSession({req}));

  if(session && res && session.accesstoken){
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
  }
}