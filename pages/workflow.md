<data>
{
    "urlPath": "",
    "urlName": "workflow",
    "navActive": "Workflow"
}
</data>

# How to Work With SSC

There are two ways you can interact with SSC, directly via the `ssc` command and via grunt. There is no hard requirement to have grunt installed, however the starter site comes with some nice features facilitated by grunt.

### Command Line Usage

SSC has several command line options, building, deploying, initiating.

#### Build

    ssc (b | build) [p | production]

The `build` command can be invoked by either `b` or `build`. It has an option flag to build for production. This type of build modifies links to point to your specified sub-domain. 

#### Initialize

    ssc (i | init) <folder name>

The `init` command clones this very website to the folder name you specify.

#### Deploy

    ssc (d | deploy) "Message that will be commited via git"

The `deploy` command automates the process of committing and moving your compiled public folder to your deployment branch. You can specify which branch houses your source code and which branch houses your deployments in the `settings.js` file. This command uses `git add .` and `git commit -a -m "message"`.

When you are finished working on your site and are ready to publish, this would be a typical workflow:

    ssc deploy "Adding new pages!"
    git push

**NB:** After you run this command, you will be left in your `master`, or whichever branch you specified in your `settings.js` file.

Assuming you are using GitHub pages, this will update your site for you automatically. If you are using another host, you will need to set up post-receive hooks to updated your server code.

#### Switch

    ssc (s | switch)

The `switch` command is similar to `deploy`, however it does not commit anything for you. Use this command if you want fine tuned control over what to commit. Perhaps if you are not ready to commit certain pages yet, use this command.

*Before you invoke switch, make sure to commit all your changes in your source branch.*

`switch` does several things for you. It first checks out your deployment branch. From here, it cleans out the branch, and copies over your public folder from your source branch. Now you have the contents of your public folder ready for deployment to your server! This is a typical work flow for deployment:

    *Working in source branch*
    ssc build production
    git add .
    git commit -a -m "Added new pages to site!"
    ssc deploy
    git add .
    git commit -a -m "Updating web page..."
    git push

**NB:** After you run this command, you will be left in your `master`, or whichever branch you specified in your `settings.js` file.

#### Generate

    ssc (generate | g)

When you want to add a file to your site, you can choose to do it manually, or use the `generate` command to give you a template file. It will ask you several question which dictate will go into the meta data of the file.

Where you are when you execute the generate command does matter. It will generate files relative to your current location. 

Lets go over the questions it will ask:

- **Type of file:** The type of file dictates where the file will live in your source code branch. For example, all files of type `page` will live in the `page/` folder. 
- **Filename:** The name of the file as it is seen in the source code branch.
- **Extension:** The extension of the file.
- **ID:** SSC uses id's to differentiate files. If no ID is given, a file uses its filename as its ID. It is a good practice to provide IDs so there are no conflicts as your site grows larger.
- **Url Name:** This variable dictates the last segment of the url the file will have once it is in production. For example, if you have a file `help.html` and a site root of `kaw2k.github.com/`, by default, the file will live at `kaw2k.github.com/help.html`. If you change the `urlName` variable to `live.html` then the new page would live at `kaw2k.github.com/live.html`.
- **Url Path:** This variable dictates the segments between the root of your website and the last segment of the url. For example, lets say you have a file `help.html` and it lives in `pages/` in your source branch. By default, it will have `page` as a url segment, making the final url be `kaw2k.github.com/page/help.html`. If you provide `contact/` as the value, the new url would be `kaw2k.github.com/contact/help.html`.

    Using `/` as a value will have the page live in the root of your project. Notice however, in the generated file, the actual value will be empty. This is the correct value. A limitation with the command line interface requires the us of a `/` for this value.

### Grunt Usage

There one main usage for grunt, that is to watch and compiling your project. Running `grunt` from anywhere in your project will first, compile your project, it will then spin up a server on port `8080`, and lastly it will watch a subset of your folders for any changes and re-compile the site on the fly. You can add more folders by modifying the `files` array under the `watch` object.

You can easily add more grunt processes and hook them into your watch direct. For example, you could add a LessCSS compilation step that compiles less code in your public folder.

