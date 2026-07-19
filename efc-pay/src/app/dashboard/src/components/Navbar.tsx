import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>

      {" | "}

      <Link href="/merchant">
        Merchant
      </Link>

      {" | "}

      <Link href="/invoice">
        Payment
      </Link>

      {" | "}

      <Link href="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}
