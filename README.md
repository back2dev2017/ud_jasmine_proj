# RSS Feed Reader

## Table of Contents

* [Purpose](#purpose)
* [Instructions](#instructions)
* [Code Notes](#code-notes)
* [Contributing](#contributing)
* [Dependencies](#dependencies)
* [References & Credits](#references-&-credits)
* [File List](#file-list)

## Purpose

This is a simple feed reader page that allows organizing an selecting which feed to quickly view.

## Instructions

To run the project, copy all the files listed in the [File List](#file-list) section (ensure folder structure is retained). Optionally, can
clone project from git-hub: https://github.com/back2dev2017/ud_jasmine_proj.git.

Open the index.html file to run the project.

Running the application will also show the results of the Jasmine tests at the bottom of the page. To remove the Jasmine testing display info,
comment out the Jasmine references in the <head></head> of index.html, and also comment out the "<script src="jasmine/spec/feedreader.js"></script>"
at the bottom of the "body" element.

Note that the RSS feeds to view can be altered by changing data in the allFeeds[] array (in app.js). Ensure any feed added has a name (to display in the menu) and
a URL for actual navigation.

To see Jasmine detected failures (note: when changing code to check these, make sure you can put code back to its original state):
 - add/modify entries in the allFeeds[] array and create blank or missing "URL" or "name" values
 - comment out "$('body').addClass('menu-hidden');" (around line 104) in the app.js file
 - put in a fake value (e.g. a non-existent website) on the URL value for the 1st array element ('Udacity Blog')
 - in app.js change the allFeeds array and duplicate the same URL for the 1st two allFeed[] items.
 - modify app.js and comment out the check for array bounds in loadFeed() (starting around line 38)

## Code Notes

The index.html is, of course, the main entry. But most of the content is driven from app.js (js/app.js). Note the script order: the jasmine
test case .js file is loaded last.

The overall structure of the code is to define the feed array (allFeeds[]), then initialize the google API, then call our init() function which
will load the first RSS feed defined in allFeeds[]. To switch feeds, click the menu icon (the pancake image) and select from that list.

Note: the jasmine subfolder has another subfolder called spec (/jasmine/spec/). This is where the Jasmine test cases reside. The other files and
subfolders under jasmine are for the jasmine plugin itself.


## Contributing

As this particular page is for a Udacity Nano degree program, no contributions will be accepted. No contributing instructions are provided

## Dependencies

Quite a lot of dependencies exist in this app. Specifically note the following pulled from web locations:
	http://fonts.googleapis.com/css?family=Roboto:400,100,300,700 </br>
	http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js </br>
	http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js </br>
	http://google.com/jsapi </br>

Jasmine 2.1.2 is used in this app. It appears to be deprecated (it seems the oldest version is 2.6 on the Jasmine site). But all the files
required for Jasmine to function are included in the folder structure of this app (i.e. the /jasmine/ subfolder)


## References & Credits

This project was cloned from https://github.com/udacity/frontend-nanodegree-feedreader.git as per course instruction. The clone was modified
to implement the required functionality.


## File List

	+ index.html 
		css/icomoon.css
		css/normalize.css
		css/style.css
		fonts/icomoon.eot
		fonts/icomoon.svg
		fonts/icomoon.ttf
		fonts/icomoon.woff
		jasmine/lib/jasmine-2.1.2/boot.js
		jasmine/lib/jasmine-2.1.2/console.js
		jasmine/lib/jasmine-2.1.2/jasmine-favicon.png
		jasmine/lib/jasmine-2.1.2/jasmine-html.js
		jasmine/lib/jasmine-2.1.2/jasmine.css
		jasmine/lib/jasmine-2.1.2/jasmine.js
		jasmine/spec/feedreader.js
		js/app.js
