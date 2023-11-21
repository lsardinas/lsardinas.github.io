---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
active: home
title: "Home"
---

<div class='slider-row'>
	<ul id='home-slider' class='bxslider'>
		<li style="background:url('{{"/images/1.jpg" prepend: site.baseurl}}');background-size:cover;">
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-offset-6 col-md-offset-6'>
                        <div class='slogan-holder'>                            
                            <div class='slogan-text'>
                                <h1>
                                    Let Plick do it
                                </h1>
                                <div class="form-group">
                                    <p>
                                        Our prices are the best in town and we can work with any budget
                                    </p>									
                                </div>
                            </div>                            
                            <div class='form-group'>
                                <a href="{{ site.baseurl }}/work.html" class='btn btn-primary-transparent btn-lg' tabindex="-1">OUR WORK</a>
                                <a href="{{ site.baseurl}}/contact.html" class='btn btn-quote btn-lg' tabindex="-1">
                                    GET A FREE QUOTE
                                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>			
		</li>
		<li style="background:url('{{"/images/2.jpg" prepend: site.baseurl}}');background-size:cover;">			
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-offset-6 col-md-offset-6'>
                        <div class='slogan-holder'>
                            <h1>
                                Realize your project
                            </h1>
                            <div class='form-group'>
                                <p>
                                    We offer free consulting for your idea, 100% delivery guaranteed
                                </p>
                            </div>
                            <div class='form-group'>
                                <a href="{{ site.baseurl }}/work.html" class='btn btn-primary-transparent btn-lg' tabindex="-1">OUR WORK</a>
                                <a href="{{ site.baseurl}}/contact.html" class='btn btn-quote btn-lg' tabindex="-1">
                                    GET A FREE QUOTE
                                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
		</li>
	</ul>
</div>

<section class='stripe-row default-row'>
	<div class='container'>
		<div class='row'>
			<div class='col-xs-12'>
				<h2 class='title'>
					Our Services
				</h2>
			</div>
		</div>
        <div class='row'>       
            {%assign services = site.services | sort: 'sequence'%}
            {% for service in services%}                
                <div class='col-lg-4 col-md-4 col-sm-6 col-xs-12 animated'>
                    
                    <article id='{{service.title | replace: ' '}}' class='card card-white service-card'>                                          
                        <a class='card-image-link action' href="{{service.url}}" aria-label="More info on {{service.title}}">
                            <div class='card-image' style="background-image:url('{{service.image}}')">
                                <div class='thumbs-up'>
                                    <i class="{{service.icon}}" aria-hidden="true"></i>    
                                </div>
                            </div>
                        </a>                    
                        <div class='content'>
                            <h5>
                                <a class='action' href="{{service.url}}">
                                    <strong>
                                        {{service.title}}
                                    </strong>                                    
                                </a>
                            </h5>
                            {{ service.description }}
                        </div> 
                        <div class='call-to-action'>
                            <a class='action' href="{{service.url}}" aria-label="More info on {{service.title}}">
                                <i class="fa fa-plus" aria-hidden="true"></i> More Info
                            </a>
                        </div>                    
                    </article>
                    
                </div>                
            {% endfor %}			
			<div class='clearfix'></div>
        </div>
	</div>
</section>

<section class='white-row default-row'>
	<div class='container'>
		<div class='row'>
			<div class='col-xs-12'>
				<h2 class='title'>
					Featured Work
				</h2>
			</div>
            {% assign works = site.categories.work | sort: 'sequence' | limit: 3 %}
            {% for work in works %}                
                <div class='col-md-4 col-sm-6 col-xs-12 animated'>
                    <article class='card card-gray'>            
                        <a class="card-image-link action" href="{{ work.url }}" aria-label="More info on {{work.title}}">
                            <div class="card-image" style="background-image:url('{{site.baseurl}}/images/{{work.image}}')">
                            </div>
                        </a>
                        <div class='content'>
                            <h5>
                                <a href='{{ work.url }}' aria-label="More info on {{work.title}}">
                                    <strong> {{work.title}} </strong>
                                </a>
                            </h5>
                            {{ work.description | truncate: 100 }}
                        </div>
                        <div class="call-to-action">
                            <a class='action' href="{{ work.url }}" aria-label="More info on {{work.title}}">
                                <i class="fa fa-plus" aria-hidden="true"></i> More Info
                            </a>
                        </div>            
                    </article>
                </div>                
            {% endfor %}
		</div>
	</div>
</section>

<section class="stripe-row default-row">
	<div class='container'>
		<div class='row'>
			<div class='col-xs-12'>
				<h2 class='title'>
					What our clients are saying
				</h2>
			</div>
		</div>
        <div class='clearfix'></div>
		
		<div class='row animated'>        
		{% for post in site.categories.testimony %}
			
			<div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
				<article class='card card-white'>					
                    <div class='content'>
                        {{post.content}}
                    </div>					
				</article>				
			</div>
			
		{% endfor %}
		</div>		
	</div>
</section>

{% include quote.html %}