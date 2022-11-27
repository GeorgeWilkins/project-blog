import {Markdown} from './markdown.js';

class Wiki
{
	constructor(path)
	{
		this.path = path;
	}

    async getIndex()
    {
        return await fetch(this.path)
            .then(response => response.text())
            .then(html => {
                return html;
            })
            .catch(error => {
                console.error('Project Indexing Failed', error);
            });
    }

    async getPages()
    {
        const domParser = new DOMParser();
        const indexHtml = await getIndex();
        const indexDocument = domParser.parseFromString(indexHtml, 'text/html');
        const contentElement = indexDocument.getElementById('wiki-content');
        return [...contentElement.querySelectorAll('a[href]')]
            .map(a => ({
                'name': a.innerText,
                'url': a.href
            }))
            .filter(pageUrl => pageUrl.name !== 'Home');
    }

	async getArticle(pageUrl)
	{
		const pageMarkdown = await fetch(`${pageUrl}.md`)
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