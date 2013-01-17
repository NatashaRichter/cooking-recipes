<data>
{
    "urlPath": "",
    "urlName": "templates",
    "navActive": "Templating"
}
</data>

# How to Template

Awesome, So you decided to try out SSC! Lets get started with installing the command line tool.

### Command Line Installation

You can install SSC two ways.  You may want the second option if you want to contribute to the source code.

**Normal**

First, you can use NPM to install it via `npm install -g ssc`. This will take care of updates and linking for you. 

**Development**

Alternativly, you can grab the [source](https://github.com/kaw2k/static-site-compiler) from github. You will have to link the bin file to wherever you have your scripts. For example:

    cd /usr/local/bin/
    ln -s ~/Development/static-site-compiler/ssj.js ssc


### Starter Site

Once you have SSC installed, you can get started quickly with a template site. Navigate to where you want your site to be kept and run the command:

    ssc init <folder name>

`<folder name>` should be whatever you want the project folder to be called.  This command will grab the template site from GitHub and clone it in the folder you specified.

From here, `cd` into the directory and change the origion of your git repository to point to your own GitHub repository.

    cd <folder name>
    git remote rm origin
    git remote add origin <url>

