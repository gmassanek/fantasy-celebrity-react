SHELL := /usr/bin/env bash
.PHONY: tree clean install refresh run

tree:
	tree -I "bower_components|node_modules"

clean:
	rm -rf node_modules bower_components

install:
	npm install && bower install

refresh: clean install

run:
	gulp
