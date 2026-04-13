---
layout: single
title: Research
header:
  title: Research Projects
  excerpt: >
    A searchable directory of OU HFS Lab projects, including NSF, FAA, and other collaborative research areas.
  background-image: /assets/img/ouhfs/home/scanpathtower.jpg
---

{% assign projects = site.projects | sort: "order" %}

## Research Themes

<ul class="lab-inline-list">
  <li>Human-integrated systems engineering</li>
  <li>Cognitive engineering and decision making</li>
  <li>Multi-person virtual reality</li>
  <li>Dynamic tasks</li>
  <li>Spatial-temporal data analysis</li>
  <li>Pattern comparison and clustering</li>
  <li>Predictive models</li>
  <li>Multimodal analysis</li>
  <li>Assistive learning and training interventions</li>
  <li>Usability testing</li>
</ul>

<div class="lab-project-directory" data-project-directory>
  <div class="lab-project-toolbar">
    <div class="lab-project-search">
      <label class="lab-project-search__label" for="project-search">Search projects</label>
      <input id="project-search" class="lab-project-search__input" type="search" placeholder="Search by title, method, funder, or topic..." data-project-search>
    </div>
    <div class="lab-project-filters">
      <button type="button" class="lab-project-filter is-active" data-project-filter="all">All</button>
      <button type="button" class="lab-project-filter" data-project-filter="nsf">NSF</button>
      <button type="button" class="lab-project-filter" data-project-filter="faa">FAA</button>
      <button type="button" class="lab-project-filter" data-project-filter="collaboration">Collaboration</button>
      <button type="button" class="lab-project-filter" data-project-filter="nas">NAS</button>
    </div>
  </div>

  <p class="lab-project-status" data-project-status>Showing all projects.</p>

  <div class="lab-project-grid">
    {% for project in projects %}
    {% assign tag_text = project.tags | join: ' ' | downcase %}
    {% assign search_text = project.title | append: ' ' | append: project.funder | append: ' ' | append: project.card_summary | append: ' ' | append: tag_text | downcase %}
    <a
      href="{{ project.url | relative_url }}"
      class="lab-project-card"
      data-project-card
      data-project-slug="{{ project.slug }}"
      data-project-tags="{{ tag_text }}"
      data-project-funder="{{ project.funder | downcase }}"
      data-search-text="{{ search_text }}">
      <div class="lab-project-card__icon">
        {% if project.icon_image %}
        <img src="{{ project.icon_image | relative_url }}" alt="{{ project.title }} icon" class="lab-project-card__icon-image">
        {% else %}
        <i class="{{ project.icon }}"></i>
        {% endif %}
      </div>
      <div class="lab-project-card__meta">{{ project.funder }}</div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.card_summary }}</p>
      <div class="lab-project-card__tags">
        {% for tag in project.tags limit:3 %}
        <span>{{ tag }}</span>
        {% endfor %}
      </div>
    </a>
    {% endfor %}
  </div>

  <div class="lab-project-empty" data-project-empty hidden>
    No projects match the current search.
  </div>
</div>
