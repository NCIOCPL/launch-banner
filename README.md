
## How to run
1. `nvm use`
2. `npm ci`
3. `npm run dev`

## Files
I am going to skip over the normal things here and just point out either vite or app specific things to notice.

* src
  * alert.html - this is the contents of the banner to be added to the page.
	* fonts.scss - this is a stylesheet to be added to the head for fonts.
	* banner.scss - this is stylesheet for the banner which is added to the shadowRoot
	* main.ts - this is the main entrypoint. For now this runs as soon as it gets executed and just adds the banner as the first child. In the future we need to make sure it comes after a skipnav link.
	* vite-env.d.ts - vite stuff
* index.html - this is the main page for the "app". Obviously, this does not matter much as it is only used for testing.
  * this contains the contents of a bootstrap example page. This demonstrates that our CSS does not conflict with theirs and that the banner can be embedded.
* vite.config.js - the vite config. Think webpack.config.js but only much, much smaller.
