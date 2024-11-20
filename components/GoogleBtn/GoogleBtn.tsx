import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function GoogleBtn(){
   const searchParams = useSearchParams();
   const callbackUrl =searchParams.get("callbackUrl") || "/about";

    return (
        <button onClick={() => signIn('google', {callbackUrl})}>
            Sign in Google
        </button>
    )
}