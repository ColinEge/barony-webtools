#!/usr/bin/env bash

ROOT="./"

read -r -d '' BLOCK <<'EOF'
/* === Key highlight === */
/* Plain text anchors */
a.CFTAG:not(:has(> *)),
a.CPTAG:not(:has(> *)) {
    outline: 3px solid red;
    outline-offset: 2px;
    border-radius: 999px;
}

/* Wrapped element (img, div, p, span, etc.) */
a.CFTAG > *,
a.CPTAG > * {
    outline: 3px solid red;
    outline-offset: 2px;
    border-radius: 999px;
}

/* Ignore marker elements */
.PTAG:empty,
.CFTAG:empty,
.CPTAG:empty {
    display: none;
}
/* === Key highlight End === */
EOF

find "$ROOT" -type f -name "style.css" | while read -r css; do
	if grep -q "Key highlight" "$css"; then
		echo "Skipping $css"
		continue
	fi

	printf "\n\n%s\n" "$BLOCK" >> "$css"
	echo "Updated $css"
done