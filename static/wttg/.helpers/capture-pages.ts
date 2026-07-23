import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const OUTPUT = path.resolve("./screenshots");

function findHtmlFiles(dir: string): string[] {
	const files: string[] = [];

	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			files.push(...findHtmlFiles(full));
		} else if (entry.name.endsWith(".html")) {
			files.push(full);
		}
	}

	return files;
}

async function main() {
	const pages = findHtmlFiles(ROOT);

	const browser = await chromium.launch({
		headless: true
	});

	const page = await browser.newPage({
		viewport: {
			width: 1920,
			height: 1080
		}
	});

	for (const file of pages) {
		const relative = path.relative(ROOT, file);

		const name = relative
			.replaceAll("\\", "_")
			.replace(".html", ".png");

		const output = path.join(OUTPUT, name);

		fs.mkdirSync(path.dirname(output), {
			recursive: true
		});

		console.log(`Capturing ${relative}`);

		await page.goto(`file://${file}`, {
			waitUntil: "networkidle"
		});

		await page.waitForTimeout(500);

		await page.screenshot({
			path: output,
			fullPage: true
		});
	}

	await browser.close();
}

main().catch(error => {
	console.error(error);
	process.exit(1);
});