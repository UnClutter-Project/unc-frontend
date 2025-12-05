import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
        <form>
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              LOGIN
            </span>
            <input
              type="text"
              className="block bg-transparent text-black col-span-3 border rounded-sm mb-2 p-2"
              placeholder="Username / Email"
            />
            <input
              type="password"
              className="block bg-transparent text-black col-span-3 border rounded-sm p-2"
              placeholder="Password"
            />
            <Link className="text-coklat " href="/forgot">
              Forgot Password?
            </Link>
            <Link
              className="col-span-3 flex h-12 bg-hijau text-white min-w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-hijau hover:bg-white hover:text-hijau md:w-[158px]"
              href="/register"
            >
              Sign In
            </Link>
            <div className="col-span-3 flex items-center justify-center w-full gap-4">
              <hr className="grow" />
              <span className="text-black flex-none">
                Don't Have an Account?
              </span>
              <hr className="grow" />
            </div>
            <Link
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px]"
              href="/register"
            >
              Join Now
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
