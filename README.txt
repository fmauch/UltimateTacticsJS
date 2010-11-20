ABOUT
-----

My friend Felix Mauch tried to rewrite the Playbook application used to
show Ultimate Frisbee tactics on a PC for the web using PHP and a Flash
generating library and ran into some problems.
I told him to write it in JavaScript and began to write a first prototype
myself.
The result is this UltimateTactics application which is completely written
in JavaScript using the RaphaelJS graphics library (http://raphaeljs.com/)
and RequireJS for module management (http://requirejs.org/).


FEATURES
--------

- Display a field with players on it and move them towards the middle of the field.


REQUIREMENTS
------------

Any modern browser which runs JavaScript and is supported by the RaphaelJS library.


LICENSE
-------

UltimateTactics is licensed under GPLv3 or later (see LICENSE.txt).
RaphaelJS is licensed under the MIT license.
RequireJS is licensed under the MIT or new BSD license.


DOWNLOADING
-----------

UltimateTactics can be downloaded from its Github page:

http://github.com/mkroehnert/UltimateTactics


INSTALLATION
------------

There are three possible ways to run UltimateTactics:

1. Put the downloaded files in a directory and open the index.html file.
2. Put the files on a webserver and access the index.html file over the internet.
3. Just use the js files in the scripts directory to embed the Application:
     First add the tag <div id="UltimateTacticsViewer"></div> to the html page
     (the name id of this div can be changed in Options.js).
     Then by adding the following script tag in <head></head> section:
     <script language="JavaScript" data-main="UltimateTacticsMain" src="scripts/require.js" type="text/javascript">
     </script>
     

PROBLEMS
--------

Feature requests and bugs can be reported on the Github issue page:

http://github.com/mkroehnert/UltimateTactics/issues
