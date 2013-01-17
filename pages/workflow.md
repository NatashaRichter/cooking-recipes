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

    ssc (d | deploy)

The `deploy` command automates the process of moving your compiled public folder to your deployment branch. You can specify which branch houses your source code and which branch houses your deployments in the `settings.js` file.

*Before you invoke deploy, make sure to commit all your changes in your source branch.*

`deploy` does several things for you. It first checks out your deployment branch. From here, it cleans out the branch, and copies over your public folder from your source branch. Now you have the contents of your public folder ready for deployment to your server! This is a typical work flow for deployment:

    *Working in source branch*
    ssc build production
    git add .
    git commit -a -m "Added new pages to site!"
    ssc deploy
    git add .
    git commit -a -m "Updating web page..."
    git push
    
Assuming you are using GitHub pages, this will update your site for you automatically. If you are using another host, you will need to set up post-receive hooks to updated your server code.


### Grunt Usage

There one main usage for grunt, that is to watch and compiling your project. Running `grunt` from anywhere in your project will first, compile your project, it will then spin up a server on port `8080`, and lastly it will watch a subset of your folders for any changes and re-compile the site on the fly. You can add more folders by modifying the `files` array under the `watch` object.

You can easily add more grunt processes and hook them into your watch direct. For example, you could add a LessCSS compilation step that compiles less code in your public folder.

