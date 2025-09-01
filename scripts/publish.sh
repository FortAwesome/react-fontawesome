#!/usr/bin/env zsh
# shellcheck shell=bash

# Publish to public npm registry
npm publish --tag latest

# Publish to private Cloudsmith registry
npm publish --tag latest --registry=https://npm.fontawesome.com/
