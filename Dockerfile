# Base stage for building the static files
FROM node:lts AS base
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Typst and fonts for the PDF CV
ARG TYPST_VERSION=0.15.1
RUN apt-get update \
  && apt-get install -y --no-install-recommends fonts-ibm-plex xz-utils \
  && rm -rf /var/lib/apt/lists/* \
  && curl -fsSL "https://github.com/typst/typst/releases/download/v${TYPST_VERSION}/typst-$(uname -m)-unknown-linux-musl.tar.xz" \
  | tar -xJ --strip-components=1 -C /usr/local/bin "typst-$(uname -m)-unknown-linux-musl/typst"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Runtime stage for serving the application
FROM nginx:mainline-alpine-slim AS runtime
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
