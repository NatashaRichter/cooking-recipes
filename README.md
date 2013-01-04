# How to Use

Make sure `ssc` is installed via `npm install ssc` (you may need sudo).

## Commands

- **grunt:** This will spin up a static server looking at the `/public` directory. Furthermore it will watch for any changes in your project and compile the site to the public directory. If you add any additional folders or file types, make sure to add them to the grunt watch files directive.

- **ssc b:** Will manually build the site.

- **ssc d:** This will attempt to copy over the `/public` folder from your source branch to the master branch. You will need to make sure all files in your source branch are commited or this will fail. This does not push or commit anything for you, it just attempts to switch to master, remove its visible contents, and copy the contents of `/public` over.
