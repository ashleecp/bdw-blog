{% extends '../layout.swig' %}

{% block content %}
		
		{% for article in articles %}
		<h2>{{ article.title }}</h2>
		<h4>{{ article.author }}</h4>
		<p>{{ article.description }}</p>
		{% endfor %}

		<a class="button button-primary" href="/article">back</a>

		<a class="button" href="/article/{{ article.id }}/edit">edit</a>

		


{% endblock %}