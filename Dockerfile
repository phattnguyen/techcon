FROM cypress/browsers:node16.13.2-chrome97-ff96

WORKDIR /usr/src/app
# RUN ln -s /usr/bin/nodejs /usr/bin/node
COPY package.json cypress.json ./

# copy app source
COPY scripts ./scripts
COPY cypress ./cypress

RUN npm i

# CMD [ "http-server", "-c-1", "-p80", "./cypress/reports/mochareports" ]
