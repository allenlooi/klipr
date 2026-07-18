import Link from "next/link";

export default function Page() {
  return (
    <main className="legal-page shell">
      <Link className="legal-back" href="/">← Back to Klipr</Link>
      <div className="section-kicker">Klipr Blog</div>
      <h1>Klipr Blog</h1>
      <div className="legal-copy">
        <p>Practical guides for downloading, saving and repurposing public social content.</p>
        <p>Our blog will cover platform-specific download guides, file formats, GIF creation, audio extraction, image saving, quality tips and creator workflows.</p>
        <p>More articles are coming soon.</p>
      </div>
    </main>
  );
}
