#!/bin/bash
echo 'running on '$PROFILE
if [ "$PROFILE" = "dev" ]
then 
	echo 'this is dev'
	export START=$(credstash get test.var)
else 
	echo 'this is not dev'
fi
#credstash -r ap-southeast-2 setup
#export DB_URL=$(credstash -r ap-southeast-2 get DB_URL)
node index.js
# e.g.  
# ./start.sh dev index.js