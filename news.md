---
layout: single
title: News
header:
  title: News <a href="{{ site.baseurl }}/feed.xml"><i class="fa fa-rss"></i></a>
  excerpt: >
    Updates on funding, projects, publications, awards, and other milestones from the Human Factors and Simulation Laboratory.
  background-image: /assets/img/ouhfs/home/scanpathtower.jpg
---

<ul class="post-list">
  {%- for post in site.posts -%}
  <li>
    {%- assign date_format = "%b %-d, %Y" -%}
    <span class="post-meta">{{ post.date | date: date_format }}</span>
    <a class="post-link" href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
      {{ post.excerpt | remove: "<p>" | remove: "</p>"}}
  </li>
  {%- endfor -%}
</ul>
