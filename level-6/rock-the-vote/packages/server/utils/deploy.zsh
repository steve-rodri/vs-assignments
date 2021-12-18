#!/usr/bin/ zsh

heroku login
git add --all
git commit -m "new production build"
git push production main


