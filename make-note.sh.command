#!/bin/sh
###################
# reveal.js-local #
###################

# To make this file runnable:
#    $ chmod +x *.sh.command

webServerRoot=$(grep ^DocumentRoot /private/etc/apache2/httpd.conf | awk -F\" '{ print $2 }')
webServerFolder=$webServerRoot/centerkey.com/files/reveal.js-local
projectFolder=$(cd $(dirname $0); pwd)

makeReadMe() {
   cd $projectFolder
   readMeFile=$webServerFolder/read-me.txt
   lines=$(grep -n "<html" presentation-template.html | sed s/:.*//)
   head -$lines < presentation-template.html | grep "\!\-\- [^-]" | sed s/\<\!\-\-.// | sed "s/ *\-\->//" > $readMeFile
   echo
   echo "----------------------------------------------------------------------"
   cat $readMeFile
   echo "----------------------------------------------------------------------"
   echo
   }

copyFilesToWebServer() {
   cd $projectFolder
   cp *.html *.png $webServerFolder
   cd $webServerFolder
   echo "Web folder:"
   pwd
   ls -l
   echo
   }

publish() {  #WIP...
   cd $projectHome/website/httpdocs
   publishWebRoot=$(grep ^DocumentRoot /private/etc/apache2/httpd.conf | awk -F\" '{ print $2 }')
   publishFolder=$publishWebRoot/centerkey.com/www.dnajs.org
   copyWebFiles() {
      echo "Publishing:"
      echo $publishFolder
      cp -R * $publishFolder
      mkdir -p $publishFolder/../www.dnajs.com/
      mv placeholder.html $publishFolder/../www.dnajs.com/index.html
      echo
      }
   [ -w $publishFolder ] && copyWebFiles
   }

echo "reveal.js-local"
echo "==============="
makeReadMe
copyFilesToWebServer
