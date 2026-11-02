---
layout: page
title: Publications
heading: Publications
---
<ul class="ledger rise">
{%- for p in site.data.publications %}
  <li>
    <div class="entry__head">
      <h2 class="entry__title">{{ p.title }}</h2>
      <span class="entry__when tabular">{{ p.year }}</span>
    </div>
    <p class="entry__role">{{ p.venue }}</p>
    <p class="entry__body small muted">
      {{- p.authors | replace: p.me, '<b class="me">§</b>' | replace: '§', p.me -}}
    </p>
    {%- if p.note %}<p class="entry__note small muted">{{ p.note }}</p>{% endif %}
    {%- if p.finding %}<p class="entry__body">{{ p.finding }}</p>{% endif %}
    <p class="entry__links">
      {%- for l in p.links %}<a href="{{ l.url }}">{{ l.label }}</a>{% endfor %}
    </p>
  </li>
{%- endfor %}
</ul>
