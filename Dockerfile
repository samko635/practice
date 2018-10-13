FROM node:8.11.2-jessie


# Configure Credstash
RUN apt-get -y install curl
RUN curl -O https://bootstrap.pypa.io/get-pip.py
RUN python2.7 get-pip.py
RUN pip install credstash

# Environment Profile
ARG PROFILE
ENV ENV_PROFILE=$PROFILE
ENV TEST $(credstash get test.var)
RUN echo 'Running on '$ENV_PROFILE' with '$TEST
RUN export TEST2=$(credstash get test.var)
RUN echo 'TESTING 2'$TEST2

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy package files for npm install before copying app files that are less volatile
COPY package*.json ./

# Install application dependencies
RUN npm install 

COPY . .

EXPOSE 3002
#CMD [ "mocha" ]
#CMD [ "npm", "test" ]
ENTRYPOINT ["npm", "start"]
#CMD ["${COMMANMD}", "${ARG}"]
