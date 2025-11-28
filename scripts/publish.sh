#!/usr/bin/env zsh
# shellcheck shell=bash

# Publish to public npm registry
npm publish --tag latest --registry=https://registry.npmjs.org/

# Publish to private Cloudsmith registry
npm publish --tag latest --registry=https://npm.fontawesome.com/
