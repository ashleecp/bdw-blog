{% extends '../layout.swig' %}

{% block content %}

  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>
	{% if articles.length > 0 %}
	<ol>
	{% for article in articles %}
	<li class="articles">
		<a href="/article/{{article.id}}"><h2>{{article.title}}</h2>
		</a>
	{% endfor %}
	</ol>
	{% else %}
		<h2>Nothing here yet.</h2>
	{% endif %}




{% endblock %}