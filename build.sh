#!/bin/sh
# Build the site exactly as GitHub Pages does, in Docker. No local Ruby needed.
docker run --rm -v "$PWD":/srv -w /srv -e BUNDLE_PATH=/srv/vendor/bundle ruby:3.3-slim sh -c '
  apt-get update -qq >/dev/null 2>&1 && apt-get install -y -qq --no-install-recommends build-essential git >/dev/null 2>&1
  gem install bundler -N >/dev/null 2>&1
  bundle install --quiet
  bundle exec jekyll build --trace
'
