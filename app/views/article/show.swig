{% extends '../layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>
	
	{% for article in articles %}
	
		<h2>{{article.title}}</h2>
		<h4>{{article.author}}</h4>
		<p>{{article.description}}</p>
		
	{% endfor %}




{% endblock %}