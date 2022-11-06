import {Markdown} from './markdown.js';

class Project
{
	constructor(path)
	{
		this.path = path;
	}

	async getArticle()
	{
		const summaryHTML = await fetch(`${this.path}/Summary.md`)
			.then(response => response.text())
			.then(markdown => Markdown.toHTML(markdown, `${this.path}/`));
		const fullHTML = await fetch(`${this.path}/Details.md`)
			.then(response => response.text())
			.then(markdown => Markdown.toHTML(markdown, `${this.path}/`));

		const article = document.createElement('article');
		const details = document.createElement('details');
		const summary = document.createElement('summary');
		const full = document.createElement('div');
		const articleRotation = 1.0;
		const photographRotation = 5.0;
		const blockquoteRotation = 0.5;

		summary.innerHTML = summaryHTML;
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

export {Project};
