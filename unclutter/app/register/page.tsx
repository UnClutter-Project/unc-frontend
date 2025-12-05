import Link from "next/link";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-putih font-sans">
      <main className="flex w-full max-w-xl flex-col px-16 rounded-lg shadow-xl/20 bg-putih">
        <form>
          <div className="text-center mb-2 text-black py-8 grid gap-4 grid-cols-3">
            <span className="col-span-3 text-3xl mb-2 font-bold text-coklat">
              Create an Account
            </span>
            <input
              type="text"
              className="block bg-transparent text-black col-span-3 border rounded-sm mb-2 p-2"
              placeholder="Username"
            />
            <input
              type="email"
              className="block bg-transparent text-black col-span-3 border rounded-sm mb-2 p-2"
              placeholder="Email"
            />
            <select
              id="gender"
              className="block bg-transparent text-black col-span-2 border rounded-sm mb-2 p-2"
              defaultValue="gender"
            >
              <option value="gender" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="date"
              className="block bg-transparent text-black col-span-1 border rounded-sm mb-2 p-2"
              placeholder=""
            />
            <input
              type="password"
              className="block bg-transparent text-black col-span-3 border rounded-sm mb-2 p-2"
              placeholder="Password"
            />
            <input
              type="password"
              className="block bg-transparent text-black col-span-3 border rounded-sm mb-2 p-2"
              placeholder="Confirm password"
            />
            <Link
              className="col-span-3 flex h-12 bg-hijau text-white min-w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-hijau hover:bg-white hover:text-hijau md:w-[158px]"
              href="/login"
            >
              Create Account
            </Link>
            <div className="col-span-3 flex items-center justify-center w-full gap-4">
              <hr className="grow" />
              <span className="text-black flex-none">
                Already Have an Account?
              </span>
              <hr className="grow" />
            </div>
            <Link
              className="col-span-3 flex h-12 min-w-full bg-white items-center justify-center rounded-full border border-solid border-black px-5 transition-colors hover:border-transparent hover:bg-abu hover:text-white md:w-[158px]"
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
