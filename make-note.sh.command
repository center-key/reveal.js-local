#!/bin/sh
#####################
#  reveal.js-local  #
#####################

# To make this file runnable:
#    $ chmod +x *.sh.command

websiteFolder=~/Sites/centerkey.com/files/reveal.js-local
readMeFile=$websiteFolder/read-me.txt
echo
echo "*** reveal.js-local ***"
cd $(dirname $0)
lines=$(grep -n "<html" presentation-template.html | sed s/:.*//)
head -$lines < presentation-template.html | grep "\!\-\- [^-]" | sed s/\<\!\-\-.// | sed "s/ *\-\->//" > $readMeFile
echo "Output:" $(ls $readMeFile)
echo
echo "----------------------------------------------------------------------"
cat $readMeFile
echo "----------------------------------------------------------------------"
echo
cp *.html *.png $websiteFolder
cd $websiteFolder
pwd
ls -l
