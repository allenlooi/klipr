"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  AudioLines,
  BadgeCheck,
  ChevronRight,
  Download,
  FileImage,
  Film,
  Image as ImageIcon,
  Link2,
  Loader2,
  Music2,
  Scissors,
  Sparkles,
  Wand2,
} from "lucide-react";

type MediaResult = {
  platform: string;
  handle: string;
  caption: string;
  duration: string;
  thumbnail: string;
};

const demoResult: MediaResult = {
  platform: "TikTok",
  handle: "@madebyklipr",
  caption: "A simple example result for the Klipr front-end prototype.",
  duration: "00:42",
  thumbnail:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
};

const platformMap = [
  ["youtube.com", "YouTube"],
  ["youtu.be", "YouTube"],
  ["tiktok.com", "TikTok"],
  ["instagram.com", "Instagram"],
  ["facebook.com", "Facebook"],
  ["fb.watch", "Facebook"],
  ["twitter.com", "X"],
  ["x.com", "X"],
  ["xiaohongshu.com", "Xiaohongshu"],
  ["xhslink.com", "Xiaohongshu"],
  ["threads.net", "Threads"],
  ["reddit.com", "Reddit"],
  ["pinterest.com", "Pinterest"],
  ["pin.it", "Pinterest"],
];

function detectPlatform(value: string) {
  const lower = value.toLowerCase();
  return platformMap.find(([domain]) => lower.includes(domain))?.[1] ?? "Social";
}

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");
  const [gifStart, setGifStart] = useState(0);
  const [gifLength, setGifLength] = useState(12);

  const detected = useMemo(() => detectPlatform(url), [url]);

  function processLink() {
    if (!url.trim()) return;
    setStatus("loading");
    setTimeout(() => setStatus("ready"), 900);
  }

  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#" aria-label="Klipr home">
          <span className="brand-mark">K</span>
          <span>Klipr</span>
        </a>
        <nav>
          <a href="#how-it-works">How it works</a>
          <a href="#supported">Supported</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">
          <Sparkles size={15} />
          One link. Whatever you need.
        </div>
        <h1>Paste any link.<br />Get what you need.</h1>
        <p className="hero-copy">
          Download public videos, images, thumbnails and audio from supported platforms.
        </p>

        <div className="download-card">
          <div className="input-row">
            <div className="url-field">
              <Link2 size={20} />
              <input
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (status === "ready") setStatus("idle");
                }}
                placeholder="Paste a YouTube, TikTok, Instagram, X, Facebook or Xiaohongshu link"
                onKeyDown={(e) => e.key === "Enter" && processLink()}
              />
              {url && <span className="detected-pill">{detected}</span>}
            </div>
            <button className="primary-button" onClick={processLink} disabled={!url.trim() || status === "loading"}>
              {status === "loading" ? <Loader2 className="spin" size={19} /> : <Download size={19} />}
              {status === "loading" ? "Getting it" : "Get it"}
            </button>
          </div>
          <div className="supported-inline">
            <span>YouTube</span><i />
            <span>TikTok</span><i />
            <span>Instagram</span><i />
            <span>Facebook</span><i />
            <span>X</span><i />
            <span>Xiaohongshu</span><i />
            <span>and more</span>
          </div>
        </div>
      </section>

      {status === "ready" && (
        <section className="result-wrap shell">
          <div className="result-card">
            <div className="preview-panel">
              <div className="media-preview" style={{ backgroundImage: `url(${demoResult.thumbnail})` }}>
                <div className="platform-badge">{detected}</div>
                <div className="duration-badge">{demoResult.duration}</div>
              </div>
              <div className="media-meta">
                <div className="meta-topline">
                  <strong>{demoResult.handle}</strong>
                  <BadgeCheck size={16} />
                </div>
                <p>{demoResult.caption}</p>
              </div>
            </div>

            <div className="actions-panel">
              <h2>Choose what you want</h2>

              <button className="download-option">
                <span className="option-icon"><Film size={21} /></span>
                <span className="option-copy">
                  <strong>Video</strong>
                  <small>Best available quality · MP4</small>
                </span>
                <ArrowDownToLine size={20} />
              </button>

              <button className="download-option">
                <span className="option-icon"><Music2 size={21} /></span>
                <span className="option-copy">
                  <strong>Audio only</strong>
                  <small>Extract as MP3</small>
                </span>
                <ArrowDownToLine size={20} />
              </button>

              <button className="download-option">
                <span className="option-icon"><ImageIcon size={21} /></span>
                <span className="option-copy">
                  <strong>Thumbnail</strong>
                  <small>Original image where available</small>
                </span>
                <ArrowDownToLine size={20} />
              </button>

              <div className="gif-box">
                <div className="gif-head">
                  <span className="option-icon"><Scissors size={21} /></span>
                  <div>
                    <strong>Create GIF</strong>
                    <small>Choose up to 20 seconds</small>
                  </div>
                </div>
                <div className="range-row">
                  <label>
                    Start
                    <input
                      type="range"
                      min={0}
                      max={22}
                      value={gifStart}
                      onChange={(e) => setGifStart(Number(e.target.value))}
                    />
                    <span>{gifStart}s</span>
                  </label>
                  <label>
                    Length
                    <input
                      type="range"
                      min={3}
                      max={20}
                      value={gifLength}
                      onChange={(e) => setGifLength(Number(e.target.value))}
                    />
                    <span>{gifLength}s</span>
                  </label>
                </div>
                <button className="secondary-button">
                  <Wand2 size={17} />
                  Create GIF
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="feature-strip shell">
        <article>
          <span className="feature-icon"><Film /></span>
          <h3>Video</h3>
          <p>Grab the best available public video from a supported link.</p>
        </article>
        <article>
          <span className="feature-icon"><FileImage /></span>
          <h3>Images</h3>
          <p>Download single images or every image from supported carousel posts.</p>
        </article>
        <article>
          <span className="feature-icon"><AudioLines /></span>
          <h3>Audio</h3>
          <p>Pull out the audio and save it as an MP3.</p>
        </article>
        <article>
          <span className="feature-icon"><Scissors /></span>
          <h3>GIF</h3>
          <p>Turn any section up to 20 seconds into a shareable GIF.</p>
        </article>
      </section>

      <section id="how-it-works" className="how shell">
        <div>
          <div className="section-kicker">How it works</div>
          <h2>Paste. Pick. Done.</h2>
          <p>No platform selection. No account. No unnecessary steps.</p>
        </div>
        <div className="steps">
          {[
            ["01", "Paste the link", "Copy a public post URL from your social platform."],
            ["02", "Klipr detects it", "We identify the platform and available media automatically."],
            ["03", "Choose your file", "Download video, audio, thumbnail, images or make a GIF."],
          ].map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="supported" className="supported shell">
        <div className="section-kicker">One place for your links</div>
        <h2>Made to work across social.</h2>
        <div className="platform-grid">
          {["YouTube", "TikTok", "Instagram", "Facebook", "X", "Xiaohongshu", "Threads", "Reddit", "Pinterest"].map((name) => (
            <div key={name}>{name}<ChevronRight size={16} /></div>
          ))}
        </div>
      </section>

      <section id="faq" className="faq shell">
        <div className="section-kicker">FAQ</div>
        <h2>Keep it simple.</h2>
        {[
          ["Do I need an account?", "No. Klipr is designed to be one-and-done: paste a public link, choose your file, download."],
          ["How long can my GIF be?", "Up to 20 seconds from any supported video."],
          ["Does Klipr store my downloads?", "The intended production architecture uses temporary processing only and automatically deletes generated files after a short period."],
          ["Can I download private content?", "No. Klipr is designed for publicly accessible content that you have the right or permission to download."],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>{q}<span>+</span></summary>
            <p>{a}</p>
          </details>
        ))}
      </section>


      <section className="blog shell">
        <div className="section-kicker">From the blog</div>
        <div className="blog-heading">
          <h2>Useful guides for saving and repurposing social content.</h2>
          <a href="/blog">View all articles <ChevronRight size={16} /></a>
        </div>
        <div className="blog-grid">
          {[
            ["How to download social videos without losing quality", "A simple guide to getting the best available file from public social links."],
            ["How to turn a video clip into a GIF", "Everything you need to know before converting a short clip into a lightweight GIF."],
            ["Video, audio or thumbnail: which format should you save?", "Choose the right output for references, edits, presentations and social planning."],
          ].map(([title, text]) => (
            <article key={title}>
              <span>Guide</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="/blog">Read article <ChevronRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand footer-brand">
          <span className="brand-mark">K</span>
          <span>Klipr</span>
        </div>
        <p>Paste it. Klip it.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/copyright">Copyright</a>
          <a href="/blog">Blog</a>
        </div>
        <small>© 2026 Klipr. Not affiliated with any supported social platform.</small>
      </footer>
    </main>
  );
}
