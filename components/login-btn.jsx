import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function LoginBtn() {
  const { data: session } = useSession();
  console.log("data", session);
  
  if (session) {
    return (
      <>
      <h2>{session.user.name}</h2>
      <p>Yuore name</p>
      <Image src={session.user.image} width={100} height={100} alt="hghgh"/>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}