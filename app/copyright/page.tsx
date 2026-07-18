import Link from "next/link";

export default function Page() {
  return (
    <main className="legal-page shell">
      <Link className="legal-back" href="/">← Back to Klipr</Link>
      <div className="section-kicker">Copyright Policy</div>
      <h1>Copyright Policy</h1>
      <div className="legal-copy">
        <p>Klipr respects intellectual property rights and is intended only for lawful use.</p>
        <p>Users must only download, convert, or process media that they own, that is in the public domain, or that they have permission or a lawful basis to use.</p>
        <p>Klipr does not intend to operate as a permanent media host or searchable catalogue of third-party content. Media processing is designed to be user-initiated through a submitted link.</p>
        <p>If you believe content accessible through Klipr is being used in a way that infringes your rights, please submit a copyright notice through the designated reporting channel once available. A valid notice should identify the copyrighted work, the allegedly infringing material or URL, your contact details, and a good-faith statement that the disputed use is not authorised.</p>
        <p>Klipr may restrict access to functionality, block URLs, or take other reasonable action in response to valid complaints or suspected abuse.</p>
      </div>
    </main>
  );
}
