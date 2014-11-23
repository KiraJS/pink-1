NPM_BIN = $(shell npm bin)
NODE_MODULES = $(shell npm root)
JSHINT = $(NPM_BIN)/jshint
JSCS = $(NPM_BIN)/jscs
CSSCOMB = $(NPM_BIN)/csscomb

.PHONY: build
build:: $(NODE_MODULES)
build:: .git/hooks/pre-commit

### Установка npm-зависимостей
$(NODE_MODULES):
	$(info ===> Installing npm packages)
	@npm install

### Прекоммит-хуки
.git/hooks/pre-commit:
	$(info ===> Adding pre-commit hook)
	@ln -sfn $(PWD)/.githooks/pre-commit $(PWD)/.git/hooks

### Проверка код-стайла

# Файлы

JSFILES ?= $(shell find $(PWD) -not -path '$(NODE_MODULES)/*' -name '*.js')
CSSFILES ?= $(shell find $(PWD) -not -path '$(NODE_MODULES)/*' -name '*.css')

.PHONY: test jshint jscs csscomb csscomblint
test: jshint jscs csscomblint

jshint: $(NODE_MODULES)
	$(info ===> Linting JS files using JSHint)
	@$(JSHINT) -c $(PWD)/.jshintrc $(JSFILES)

jscs: $(NODE_MODULES)
	$(info ===> Linting JS files using jscs)
	@$(JSCS) -c $(PWD)/.jscs.json $(JSFILES)

csscomblint: $(NODE_MODULES)
	$(info ===> Linting CSS files using csscomb)
	@$(CSSCOMB) -l $(CSSFILES)

### Форматирование кода

csscomb: $(CSSCOMB)
	$(info ===> Processing CSS files using csscomb)
	@$(CSSCOMB) $(CSSFILES)
