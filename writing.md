---
layout: page
title: Writing
heading: Writing
standfirst: "Notes on what I am reading, building and getting wrong. Irregular."
---
<div class="index rise parts">
{%- if site.posts.size > 0 %}
<ul class="rows rise">
{%- for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="rows__when tabular">{{ post.date | date: "%b %Y" }}</span>
  </li>
{%- endfor %}
</ul>
{%- else %}
<p class="rise">Nothing here yet.</p>
<p class="rise"><a href="{{ '/feed.xml' | relative_url }}">Subscribe by feed</a></p>
{%- endif %}
</div>
