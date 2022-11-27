# Project Blog
This is the codebase for my project blog website, viewable under [georgewilkins.github.io/project-blog](https://georgewilkins.github.io/project-blog) (and [georgewilkins.co.uk](https://georgewilkins.co.uk), which is aliased to it). It documents personal projects I've worked on.

It is also an experiment in hosting a blog-style website directly and exclusively on the GitHub platform, leveraging a number of GitHub features:
- Using the Markdown-based Wiki to create, manage and host content (incuding images, using the drag-and-drop image support)
- Using [pages](https://pages.github.com/) to build and host the HTML/CSS/JS front end, which is responsible for parsing the Wiki into a stylised website

## How It Works
The website is a very simple and conventional collection of HTML, CSS and JS.

However the content is dynamically loaded *client-side* from the project's [GitHub Wiki](https://github.com/GeorgeWilkins/project-blog/wiki) using JS.

The GitHub Wiki provides a few [automatically generated index URLs](https://github.com/GeorgeWilkins/project-blog/wiki/_pages) (e.g. `/_toc` and `/_pages`), which I take advantage of by performing a JavaScript `fetch` to [retrieve the listing](https://github.com/GeorgeWilkins/project-blog/blob/stable/classes/project.js) and then iterate through the pages. This avoids needing to hard-code the projects into the codebase itself.

Building and storing my content in the Wiki also provides the ability to use GitHub's markdown formatting tools *and* the built-in image hosting feature, which provides easy drag-and-drop image uploads.

Each Wiki page name is prefixed by a type (e.g. `Project: ` or `Teardown: `) which allows the script to allocate the pages to appropriate sections.

> At this point we can either fetch the HTML version of the page and pluck out the already converted HTML, or add `.md` to the page URL and get the raw Markdown and parse it ourselves. For example:
> - **HTML Page**: [.../Project:-DT1770-Headset-Modification](https://raw.githubusercontent.com/wiki/GeorgeWilkins/project-blog/Project:-DT1770-Headset-Modification)
> - **Markdown Document**: [.../Project:-DT1770-Headset-Modification.md](https://raw.githubusercontent.com/wiki/GeorgeWilkins/project-blog/Project:-DT1770-Headset-Modification.md)
> 
> I've chosen to use the cleaner Markdown version and parse it myself, as this seems the more flexible and efficient option; but I haven't performance tested the two approaches.

A crude [markdown parser](https://github.com/GeorgeWilkins/project-blog/blob/stable/classes/markdown.js) converts the retrieved Wiki [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) into HTML to display. Any embedded images (e.g. project photographs) are also automatically parsed into `<img>` tags by the parser.

The end result is a dynamic website hosted entirely on GitHub, with no external hosting resources needed.

## About Me
I'm a software developer by profession, but spend most of my free time working on hardware projects, including:
- Electronics (Repair, Modifications, Scratch-Builds)
- Woodworking
- Metalworking / Welding
- 3D Printing
- Laser Cutting

Many of these projects relate to my passions, including performance cars, high fidelity audio, airsoft and interior/exterior design.

I document projects of note in the hope that they aid or inspire others looking to take on similar projects of their own.

I welcome any questions and suggestions you may have.
