Local.ch Zendesk-Apps
==================

These are apps we develop for the new Zendesk.
You probably can use those with only small adaptions.

To install an app into zendesk

 - git clone the repository
 - go into one of the apps
 - zip it with `zip -r my.zip .`
 - upload into new Zendesk: settings->apps->create
 - go to "browse" and activate it

 Some tips when developing Zendesk Apps:
 
 - use the [App Tools](http://developer.zendesk.com/documentation/apps/reference/tools.html) - you save a change in your editor, click the refresh icon within zendesk and you see your change. Awesome!
 - to inspect some variables: put "debugger;" into the JS code and inspect with e.g. Chrome

