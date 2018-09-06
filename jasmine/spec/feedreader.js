describe('Feed Reader Testing Project', function() {
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function, since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready. */

    /* This is our first test suite - a test suite just contains a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.  */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the page?   */
        it('shows the allFeeds data (the allFeeds array) is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed in the allFeeds object and ensures it has a URL defined 
         * and that the URL is not empty. */
        it('shows each feed has a URL and the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* A test that loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.  */
        it('shows each feed has a name and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
        //   this is to check the functioning of the menu

        /*   Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the hiding/showing of the menu element.  */

        it('initially hides the body (which is the menu) by applying the menu-hidden class', function() {
            let idiotdesign = $('body');
            let idiotflag = idiotdesign.hasClass('menu-hidden') ? true : false;
            expect(idiotflag).toBe(true);
        });

         /*   Write a test that ensures the menu changes visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when clicked and does it hide when clicked again.  */
        it('should toggle menu visibility by clicking menu icon (adding/removing the menu-hidden class to the body div)', function() {
            let idiot_icon = $('.menu-icon-link');
            idiot_icon.click();
            let m_visible = $('body').hasClass('menu-hidden') ? false : true;
            expect(m_visible).toBe(true);
            idiot_icon.click();
            m_visible = $('body').hasClass('menu-hidden') ? false : true;
            expect(m_visible).toBe(false);
        });
    });
   
    describe('Initial Entries', function() {
        /* Write a test that ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.  */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        
        it('upon initial load has at least a single .entry element in the .feed container', function(done) {
            let feed_div = document.getElementById('whyNoIdHere');
            feedContent = feed_div.innerHTML;
            expect(feed_div.children.length).toBeDefined();
            expect(feed_div.children.length > 0).toBe(true);
            done();
        });
    });

    describe('New Feed Selection', function() {
        /* Write a test that ensures when a new feed is loaded  by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous. */

        //   the feedContent variable will be used below to verify feed content changes. The concept is to perform the 
        // loadFeed with "id 0", store results in feedContent (the .innerHTML). Then do loadFeed with "id 1" and compare
        // its .innterHTML: it should be different
        let feedcontent = "";

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
            let feed_div = document.getElementById('whyNoIdHere');
            feedContent = feed_div.innerHTML;
        });
        beforeEach(function(done) {
            //   now need to load again because the course material said no test should be dependent on another - otherwise
            // could have saved the results of Initial Entries to a variable (up a level in scope) to compare. Oh well.
            loadFeed(1, function() {
                done();
            });
        });

        it('causes new feed content to load when loading a different feed', function(done) {
            let feed_div = document.getElementById('whyNoIdHere');
            let newFeedContent = feed_div.innerHTML;
            expect(newFeedContent).not.toBe(feedContent);
            done();
        });

        // restore the page to the initial load condition - aka 1st feed in allFeeds array loaded
        afterAll(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
    });

    describe('Feed Array bounds', function() {
        // make sure feed loading checks for allFeed array bounds
        it('causes an error if feed ID is out of bounds (e.g. even if just 1 larger than array)', function() {
            // recall arrays are 0-based, so a 4th item is referenced by array[3]. So using array[4] is out of bounds
            let aLittleTooBig = allFeeds.length;
            expect(function () {
                loadFeed(aLittleTooBig);
            }).toThrow(new Error('function loadFeed: Requested Feed ID is not within allFeed[] bounds'));
        });
        it('causes an error if feed ID is a negative number (e.g. -1)', function() {
            // expect(loadFeed(10000)).toThrow(new Error('function loadFeed: Requested Feed ID is not within allFeed array bounds'));
            expect(function () {
                loadFeed(-1);
            }).toThrow(new Error('function loadFeed: Requested Feed ID is not within allFeed[] bounds'));
        });
    });
});
