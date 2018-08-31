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

The file list is included in the [section](#file-list) at the bottom of this readme

The key to setting up the app is to set values in the allFeeds[] array (in app.js). Ensure any feed added has a name (to display in the menu) and
a URL for actual navigation.

Running the application will also show the results of the Jasmine tests at the bottom of the page. To remove the Jasmine testing display info,
comment out the Jasmine references in the <head></head> of index.html, and also comment out the "<script src="jasmine/spec/feedreader.js"></script>"
at the bottom of the <body></body>.

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
	+ http://fonts.googleapis.com/css?family=Roboto:400,100,300,700
	+ http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
	+ http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js
	+ http://google.com/jsapi

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
