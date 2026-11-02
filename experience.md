---
layout: page
title: Experience
heading: Experience
standfirst: "Where I have worked and what I built there. Newest first."
---
<ul class="ledger">
{%- for e in site.data.experience %}
  <li class="rise">
    {%- if e.logo %}
    <img class="entry__logo{% if e.logo.wordmark %} entry__logo--word{% endif %}{% if e.logo.mark %} entry__logo--mark{% endif %}"
         src="{{ e.logo.src | relative_url }}" alt="{{ e.org }} logo"
         width="{{ e.logo.w }}" height="{{ e.logo.h }}" loading="lazy" decoding="async">
    {%- endif %}
    <div class="entry__meta rise">
      <span class="entry__when tabular">{{ e.when }}</span>
      <span class="entry__role">{{ e.role }}</span>
    </div>
    <div class="entry__main rise parts">
      <h2 class="entry__title">{%- if e.url %}<a href="{{ e.url }}">{{ e.org }}</a>{% else %}{{ e.org }}{% endif %}</h2>
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
    <ul class="oss">
      <li><a href="https://github.com/ai-naymul/BrowserPilot">BrowserPilot</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/kubeflow-kale.webp' | relative_url }}" alt="" width="46" height="64" loading="lazy"><a href="https://github.com/kubeflow-kale/kale">Kubeflow Kale</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/jina-ai.webp' | relative_url }}" alt="" width="150" height="64" loading="lazy"><a href="https://github.com/jina-ai">Jina AI</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/browser-use.webp' | relative_url }}" alt="" width="64" height="64" loading="lazy"><a href="https://github.com/browser-use/browser-use">browser-use</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/cncf.webp' | relative_url }}" alt="" width="64" height="64" loading="lazy"><a href="https://github.com/cncf/glossary">CNCF Glossary</a></li>
    </ul>
  </div>
</section>
