#!/bin/bash

cd public
git init

git config user.name "Holman Gao"
git config user.email "holman@golmansax.com"

git add .
git commit -m 'Deploy to Github Pages'
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
