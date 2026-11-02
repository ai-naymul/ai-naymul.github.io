---
layout: page
title: Writing
heading: Writing
---
<p class="rise">Notes on what I am reading, building and getting wrong. Irregular.</p>

{%- if site.posts.size > 0 %}
<ul class="rows rise" style="margin-top: var(--s4)">
{%- for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="rows__when tabular">{{ post.date | date: "%b %Y" }}</span>
  </li>
{%- endfor %}
</ul>
{%- else %}
<p class="muted rise" style="margin-top: var(--s4)">Nothing here yet.</p>
{%- endif %}
