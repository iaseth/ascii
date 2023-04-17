import json
import os

from bs4 import BeautifulSoup
import requests



UNICODE_BLOCKS_URL = "https://en.wikipedia.org/wiki/Unicode_block"

def get_float(s):
	s = s.replace(',','')
	return float(s)

def get_int(s):
	return int(get_float(s))


def get_script(text, total_chars):
	parts = text.split("(")
	script = {}
	script["name"] = parts[0].strip()
	script["charCount"] = total_chars
	if len(parts) > 1:
		p2 = parts[1]
		px = p2.split(" ")[0].strip()
		script["charCount"] = get_int(px)
	return script

def get_scripts(text, total_chars):
	# Example input: "Latin (15 characters), Common (27 characters)"
	scripts = [s.strip() for s in text.split(",")]
	scripts = [get_script(script, total_chars) for script in scripts]
	return scripts


def main():
	res = requests.get(UNICODE_BLOCKS_URL)
	soup = BeautifulSoup(res.text, "lxml")
	for sup in soup.find_all("sup"):
		sup.decompose()

	table = soup.find("table", class_="wikitable")
	rows = table.find_all("tr")

	blocks = []
	for row in rows:
		tds = row.find_all("td")
		data = [td.text.strip() for td in tds]
		if len(data) == 6:
			block = {}
			block["plane"] = data[0]
			block["blockRange"] = data[1]
			block["blockStart"] = data[1].split("..")[0].strip()
			block["blockEnd"] = data[1].split("..")[1].strip()

			block["blockName"] = data[2]
			block["blockPageURL"] = tds[2].find("a")["href"]

			block["codePoints"] = get_int(data[3])
			block["assignedCharacters"] = get_int(data[4])
			block["scripts"] = get_scripts(data[5], block["assignedCharacters"])
			blocks.append(block)

	jo = {}
	jo["unicodeBlocks"] = blocks
	OUTPUT_JSON_PATH = "unicodeblocks.json"
	with open(OUTPUT_JSON_PATH, "w") as f:
		json.dump(jo, f, indent="\t")
	print(f"saved: {OUTPUT_JSON_PATH}")


if __name__ == '__main__':
	main()
