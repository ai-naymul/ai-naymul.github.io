---
layout: page
title: Experience
heading: Experience
---
<ul class="ledger rise">
{%- for e in site.data.experience %}
  <li>
    <div class="entry__head">
      <span class="entry__title">{{ e.org }}</span>
      <span class="entry__when tabular">{{ e.when }}</span>
    </div>
    <p class="entry__role">{{ e.role }}</p>
    <p class="entry__body">{{ e.what }}</p>
  </li>
{%- endfor %}
</ul>

<section class="section rise">
  <h2 class="section__head">Open source</h2>
  <p><a href="https://github.com/ai-naymul/BrowserPilot">BrowserPilot</a>, a tool that lets a
  language model drive a web browser, and merged contributions to
  <a href="https://github.com/kubeflow-kale/kale">Kubeflow Kale</a>,
  <a href="https://github.com/jina-ai">Jina AI</a>,
  <a href="https://github.com/browser-use/browser-use">browser-use</a> and the
  <a href="https://github.com/cncf/glossary">CNCF Cloud Native Glossary</a>, where the first
  thing I contributed was the Bengali translation.</p>
</section>
