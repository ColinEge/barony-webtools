import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/colinege/.local/share/Steam/steamapps/common/Welcome to the Game III/WTTGSD/Content/RawFiles/WebSites/screenshots";

const sites: Record<string, { pages: string[] }> = {};

for (const site of fs.readdirSync(ROOT, { withFileTypes: true })) {
	if (!site.isDirectory()) {
		continue;
	}

	const pages = fs.readdirSync(
		path.join(ROOT, site.name)
	)
		.filter(file => file.endsWith(".png"))
		.map(file => file.replace(".png", ""));

	sites[site.name] = {
		pages
	};
}

const output = `export const PAGES = ${JSON.stringify(
	sites,
	null,
	4
)} as const;
`;

const outputFile = "src/lib/games/wttg3/data/pages.ts";

fs.mkdirSync(path.dirname(outputFile), {
	recursive: true
});

fs.writeFileSync(outputFile, output);

console.log(`Generated ${outputFile}`);

// npx tsx write-tree.ts