import { useSession, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl =searchParams.get("callbackUrl") || "/about"; // Используем callbackUrl или по умолчанию / 

  useEffect(() => {
    if (session) {
      // Если пользователь уже вошел в систему, перенаправляем его
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);

  return (
    <div>
      {!session && (
        <div>
          <h1>Sign in</h1>
          <button onClick={() => signIn("google", { callbackUrl })}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
}

