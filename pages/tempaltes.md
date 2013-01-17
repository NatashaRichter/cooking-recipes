<data>
{
    "urlPath": "",
    "urlName": "templates",
    "navActive": "Templating"
}
</data>

# Templates and Directives

SSC has a few built in directives to help you develop your site. 

### Partials

A partial is any chunk of code or content that gets repeatedly used accross your site. Perhaps it is your navigation, your footer, a tag cloud, a partial can be anything. It can consist of dynamic or static code.

One thing to note, you can give your partial meta data and dynamic code. When you do this, its contents will be transfered over to the page it gets inserted into. If the page already has meta data which the partial defines, the page will always take precedence retaining its information.

**Example:** How to make a simple nav element. We would put this code within `partials/nav.html` and surround it with `<js>` tags.

    this.nav = [
        {url: '', title: 'Home'},
        {url: 'install.html', title: 'Installation'},
        {url: 'workflow.html', title: 'Workflow'},
        {url: 'templates.html', title: 'Templating'},
        {url: 'docs.html', title: 'Docs'}
    ];

    _.each(this.nav, function(navEl) {
        if (this.navActive && this.navActive === navEl.title) {
            navEl.active = true;
        }
    }, this);

The `this` keyword referees to the final page object which the nav partial gets imported into. Instead of making the making the links by hand, you could easily poll the `site` object like so.

    this.nav = _.filter(site.pages, function(page) {
        return page.type === 'page';
    });

Now, instead of using the custom `url` field, we would use `urlFull` which is a property of the page object.

### Layouts

