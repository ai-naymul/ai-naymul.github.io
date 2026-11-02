---
layout: default
title: Naymul Islam
---
<header class="hero bleed">
  <div class="hero__in">
    <h1 class="name rise">Naymul&nbsp;Islam</h1>

    <div class="hero__say rise" data-register>
      <div data-say="plain">
        <p class="lead">I work on whether language models stay safe in Bengali, and on the
          data and the evaluation that question needs.</p>
        <p class="under">Most of what I build sits underneath that: the pipelines, the
          clusters and the systems research actually runs on.</p>
      </div>
      <div data-say="formal" hidden>
        <p class="lead">My research concerns the robustness of safety behaviour in large
          language models under register variation in Bengali.</p>
        <p class="under">A substantial part of the work is the systems underneath: data
          pipelines, orchestration and production infrastructure.</p>
      </div>
      <p class="register">
        <button type="button" data-register-toggle hidden>read this in academic register</button>
      </p>
    </div>

    <dl class="facts rise">
      <div><dt>Based in</dt><dd>Chattogram, Bangladesh</dd></div>
      <div><dt>Working on</dt><dd>Bengali and low-resource NLP</dd></div>
      <div><dt>With</dt><dd><a href="https://banglallm.github.io/">BanglaLLM</a></dd></div>
    </dl>

    {% include register-figure.html %}
  </div>
</header>

<section class="work" aria-labelledby="selected">
  <h2 class="section__head rise" id="selected">Selected</h2>
  <ul class="ledger-rows">
    <li class="rise"><span>First author, <a href="{{ '/publications/' | relative_url }}">Findings of EMNLP 2026</a></span><span class="when tabular">2026</span></li>
    <li class="rise"><span>Founding member and lead engineer, <a href="{{ '/experience/' | relative_url }}">Drishtikon / Perspectivity</a></span><span class="when tabular">2026</span></li>
    <li class="rise"><span>Best Solo Project, HackFrost winter hackathon</span><span class="when tabular">2024</span></li>
    <li class="rise"><span>25th of 107 teams, DL Sprint 4.0 speaker diarization, AI@BUET</span><span class="when tabular">2026</span></li>
    <li class="rise"><span>Top-30 finalist, SciBlitz 2.0 AI hackathon, IEEE CUET</span><span class="when tabular">2026</span></li>
    <li class="rise"><span>Semi-finalist, ICT Olympiad Bangladesh</span><span class="when tabular">2022</span></li>
  </ul>
</section>

<section class="close" aria-labelledby="reach">
  <h2 class="visually-hidden" id="reach">Get in touch</h2>
  <p class="close__say rise">
    Open to research collaboration on Bengali and low-resource language models, and to
    engineering work on the systems behind them.
  </p>
  {% include photo.html %}
  <div class="close__side">
    <div class="close__links rise">
      <a href="mailto:{{ site.email }}">{{ site.email }}</a>
      <a href="https://github.com/{{ site.github_username }}">github.com/{{ site.github_username }}</a>
      <a href="{{ site.scholar_url }}">Google Scholar</a>
    </div>
  </div>
  <p class="close__sign rise" aria-hidden="true">Naymul&nbsp;Islam</p>
</section>
