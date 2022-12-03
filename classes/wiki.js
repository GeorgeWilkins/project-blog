import {Markdown} from './markdown.js';

/* Example 'index.json' Contents
[
  {
    "type": "directory",
    "name": ".",
    "contents": [
      {
        "type": "file",
        "name": "Home.md"
      },
      {
        "type": "file",
        "name": "Project:-DT1770-Headset-Modification.md"
      },
      ...
      {
        "type": "file",
        "name": "Project:-Touch-Screen-Coffee-Table.md"
      },
      {
        "type": "file",
        "name": "index.json"
      }
    ]
  },
  {
    "type": "report",
    "directories": 0,
    "files": 10
  }
]
*/

class Wiki
{
    static async getPages(path)
    {
        const indexJson = await fetch(`${path}/index.json`)
            .then(response => response.json())
            .catch(error => {
                console.error('Project Indexing Failed', error);
            });
console.log("INDEX", indexJson);
        return indexJson[0].contents
            .map(entry => `${path}/${entry.name}`)
            .filter(name => name.endsWith('.md'));
    }

	static async getArticle(path)
	{
		const pageMarkdown = await fetch(path)
			.then(response => response.text());

        const summaryMarkdown = pageMarkdown.split('###').shift();
        const detailsMarkdown = `###${pageMarkdown.split('###').pop()}`;

        const summaryHtml = Markdown.toHTML(summaryMarkdown);
        const detailsHtml = Markdown.toHTML(detailsMarkdown);

        const article = document.createElement('article');
		const summary = document.createElement('summary');
		const details = document.createElement('details');
		const full = document.createElement('div');
		const articleRotation = 1.0;
		const photographRotation = 5.0;
		const blockquoteRotation = 0.5;

		full.innerHTML = fullHTML;

		article.append(details);
		details.append(summary);
		details.append(full);

		article.style.transform = `rotate(${(Math.random() * articleRotation * 2) - articleRotation}deg)`;
		Array.from(article.getElementsByTagName('figure')).forEach(figure => {
			figure.style.transform = `rotate(${(Math.random() * photographRotation * 2) - photographRotation}deg)`;
		});
		Array.from(article.getElementsByTagName('blockquote')).forEach(blockquote => {
			blockquote.style.transform = `rotate(${(Math.random() * blockquoteRotation * 2) - blockquoteRotation}deg)`;
		});

		//details.setAttribute('open', true);

		return article;
	}
}

export {Wiki};
