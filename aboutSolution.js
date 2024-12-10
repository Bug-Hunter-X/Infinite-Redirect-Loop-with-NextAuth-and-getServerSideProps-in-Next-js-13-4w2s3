```javascript
// pages/about.js
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default function About({ session }) {
  if (!session) {
    return (
      <div>
        <h1>Please login to view this page</h1>
        <Link href="/login">
        <a>Go to Login</a>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>Logged in as: {session.user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  return {
    props: { session },
  };
}
```