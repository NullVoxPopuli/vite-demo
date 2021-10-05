#!/bin/bash

default_app="../ember-app"
app=${1:-$default_app}

rm -rf ./embroider

git clone git@github.com:embroider-build/embroider.git
cd embroider
git remote add alex git@github.com:alexlafroscia/embroider.git
git remote add nvp git@github.com:NullVoxPopuli/embroider.git
git fetch nvp
git fetch alex
git checkout vite-packager
yarn
git checkout nvp/add-link-all-script -- ./link-all.sh
yarn compile
./link-all.sh ../$app


cd ../$app
ember s
