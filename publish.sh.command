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
   echo "Publishing:"
   cp -v presentation-template.html docs/index.html
   echo
   }

openPresentation() {
   cd $projectHome
   echo "Opening:"
   echo presentation-template.html
   sleep 2
   open presentation-template.html
   echo
   }

displayIntro
publishWebFiles
openPresentation
