"use client";

import { useEffect, useState } from 'react';

const terminalLines = [
  { type: 'cmd', text: 'npx Vino-IK init' },
  { type: 'out', text: '✔ detected package.json (JavaScript)' },
  { type: 'out', text: '✔ watching 214 modules' },
  { type: 'ok', text: 'Vino-IK ready in 118ms' },
  { type: 'cmd', text: '// edit src/app.js and save...' },
  { type: 'ok', text: '🗲 patched 1 module in 11ms' },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  function copyCmd() {
    navigator.clipboard.writeText('npm install -g Vino-IK').then(() => setCopied(true));
  }

  return (
    <>
      <div className="noise" />
      <nav>
        <div className="wrap">
          <div className="brand"><span className="dot" /> Vino-IK</div>
          <div className="navlinks">
            <a href="#features">Features</a>
            <a href="#pipeline">How it works</a>
            <a href="#install">Install</a>
          </div>
          <a className="navcta" href="#install">$ npm i -g vino-ik</a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">v1.0 · built on Node &amp; the JS runtime you already run and have!</div>
          <h1>Create.<br /><span className="grad">Imagination is your Limit.</span></h1>
          <p className="sub">
            Vino-IK is a <strong>JavaScript-native</strong> CLI. No plugins to wire up. No webpack config to fight. Just <strong>node vino-ik</strong> and go.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#install">🗲 Get started</a>
            <a className="btn-ghost" href="#pipeline">See how it works →</a>
          </div>

          <div className="stage">
            <div className="terminal">
              <div className="term-bar">
                <span style={{ background: '#ff5f57' }} />
                <span style={{ background: '#febc2e' }} />
                <span style={{ background: '#28c840' }} />
                <div className="term-title">~/project — vino-ik</div>
              </div>
              <div className="term-body">
                {terminalLines.map((line, index) => (
                  <div className="term-line" key={`${line.type}-${index}`}>
                    {line.type === 'cmd' ? <><span className="term-prompt">➜</span> <span>{line.text}</span></> : line.type === 'ok' ? <span className="term-ok">{line.text}</span> : <span className="term-out">{line.text}</span>}
                  </div>
                ))}
                <div className="term-line"><span className="term-prompt">➜</span> <span className="cursor" /></div>
              </div>
            </div>

            <div className="side-stats">
              <div className="stat-card">
                <div className="stat-num">11ms</div>
                <div className="stat-label">median hot‑reload time on a JS/TS codebase</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">0</div>
                <div className="stat-label">config files required to boot a project</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">100%</div>
                <div className="stat-label">Pure JavaScript — no native binaries, no lock‑in</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="features">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Why Vino-IK</div>
            <h2>We just Build Different.</h2>
            <p>Three problems slow down every JS developer's day. Vino-IK was written to erase all three, in pure JavaScript, with nothing to compile.</p>
          </div>
          <div className="grid-features">
            <div className="feature"><div className="icon">🗲</div><h3>Instant reload</h3><p>File‑system watchers patch only the changed module graph, so the browser or Node process updates without a full restart.</p></div>
            <div className="feature"><div className="icon">◆</div><h3>Zero‑config bundling</h3><p>Vino-IK reads your package.json and infers entry points, targets, and aliases — no bundler config to hand‑write.</p></div>
            <div className="feature"><div className="icon">▲</div><h3>Live inspector</h3><p>Stream variable state, network calls, and console output into one terminal pane, correlated by call stack.</p></div>
            <div className="feature"><div className="icon">◈</div><h3>Smart caching</h3><p>A content‑addressed cache skips re‑transforming files that haven't changed, even across branch switches.</p></div>
            <div className="feature"><div className="icon">✦</div><h3>Plugin API</h3><p>Extend Vino-IK with small JavaScript functions — no build step, no separate plugin runtime to learn.</p></div>
            <div className="feature"><div className="icon">◐</div><h3>Framework‑agnostic</h3><p>Works the same whether you're running vanilla JS, React, Vue, or a bare Node script.</p></div>
          </div>
        </div>
      </section>

      <section id="pipeline">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Under the hood</div>
            <h2>One line, three stages</h2>
            <p>Everything below happens inside a single JavaScript process — Vino-IK never shells out to another language runtime.</p>
          </div>
          <div className="pipeline">
            <div className="pstep"><div className="ptag"><b>01</b>watch</div><div className="pmain"><h4>File graph is indexed</h4><p>Vino-IK walks your imports once at boot, then only re‑checks what a saved file actually touches.</p></div></div>
            <div className="pstep"><div className="ptag"><b>02</b>transform</div><div className="pmain"><h4>Just‑in‑time transform</h4><p>Modern syntax is transformed on demand, in memory, and cached by content hash.</p></div></div>
            <div className="pstep"><div className="ptag"><b>03</b>serve</div><div className="pmain"><h4>Patch, not reload</h4><p>Changed modules are pushed to the running process or browser tab over a lightweight socket.</p></div></div>
          </div>
        </div>
      </section>

      <section id="install">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Get started</div>
            <h2>It takes just one line. Really.</h2>
            <p>Vino-IK installs as a single global JavaScript package and drops into any Node project.</p>
          </div>
          <div className="install-box">
            <div className="cmd">$ <span>npm</span> install -g Vino-IK</div>
            <button className="copy-btn" type="button" onClick={copyCmd}>{copied ? 'Copied ✓' : 'Copy'}</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-inner">
            <div className="brand"><span className="dot" /> Vino-IK</div>
            <div className="foot-links">
              <a href="#features">Features</a>
              <a href="#pipeline">How it works</a>
              <a href="#install">Install</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
