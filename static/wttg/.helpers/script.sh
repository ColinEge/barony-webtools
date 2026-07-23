#!/usr/bin/env bash

ROOT="./"

read -r -d '' BLOCK <<'EOF'



/* === Key highlight === */
.CFTAG,
.CPTAG {
	outline: 3px solid #ef4444;
	outline-offset: 2px;
	border-radius: 9999px;
}
EOF

find "$ROOT" -type f -name "style.css" | while read -r css; do
	if grep -q "Key highlight" "$css"; then
		echo "Skipping $css"
		continue
	fi

	printf "%s\n" "$BLOCK" >> "$css"
	echo "Updated $css"
done