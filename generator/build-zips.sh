#!/bin/bash

# Build Audio ZIP Files
# Usage: ./build-zips.sh [language1] [language2] ...
# If no languages specified, builds ZIPs for all available languages

echo "🚀 Audio ZIP Builder"
echo "==================="

if [ $# -eq 0 ]; then
    echo "📦 Building ZIPs for ALL languages..."
    node build-audio-zips.js
else
    echo "📦 Building ZIPs for specified languages: $*"
    node build-audio-zips.js "$@"
fi

echo ""
echo "📁 Available ZIP files:"
ls -la output/audio/*.zip 2>/dev/null || echo "No ZIP files found."