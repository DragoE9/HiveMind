# HiveMind
HiveMind is a Swarm/Shine/HENSON inspired tool that allows for one-button puppet prepping. HiveMind runs within your browser to avoid being locked out by Cloudflare Bot-Checks.
## Set-Up
1. Enter your puppets into `Puppets.txt`, one per line.
2. Run `GenSheet.py` either from the command line with `python GenSheet.py` or by double-clicking on the file if your computer is already set up to run .py files with Python by default.
3. Import the `HiveMind.js` script into Tampermonkey either by copying and pasting, or by using the `import from file` button found under the `utilities` tab.
4. Modify Lines 19, 20, and 21 as needed to change the script configuration. The available parameters to modify are:
- apply: if the script should apply your puppets to the WA, or only move them (true/false)
- JP: the region the puppets are being moved to ("string")
- password: the password to log-in to your nations. All your nations must have the same password to use this script. ("string")
5. Open `Sheet.html` in your browser, and prep to your hearts content.
## Controls
There are currently two keybinds:
- M: Prep keybind (think **M**ove). Will either open the next nation (if on the sheet) or try to do the next prep action if on NationStates.net. (The script knows what action it needs to do next based on what page it is on).
- N: Skip keybind (think **N**ext Please). On the sheet only, N will skip the currently targeted nation and move on to the next one in the list without prepping it.

If HiveMind has run out of actions to do on a given page, pressing either keybind will simply close the page.

There is currently no "Go Back" keybind. Refresh the HTML Sheet (F5 or Ctrl+R) to reset the selection cursor on the first nation.
## Notice of Work in Progress
This script is functional. It can be sucesfully used. It is not considered to be finished or feature complete and may be subject to expansion at some point in the future. If and when new features will be added will be subject to:
1. If people actually use this script, and
2. What features those users request the most, and
3. My free time and availability to write those features

Potential Future Features Include:
- A config menu instead of editing the script directly
- A back keybind for navigating the sheet

HiveMind will never have:
- A full GUI like HENSON has
- A ping/auto-login feature
- A region tagging/de-tagging feature
- A standalone browser extension on the Firefox or Chrome stores.

These fall outside of the intended scope of this project.
## Contributions and Derivative Works
If you want to expand this script, add more features, or even just fix a bug, feel free to and make a Pull Request for it. Making a PR with your desired feature will generally be faster then making a request for me to fix it myself.

If you want to make your own project (like a standalone extension) and base your project off of this code, re-using it in whole or in part, feel free to do so. Just respect the terms of the liscense, notably
- Maintain Attribution (credit me)
- Share Alike (make your project open source under the same or similar license)
## Final Disclaimer
This program is provided as-is with no guarantees of legality. It is the responsibility of every user to understand and ensure the scripts they run are legal. You assume all risks.
