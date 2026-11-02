---
layout: page
title: Publications
heading: Publications
standfirst: "Peer-reviewed work on Bengali and low-resource language models. Newest first. My name is in bold in each author list."
---
<ul class="ledger">
{%- for p in site.data.publications %}
  <li class="rise">
    <div class="entry__meta rise">
      <span class="entry__when tabular">{{ p.year }}</span>
      <span class="entry__role">{{ p.venue }}</span>
    </div>
    <div class="entry__main rise parts">
      <h2 class="entry__title">{{ p.title }}</h2>
      <p class="entry__body small muted">
        {{- p.authors | replace: p.me, '<b class="me">§</b>' | replace: '§', p.me -}}
      </p>
      {%- if p.note %}<p class="entry__note small muted">{{ p.note }}</p>{% endif %}
      {%- if p.finding %}<p class="entry__body">{{ p.finding }}</p>{% endif %}
      <p class="entry__links">
        {%- for l in p.links %}<a href="{{ l.url }}">{{ l.label }}</a>{% endfor %}
      </p>
      {%- if p.figure %}
      <figure class="shot">
        <a class="shot__zoom" href="{{ p.figure.src | relative_url }}">
          <img src="{{ p.figure.src | relative_url }}" alt="{{ p.figure.alt }}"
               width="{{ p.figure.w }}" height="{{ p.figure.h }}" loading="lazy" decoding="async">
        </a>
        <figcaption>{{ p.figure.cap }}
          <a href="{{ p.figure.src | relative_url }}">Open it full size</a></figcaption>
      </figure>
      {%- endif %}
    </div>
  </li>
{%- endfor %}
</ul>
