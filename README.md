# Demo [![CircleCI](https://circleci.com/gh/roychoo/upload-invoices.svg?style=svg)](https://circleci.com/gh/roychoo/upload-invoices)

http://ec2-52-221-212-204.ap-southeast-1.compute.amazonaws.com:3000/

# Getting Started

1. ```yarn```
2. ```yarn start```

# Structure

1. This is based on the react/redux starter https://github.com/davezuko/react-redux-starter-kit
2. The codes for invoice exists in ```src/routes/Invoice```
3. The reason of such structure is to allow code splitting based on routes.
4. Components related to a route only should live in the ```routes``` folder, otherwise should live in ```src/components```
5. Due to time, didn't practice TDD in this but there are some basic tests.
6. There is CI/CD, any commits will trigger a CI/CD job which you will be able to see changes on the live URL above.
