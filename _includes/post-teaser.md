<div class="post-card">
  <h3 class="post-title">
    <a href="{{ include.post.url }}">{{ include.post.title }}</a>
  </h3>
  <p class="post-date">{{ include.post.date | date: "%B %d, %Y" }}</p>

  {% if include.post.image %}
  <img class="post-thumb" src="{{ include.post.image }}" alt="{{ include.post.title }}">
  {% endif %}

  <p class="post-excerpt">{{ include.post.excerpt | strip_html | truncate: 220 }}</p>

  <a class="read-more" href="{{ include.post.url }}">Read →</a>
</div>