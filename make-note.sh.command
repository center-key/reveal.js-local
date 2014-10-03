#!/bin/sh
#####################
#  reveal.js-local  #
#####################

# To make this file runnable:
#    $ chmod +x *.sh.command

webFolder=~/Sites/centerkey.com/files/reveal.js-local
readMeFile=$webFolder/read-me.txt
cd $(dirname $0)
lines=$(grep -n "<html" presentation-template.html | sed s/:.*//)
head -$lines < presentation-template.html | grep "\!\-\- [^-]" | sed s/\<\!\-\-.// | sed "s/ *\-\->//" > $readMeFile
echo
echo "----------------------------------------------------------------------"
cat $readMeFile
echo "----------------------------------------------------------------------"
echo
cp *.html *.png $webFolder
cd $webFolder
echo "Web folder:"
pwd
ls -l
