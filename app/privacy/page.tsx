import Link from "next/link";

export default function Page() {
  return (
    <main className="legal-page shell">
      <Link className="legal-back" href="/">← Back to Klipr</Link>
      <div className="section-kicker">Privacy Policy</div>
      <h1>Privacy Policy</h1>
      <div className="legal-copy">
        <p>Klipr is designed to process links and media requests with minimal data collection. We may process URLs you submit, basic technical information required to operate and secure the service, and aggregated usage information.</p>
        <p>We do not intend to create a personal download history or permanently store generated media files. Temporary files may be created solely to complete processing and are intended to be deleted automatically after a short period.</p>
        <p>Third-party services used to operate Klipr, such as hosting, analytics, security, or advertising providers, may process limited technical data according to their own privacy practices.</p>
        <p>Do not submit private, confidential, or sensitive information through Klipr. By using the service, you acknowledge that public links may be processed by our infrastructure and third-party service providers necessary to provide the requested function.</p>
        <p>This policy may be updated as Klipr's infrastructure and features evolve.</p>
      </div>
    </main>
  );
}
