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
      {%- if e.also %}
      <p class="entry__links">
        {%- for a in e.also %}<a href="{{ a.url }}">{{ a.label }}</a>{% endfor %}
      </p>
      {%- endif %}
    </div>
  </li>
{%- endfor %}
</ul>

<section class="section">
  <h2 class="section__head rise">Open source</h2>
  <div class="section__body rise parts">
    <p>BrowserPilot lets a language model drive a web browser; it carries a 256-test suite that
    runs in CI on every pull request. Merged contributions to Kubeflow Kale, Jina AI, browser-use
    and the CNCF Cloud Native Glossary, where the first thing I contributed was the Bengali
    translation.</p>
    <ul class="oss">
      <li><a href="https://github.com/ai-naymul/BrowserPilot">BrowserPilot</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/kubeflow-kale.webp' | relative_url }}" alt="" width="46" height="64" loading="lazy"><a href="https://github.com/kubeflow-kale/kale">Kubeflow Kale</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/jina-ai.webp' | relative_url }}" alt="" width="150" height="64" loading="lazy"><a href="https://github.com/jina-ai">Jina AI</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/browser-use.webp' | relative_url }}" alt="" width="64" height="64" loading="lazy"><a href="https://github.com/browser-use/browser-use">browser-use</a></li>
      <li><img class="oss__logo" src="{{ '/assets/logos/cncf.webp' | relative_url }}" alt="" width="64" height="64" loading="lazy"><a href="https://github.com/cncf/glossary">CNCF Glossary</a></li>
    </ul>
  </div>
</section>

<section class="section">
  <h2 class="section__head rise">Teaching</h2>
  <div class="section__body rise parts">
    <p>At INIT 6.0, the national school hackathon at Notre Dame College in Dhaka, I mentored every
    competing team across two days, more than 200 students, on prompting and on choosing the right
    AI tool for the problem. One of the teams I advised placed second.</p>
  </div>
</section>

<section class="section">
  <h2 class="section__head rise">Awards</h2>
  <div class="section__body rise parts">
    <ul class="rows">
      <li><span><b>Best Solo Project</b>, HackFrost Winter Hackathon, WeMakeDevs. 3,000+
        participations from 25+ countries and 100+ project submissions; one of seven category
        awards.</span><span class="rows__when tabular">2024</span></li>
      <li><span><b>25th of 107 teams</b>, DL Sprint 4.0 Bengali speaker diarization,
        AI@BUET.</span><span class="rows__when tabular">2026</span></li>
      <li><span><b>30 finalists of 400+ teams</b>, SciBlitz 2.0 AI hackathon, IEEE
        CUET.</span><span class="rows__when tabular">2026</span></li>
      <li><span>Semi-finalist, ICT Olympiad Bangladesh.</span><span class="rows__when tabular">2022</span></li>
    </ul>
  </div>
</section>
