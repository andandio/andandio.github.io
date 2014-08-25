---
layout: post
title: Why Keeping it Classy isn't always Elegant
description: "When and how to use class methods."
modified: 2014-07-31
tags: [ruby, class methods]
image:
  feature: self_class.png
  credit: psyblog
  creditlink: http://www.spring.org.uk/2011/04/top-10-self-control-strategies.php
comments: true
share: true
---
##Class Methods

By now, instance methods are becoming fairly regular, maybe even automatic in our Ruby development.  What about class methods though? What are they good for and when might we use them?

There's a lot of chatter out there among Rubyists about the use of class methods, but one thing seems to be largely agreed upon; class methods, as a general rule, should be used sparingly and only when absolutely necessary. 

Class methods exist in a global state, in the context of the arguments they receive, and they can be accessed and called from anywhere. They hold a different perspective altogether from methods of object instance, which reside not just in the context of arguments but also in the state of the specific object they are called upon. In this comparison, class methods are actually closer to procedural programming (from which our increasing sophistication pulls us further away) than they are to object-oriented programming. Class methods aren't tied in the same way to the goings-on of a specific object (even though classes ARE objects -- a chicken/egg creation riddle we won't solve here). 

As we've already seen with global variables, anything global is most often going to be less effective.  If our goal is to keep our programs, and by design, our classes more modular for easier reuse and expansion, then fewer pervasive design qualities should bring us closer to that goal. Referring to instances of objects is preferable to referring to the class as a whole. 

Sometimes, though, it isn't practical to refer to a function at the instance level. We might want to execute something that isn't or can't be tied to a particular object. Our virus predictor challenge held one example. The program was set up to create reports for individual state objects, but then we were asked to create a report for all 50 states. One possible solution was to use a class method. The VirusPredictor class itself could call that nation-wide method because it wouldn't make sense for an individual state object to call a report for the entire country. 

<figure>
  <img src = "/images/vp.jpg.png" alt = "virus predictor example">
  <figcaption>Virus Predictor example.</figcaption> 
</figure>
What are some other possible examples of good use of class methods? One is the necessity to execute a function before an object is ever instantiated. A more specific example would be that of a user setting up a new account; no instance of the user class has been created so we could let the class do the work itself. This is characteristic of any example in which there is no specific context for the function, so the class has to be assigned the work. We might need a sum of all of the objects in our class, or an average age of all our objects. In fact, the Math Class itself is a great example of the necessity of class methods at play. We've seen and used a wide range of class methods for arrays, strings, hashes, etc.; but this post focuses more on class methods that we write into our own classes. 

What are these programmer-created classes supposed to look like? There are three stylistic choices out there that all have slightly different functioning preferences. 

Option 1
 self.bar
<figure>
  <img src = "/images/self.jpg.png" alt = "self for class method">
  <figcaption> Self for class method</figcaption>
</figure>
Using the "self" keyword to identify a class method as something other than an instance is one solution. It's simple and appears to be an often-preferred one from the empirical evidence online. It's a clear-cut way to denote a single class method among a bunch of instance methods in a class. 
Option 2
bar << self
<figure>
  <img src = "/images/shovelself.jpg.png" alt= "shovel class method">
  <figcaption> Shovel Class Method</figcaption>
</figure>  
This syntax works best when setting a group of class methods to a singular block.  In theory it's more organized than the use of  "self" above, with which you'd need to look through all the code to find other potential class methods.  The << self style is also reportedly used more for metaprogramming (where you'd want self to be set for more than a single method), which is definitely not a topic for this blog post.

Option 3
Class_name.bar
<figure>
  <img src = "/images/foobar.jpg.png" alt = "class name dot method">
  <figcaption> Class Name dot method</figcaption>
</figure>  
This is my favorite way to denote a class method. It's clear and there's no figuring out what "self" of the moment is calling the method as in option 1. It doesn't seem to be the Rubyist favorite, however, so I look forward to learning more about why that is. 

Choosing syntax for a class method is in the end a subjective decision that may be best determined by readability and function in context. It's important to remember that class methods don't have access to instance methods or variables, but instance methods can access both class methods and variables. The flexibility and modularity of the instance method makes it the better choice most of the time.  The <a href = "http://blog.codeclimate.com/blog/2012/11/14/why-ruby-class-methods-resist-refactoring/">Code Climate blog</a> offers one of the more articulate descriptions for why it's rare that a class method is the right decision to make:

"...You can't easily swap in a new class, but you can easily swap in a new instance. This encourages building up additional behavior with composition, rather than needing to re-open and expand classes for every change."