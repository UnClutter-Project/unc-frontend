import Link from "next/link";

export default function Forgot() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
        <form>
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              Forgot Your Password?
            </span>
            <input
              type="text"
              className="block bg-transparent text-black col-span-3 border rounded-sm mb-2 p-2"
              placeholder="Username / Email"
            />
            <Link
              className="col-span-3 flex h-12 bg-hijau text-white min-w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-hijau hover:bg-white hover:text-hijau md:w-[158px]"
              href="/login"
            >
              Reset Password
            </Link>
            <div className="col-span-3 flex items-center justify-center w-full gap-4">
              <hr className="grow" />
            </div>
            <Link
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px]"
              href="/login"
            >
              Back
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
