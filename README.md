# Project Blog
This is the codebase for my project blog website, viewable under [georgewilkins.github.io/project-blog](https://georgewilkins.github.io/project-blog) (and [georgewilkins.co.uk](https://georgewilkins.co.uk), which is aliased to it). It documents personal projects I've worked on.

It is also an experiment in hosting a blog-style website directly and exclusively on the GitHub platform, leveraging a number of GitHub features:
- Using the Markdown-based Wiki to create, manage and host content (incuding images, using the drag-and-drop image support)
- Using [pages](https://pages.github.com/) to build and host the HTML/CSS/JS front end, which is responsible for parsing the Wiki into a stylised website

## How It Works
The content is loaded client-side from the GitHub Wiki using JavaScript. Because I don't have a home page in my Wiki, the default behaviour for GitHub is to display a list of pages, which I take advantage of; A JavaScript `fetch` [retrieves the listing](https://github.com/GeorgeWilkins/project-blog/blob/stable/classes/project.js) and then iterates through the pages.

Each page name is prefixed by a type (e.g. `Project: ` or `Teardown: `) which allows the script to allocate the pages to appropriate sections. A crude [markdown parser](https://github.com/GeorgeWilkins/project-blog/blob/stable/classes/markdown.js) converts the retrieved Wiki [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) into HTML to display.

Any embedded images (e.g. project photographs) are also automatically parsed into `<img>` tags by the parser.

The end result is a dynamic website hosted entirely on GitHub, with no external hosting resources needed.


## About Me
I'm a web software developer by profession, but spend most of my free time working on hardware projects, including:
- Electronics (Repair, Modifications, Scratch-Builds)
- Woodworking
- Metalworking / Welding
- 3D Printing
- Laser Cutting

I document projects of note in the hope that they aid or inspire others looking to take on similar projects of their own.
