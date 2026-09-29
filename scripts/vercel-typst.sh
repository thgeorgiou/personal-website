#!/bin/sh
# Vercel's build image has neither Typst nor the IBM Plex fonts, so fetch both
# into .typst/ for the CV build. Docker and CI install them system-wide instead.
set -eu

TYPST_VERSION=0.15.1
PLEX_SANS_VERSION=1.1.0
PLEX_MONO_VERSION=1.1.0

DIR=.typst
mkdir -p "$DIR/fonts"

if [ ! -x "$DIR/typst" ]; then
  target="typst-$(uname -m)-unknown-linux-musl"
  curl -fsSL "https://github.com/typst/typst/releases/download/v${TYPST_VERSION}/${target}.tar.xz" \
    | tar -xJ --strip-components=1 -C "$DIR" "${target}/typst"
fi

fetch_font() {
  name=$1
  version=$2
  [ -d "$DIR/fonts/$name" ] && return
  zip="$DIR/$name.zip"
  curl -fsSLo "$zip" "https://github.com/IBM/plex/releases/download/%40ibm/${name}%40${version}/ibm-${name}.zip"
  if command -v unzip >/dev/null; then
    unzip -q "$zip" "ibm-${name}/fonts/complete/ttf/*" -d "$DIR/fonts"
  else
    python3 -m zipfile -e "$zip" "$DIR/fonts"
  fi
  mv "$DIR/fonts/ibm-${name}" "$DIR/fonts/$name"
  rm "$zip"
}

fetch_font plex-sans "$PLEX_SANS_VERSION"
fetch_font plex-mono "$PLEX_MONO_VERSION"
