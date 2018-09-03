#!/bin/bash
###################
# reveal.js-local #
###################

# To make this file runnable:
#     $ chmod +x *.sh.command

banner="reveal.js-local"
projectHome=$(cd $(dirname $0); pwd)

displayIntro() {
   cd $projectHome
   echo
   echo $banner
   echo $(echo $banner | sed s/./=/g)
   pwd
   echo
   }

publishWebFiles() {
   cd $projectHome
   publishWebRoot=$(grep ^DocumentRoot /private/etc/apache2/httpd.conf | awk -F\" '{ print $2 }')
   publishSite=$publishWebRoot/centerkey.com
   publishFolder=$publishSite/reveal.js-local
   publish() {
      echo "Publishing:"
      echo $publishFolder
      mkdir -p $publishFolder/assets
      cp -v presentation-template.html $publishFolder
      cp -v assets/*                   $publishFolder/assets
      echo "\n<!-- Published: $(date) -->" >> $publishFolder/presentation-template.html
      echo
      }
   test -w $publishSite && publish
   }

displayIntro
publishWebFiles
