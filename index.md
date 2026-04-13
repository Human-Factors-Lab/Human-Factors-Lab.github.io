---
layout: home
title: Home
header:
  title: Human Factors and Simulation Laboratory
  title-color: white
  excerpt: >
    The OU HFS Lab bridges human factors, operations research, and data analytics to study human performance in complex human-integrated systems.
  excerpt-color: white
  align: left
  background-image: /assets/img/ouhfs/home/scanpathtower.jpg
feature_row:
  - icon_image: /assets/img/icons/vr_headset.png
    title: NSF Project
    excerpt: Explore the NSF CAREER project on smart learning in multi-person virtual reality and multimodal analysis.
    url: /research/nsf-career-vr/
    btn_label: View NSF project
    btn_class: mt-4
    color: danger
    icon_color: default
  - icon: fa fa-plane
    title: FAA Projects
    excerpt: Browse FAA-supported work on tower control, en route scanning, training, and workload analysis.
    url: /research/faa-airport-tower-vr/
    btn_label: View FAA projects
    btn_class: mt-4
    color: danger
    icon_color: default
  - icon: fa fa-ellipsis-h
    url: /research.html
    icon_only: true
    btn_label: Browse All Projects
    btn_class: mt-4
    color: danger
    icon_color: default
---

{% include feature_row.html %}

<section class="section bg-secondary lab-home-section">
  <div class="container">
    <div class="row align-items-center lab-highlight">
      <div class="col-lg-7">
        <div class="lab-kicker">Overview</div>
        <h2>Welcome to Kang's lab</h2>
        <p>
          Researchers at the Human Factors and Simulation Laboratory study how people perceive, decide, learn, and perform inside
          complex socio-technical systems. The lab combines human factors, simulation, and computational analysis to discover patterns
          that can improve training, interface design, and operational safety.
        </p>
        <p>
          Our projects often connect eye tracking, haptic interaction, brain activity, visualization, and predictive modeling.
          Application areas include air traffic control, virtual reality learning, weather forecasting, healthcare systems,
          marketing, and offshore operations.
        </p>
        <ul class="lab-inline-list">
          <li>Human factors</li>
          <li>Operations research</li>
          <li>Data analytics</li>
          <li>Eye tracking</li>
          <li>Virtual reality</li>
          <li>Multimodal analysis</li>
        </ul>
      </div>
      <div class="col-lg-5 mt-4 mt-lg-0">
        <img src="/assets/img/ouhfs/home/Funding.jpg" alt="Funding sources" class="lab-image">
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="lab-card">
          <div class="lab-kicker">Funding</div>
          <h3>Research support</h3>
          <ul class="lab-list-tight">
            <li>National Science Foundation</li>
            <li>Federal Aviation Administration</li>
            <li>National Academy of Sciences</li>
            <li>Microsoft Corporation</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="lab-card">
          <div class="lab-kicker">What Makes The Lab Distinct</div>
          <p>
            We develop automated or semi-automated algorithms to characterize and cluster human behaviors, especially from
            spatio-temporal data such as eye movement networks.
          </p>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="lab-card">
          <div class="lab-kicker">Student Preparation</div>
          <p>
            The lab is a strong fit for students interested in programming, statistics, experimentation, data analysis,
            and human-centered system design.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section lab-home-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <h2>News <span class="left-icon"><a href="{{ '/feed.xml' | relative_url }}"><i class="fa fa-rss"></i></a></span></h2>
        <ul class="post-list">
          {% assign news = site.posts | sort: 'date' | reverse %}
          {% for post in news limit:3 %}
          <li class="post-list-item">
            <div class="right-text">{{ post.date | date: "%-d %b %Y" }}</div>
            <div class="post-list-title">{{ post.title }}</div>
            <div class="post-list-excerpt">
              {{ post.content | strip_html | truncatewords: 42 }}
            </div>
            <div><a class="post-list-link" href="{{ post.url | relative_url }}">More...</a></div>
          </li>
          {% endfor %}
        </ul>
        <div class="all-news-link"><a href="{{ '/news.html' | relative_url }}">See All News</a></div>
      </div>
    </div>
  </div>
</section>

<section class="section lab-home-section">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-5 mb-4 mb-lg-0">
        <img src="/assets/img/ouhfs/people/NSFZK.jpg" alt="Dr. Ziho Kang" class="lab-image lab-image--small">
      </div>
      <div class="col-lg-7">
        <div class="lab-kicker">Featured Project</div>
        <h2>NSF CAREER Award</h2>
        <p>
          Dr. Ziho Kang received an NSF CAREER award for research on non-text-based smart learning in fully immersive
          multi-person virtual reality using near real-time multimodal analysis of physiological measures.
        </p>
        <p>
          The project studies how eye movement characteristics, haptic interactions, and brain activities can be analyzed
          in time to predict engagement and support adaptive scaffolding in immersive learning environments.
        </p>
        <p><a href="{{ '/grants.html' | relative_url }}">See funding history</a> or <a href="{{ '/research.html' | relative_url }}">read more about research areas</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-secondary lab-home-section">
  <div class="container">
    <div class="text-center">
      <button type="button" class="lab-poster-trigger" data-toggle="modal" data-target="#announcementPosterModal">
        <img src="/assets/img/ouhfs/people/Announcement.jpg" alt="NSF CAREER announcement poster" class="lab-image lab-home-poster">
      </button>
      <button type="button" class="lab-poster-caption-trigger" data-toggle="modal" data-target="#announcementPosterModal">
        Click here to better read the descriptions of the above announcement.
      </button>
    </div>
  </div>
</section>

<div class="modal fade" id="announcementPosterModal" tabindex="-1" role="dialog" aria-labelledby="announcementPosterModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered lab-poster-dialog" role="document">
    <div class="modal-content lab-poster-modal">
      <div class="modal-header border-0 pb-0">
        <h5 class="modal-title" id="announcementPosterModalLabel">NSF CAREER Announcement</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body pt-2">
        <iframe
          src="/assets/file/zihokangpostcard.pdf"
          title="NSF CAREER announcement poster PDF"
          class="lab-poster-pdf">
        </iframe>
      </div>
    </div>
  </div>
</div>
