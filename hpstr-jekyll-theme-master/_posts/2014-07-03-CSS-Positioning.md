---
layout: post
title: CSS Positioning
description: "How to position elements on the page using CSS"
modified: 2014-07-03
tags: [CSS]
image:
  feature: css.png
  credit: hello techo
  creditlink: http://www.hellotecho.com/css-positioning-absolute-isnt-always-absolute
comments: true
share: true
---



 Positioning elements on the page has everything to do with how the user experiences the space they've entered. It gives developers the opportunity, to some degree, to guide the user down a particular route. It can influence where one is likely to first direct their attention and where one is likely to end up. Positioning can also point toward what a user might end up feeling is the single most important takeaway from their interaction with the page or application.

 There are four types of positioning, and the following is a brief description of the powers each one harnesses. Pay extra close attention to how each interacts with the left/right/bottom/top properties. These interactions demonstrate how these positionings can be useful.

###Static 

 Static positioning is the default. Without explicit definition, all elements are static. They sit in whatever way the cascade of the page dictates. Static elements don't care about top/bottom/left/right properties. Adding one of these will do nothing to a static element.

###Relative

Relative positioning has a tricky name. It might seem like it's measured "relative to" something else, but in fact, it's measured relative to itself, specifically to where it would normally be on the page. This is where the left/right/bottom/top properties become so useful. They tell the relative-positioned element how far and in what direction from its origin to move. These have a special relationship with the next type: absolute. Relatives are often used as parents for absolute-positioned elements. Relative parent elements can be thought of the "relative" that gave "absolutely" everything to its child. 

<figure>
  <img src = "/images/positions.png">
  <figcaption><a href="http://cssdog.com/css_tricks.html" title="The Absolute-Relative Relationship">The Absolute-Relative Relationship</a>.</figcaption>
</figure>

###Absolute

Absolute elements are like the grandchildren of normal flow in that they tend to be once-removed from it. An absolute-positioned element is relative to the next closest parent that isn't positioned as static. Top/bottom/left/right properties will move an absolute element in relation to where it is within that parent and not in relation to its own place on the page. This positioning is uniquely useful because it allows overlapping of other elements. When several siblings are all positioned absolute, a z-index assignment will give them a stacking order for overlap.

<figure>
  <img src = "/images/absolute.png">
  <figcaption><a href="http://www.webopius.com/content/144/css-absolute-and-relative-positioning-explained" title="Absolute Positioning">Absolute positioning</a>.</figcaption>
</figure>

###Fixed

No amount of scrolling in the browser window will move a fixed element. It's stuck. It's the reject element in the normal flow; all the other elements ignore it and act like it doesn't exist. The stubborn fixed element doesn't care though. It stays right where the top/bottom/left/right properies set it, and it overlaps anything flowing under it in body of the document.