---
layout: page
title: Experience
heading: Experience
standfirst: "Where I have worked and what I built there. Newest first."
---
<ul class="ledger">
{%- for e in site.data.experience %}
  <li class="rise">
    <div class="entry__meta rise">
      <span class="entry__when tabular">{{ e.when }}</span>
      <span class="entry__role">{{ e.role }}</span>
    </div>
    <div class="entry__main rise parts">
      <h2 class="entry__title">{{ e.org }}</h2>
      <p class="entry__body">{{ e.what }}</p>
    </div>
  </li>
{%- endfor %}
</ul>

<section class="section">
  <h2 class="section__head rise">Open source</h2>
  <div class="section__body rise parts">
    <p>BrowserPilot, a tool that lets a language model drive a web browser, and merged
    contributions to Kubeflow Kale, Jina AI, browser-use and the CNCF Cloud Native Glossary,
    where the first thing I contributed was the Bengali translation.</p>
    <p class="entry__links">
      <a href="https://github.com/ai-naymul/BrowserPilot">BrowserPilot</a>
      <a href="https://github.com/kubeflow-kale/kale">Kubeflow Kale</a>
      <a href="https://github.com/jina-ai">Jina AI</a>
      <a href="https://github.com/browser-use/browser-use">browser-use</a>
      <a href="https://github.com/cncf/glossary">CNCF Glossary</a>
    </p>
  </div>
</section>
