SHELL := /usr/bin/env bash
.PHONY: tree

tree:
	tree -I "bower_components|node_modules"
