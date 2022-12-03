# Project Blog
This is the codebase for my project blog website, viewable under [georgewilkins.github.io/project-blog](https://georgewilkins.github.io/project-blog) (and [georgewilkins.co.uk](https://georgewilkins.co.uk), which is aliased to it). It documents personal projects I've worked on.

It is also an experiment in hosting a (non-commercial) blog-style website directly and exclusively on the GitHub platform, leveraging a number of GitHub features:
- Using the Markdown-based Wiki to create, manage and host content (incuding images, using the drag-and-drop image support)
- Using [GitHub Pages](https://pages.github.com/) to build and host the HTML/CSS/JS front end
- Using a [GitHub Action](https://github.com/GeorgeWilkins/project-blog/blob/stable/.github/workflows/jekyll-gh-pages.yml) to auto-pull the Wiki Markdown files into site during publishing, which then parses them into styled HTML pages

## Background
The projects site itself is a very simple and conventional collection of HTML, CSS and JS. Maintaining this is easy with the [built-in VSCode](https://vscode.github.com/) offered by GitHub.

However I wanted to keep the site *content* out of the main repository and to leverage the better [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) editing and drag-and-drop attachment/image handling offered by GitHub's Wiki system.

The idea is to make adding new content to the site as simple as possible; otherwise I'd never get around to doing it.

## How It Works
Normally a *Pages* site auto-builds itself upon any push to the `stable` branch.

I've modified the standard deployment action to include steps that:
1. Pull down the repository (https://github.com/georgewilkins/project-blog.git)
2. Pull down the *Wiki* repository (https://github.com/georgewilkins/project-blog.wiki.git)
3. Create a JSON index file containing a list of the Markdown files within the Wiki
4. Copies the Markdown files to the local repository (under `projects/`)
5. Publishes the resulting codebase to *Pages*

Because the resulting Markdown (and JSON index) files are under the same domain as the deployed *Pages* site, there are no CORS issues when I [load them client-side](https://github.com/GeorgeWilkins/project-blog/blob/stable/classes/wiki.js) using JavaScript.

Each Wiki page name is prefixed by a type (e.g. `Project: ` or `Teardown: `) which allows the script to allocate the pages to appropriate sections.

A crude [markdown parser](https://github.com/GeorgeWilkins/project-blog/blob/stable/classes/markdown.js) converts the retrieved Wiki Markdown into HTML to display. Any embedded images (e.g. project photographs) are also automatically parsed into `<img>` tags by the parser.

The end result is a static website hosted entirely on GitHub, with easily editable content.

# About The Author
I'm a software developer by profession, but spend most of my free time working on hardware projects, including:
- Electronics (Repair, Modifications, Scratch-Builds)
- Woodworking
- Metalworking / Welding
- 3D Printing
- Laser Cutting

Many of these projects relate to my passions; including cars, high fidelity audio, and interior/exterior design.

I document projects of note in the hope that they aid or inspire others looking to take on similar projects of their own.

If you have any questions or comments regarding this repository, the project blog or and projects I've published, please [get in touch](mailto:projects@georgewilkins.co.uk).
