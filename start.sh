#!/bin/bash
echo 'running on '$PROFILE
if [ "$PROFILE" = "dev" ]
then 
	echo 'this is dev'
	export START=$(credstash -r 'ap-southeast-2' get test.var)
	echo 'start2 '$START
else 
	echo 'this is not dev'
		export START=$(credstash -r 'ap-southeast-2' get test.var)
		export PROFILE=$START
	echo 'start2 '$START
fi
#credstash -r ap-southeast-2 setup
#export DB_URL=$(credstash -r ap-southeast-2 get DB_URL)
node index.js
# e.g.  
# ./start.sh dev index.js