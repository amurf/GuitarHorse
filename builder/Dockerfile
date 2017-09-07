FROM node:8.4

WORKDIR /build

# Copy this one first so we don't need to re-install the packages every time
# we touch any file.
COPY package.json /build/
RUN npm install --quiet && npm install --quiet webpack -g

# Now copy all the rest.
COPY .babelrc /build/
COPY webpack.config.js /build/

CMD webpack --color --hide-modules --watch
