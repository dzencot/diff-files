install:
	npm install

lint:
	npm run eslint ./

test:
	npm test

run:
	npm run babel-node -- ./src/bin/${s}

build:
	rm -rf dist
	npm run build

publish:
	npm publish

.PHONY: test
