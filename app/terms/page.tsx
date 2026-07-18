import Link from "next/link";

export default function Page() {
  return (
    <main className="legal-page shell">
      <Link className="legal-back" href="/">← Back to Klipr</Link>
      <div className="section-kicker">Terms of Use</div>
      <h1>Terms of Use</h1>
      <div className="legal-copy">
        <p>Klipr is provided as a utility for accessing and processing publicly available media that you own or have permission and legal authority to download.</p>
        <p>You are solely responsible for ensuring that your use of Klipr complies with applicable laws, copyright rules, platform terms, and the rights of content owners.</p>
        <p>You may not use Klipr to access private content, bypass access controls, infringe intellectual property rights, facilitate unlawful activity, or interfere with the operation of the service.</p>
        <p>Klipr is provided on an as-is and as-available basis. We do not guarantee uninterrupted availability, compatibility with every platform, or permanent support for any particular website or media format.</p>
        <p>Supported platforms may change at any time. Klipr is not affiliated with, sponsored by, or endorsed by any social platform referenced on the website.</p>
        <p>By using Klipr, you agree to these terms.</p>
      </div>
    </main>
  );
}
