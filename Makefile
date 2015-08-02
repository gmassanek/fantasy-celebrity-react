SHELL := /usr/bin/env bash
.PHONY: tree

tree:
	tree -I "node_modules"
