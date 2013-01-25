<data>
{
    "urlPath": "",
    "urlName": "getting-started",
    "navActive": "Getting Started"
}
</data>

## Installing SSC

Awesome, So you decided to try out SSC! Lets get started with installing the command line tool. You can install SSC two ways.  You may want the second option if you want to contribute to the source code.

#### Normal

First, you can use NPM to install it via `npm install -g ssc`. This will take care of updates and linking for you. 

#### Development

Alternativly, you can grab the [source](https://github.com/kaw2k/static-site-compiler) from github. You will have to link the bin file to wherever you have your scripts. For example:

    cd /usr/local/bin/
    ln -s ~/Development/static-site-compiler/ssj.js ssc


## The Starter Site

Once you have SSC installed, you can get started quickly with a template site. Navigate to where you want your site to be kept and run the command:

    ssc init <folder name>

`<folder name>` should be whatever you want the project folder to be called.  This command will grab the template site from GitHub and clone it in the folder you specified.

### Configuring Your Project

Congratulations! You have your first site up and running! To see it in action, `cd` into the directory and run `grunt`.

    cd <folder name>
    grunt

You will see grunt start up a static server and run the `ssc` command. If you visit `http://localhost:8080/` you will see the page up and running!

Now, lets configure the project to suit our needs. The first thing we want to do is change the origin of our projects git repository. While you are still in the root of the project, run the following commands:
    
    git remote rm origin
    git remote add origin <url>

`<url>` Should be the git repository url you have from your server, or a service such as GitHub.

#### Renaming your branches

Your project should have two main branches, `source` and `gh-pages`. The `source` branch houses the un-compiled version of your site and the `gh-branch` will store the compiled version. If you want to rename these branches (for example, renaming `gh-pages` to `master`), execute the following commands.

    git branch -m <old branch name> <new branch name>

If you choose to rename one, or both, of your branches make sure to update the `settings.js` file accordingly. Find the `developmentBranch` and `productionBranch` and change them to then new branch names.

#### Setting up your URLs

When you are developing your website, it is often the case that your relative urls will change between production and development. In the `settings.js` you can specify development and production url schemes to accommodate for this. If you are using the default grunt server, you should be fine with the default `developmentUrl` value. If your site is not being developed in the root of your server on your development machine you will need to change this.

For example, you might want to have one directory server multiple folders, each representing a different site. If your project was in the root of this directory, you would set the `developmentUrl` to `/<folder name>/public/` where `<folder name>` is the name of your project's folder.

Similarly, if your production site has a sub-domain which is the root of your project, you would change the `productionUrl`. For this documentation, the project is hosted at `kaw2k.github.com/ssc-start/`. The sub-domain would be the value of `productionUrl`, which would be `/ssc-start` in this example.

These two variables allow you to use the `~` character as a placeholder for your base url. If you have a snippet such as `href="~test.html"` and `developmentUrl = '/'`, then the compiled version of the link will be `href="/test.html"`.

#### Committing and Deploying your changes

Now that you have made some modifications to your site, it is time to deploy them to your server! Make sure you followed the previous two steps before continuing.

If you still have grunt running, exit it by pressing `control + c`. Grunt, by default, builds the project for your development environment. Lets build the project for production before committing our code. The next three commands will build your project, commit your changes, and push them to your git repository. **Make sure to execute them from the root of your project**

    ssc build production
    ssc deploy "My first changes"
    git push

If all went well, your changes are now live on the internet!
