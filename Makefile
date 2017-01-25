install:
	npm install

lint:
	npm run eslint ./

test:
	npm test

run:
	npm run babel-node -- ./src/bin/gendiff.js $(1) $(2)

build:
	rm -rf dist
	npm run build

publish:
	npm publish

.PHONY: test
