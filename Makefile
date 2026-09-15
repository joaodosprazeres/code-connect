.PHONY: install install-web install-api \
        dev dev-web dev-api \
        build build-web \
        lint lint-web lint-api \
        clean

WEB_DIR := apps/web
API_DIR := apps/api
API_PORT := 8000

# ---- install --------------------------------------------------------------

install: install-web install-api

install-web:
	pnpm install

install-api:
	cd $(API_DIR) && uv sync

# ---- dev --------------------------------------------------------------

dev:
	@trap 'kill 0' EXIT; \
	$(MAKE) dev-web & \
	$(MAKE) dev-api & \
	wait

dev-web:
	pnpm --filter web dev

dev-api:
	cd $(API_DIR) && uv run uvicorn api.main:app --app-dir src --reload --port $(API_PORT)

# ---- build --------------------------------------------------------------

build: build-web

build-web:
	pnpm --filter web build

# ---- lint --------------------------------------------------------------

lint: lint-web lint-api

lint-web:
	pnpm --filter web lint

lint-api:
	cd $(API_DIR) && uv run ruff check .

# ---- clean --------------------------------------------------------------

clean:
	rm -rf node_modules $(WEB_DIR)/node_modules $(WEB_DIR)/dist $(API_DIR)/.venv
