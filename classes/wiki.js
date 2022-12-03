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
	static projectPath = 'projects';

	static async getPages()
	{
		const indexJson = await fetch(`${this.projectPath}/index.json`)
			.then(response => response.json())
			.catch(error => {
					console.error('Project Indexing Failed', error);
					return false;
			});
		return indexJson[0].contents
			.map(entry => `${this.projectPath}/${entry.name.replace('&amp;', '&')}`)
			.slice(1)
			.filter(name => name.endsWith('.md'));
	}

	static async getIntroduction()
	{
		const introductionMarkdown = await fetch(`${this.projectPath}/Home.md`)
			.then(response => response.text());

		const introductionHtml = Markdown.toHTML(introductionMarkdown);
		const introductionElement = document.getElementById('introduction');

		introductionElement.innerHTML = introductionHtml;

		return introductionElement;
	}

	static async getProject(projectPath)
	{
		const pageMarkdown = await fetch(projectPath)
			.then(response => response.text())
			.catch(error => {
				console.error('Project Loading Failed', error);
				return false;
			});

		const summaryMarkdown = pageMarkdown.split('###').shift();
		const writeupMarkdown = `###${pageMarkdown.split('###').pop()}`;

		const summaryHtml = Markdown.toHTML(summaryMarkdown);
		const writeupHtml = Markdown.toHTML(writeupMarkdown);

		const articleElement = document.createElement('article');
		const summaryElement = document.createElement('summary');
		const detailsElement = document.createElement('details');
		const writeupElement = document.createElement('div');
		const articleRotation = 1.0;
		const photographRotation = 5.0;
		const blockquoteRotation = 0.5;

		summaryElement.innerHTML = summaryHtml;
		writeupElement.innerHTML = writeupHtml;

		articleElement.append(detailsElement);
		detailsElement.append(summaryElement);
		detailsElement.append(writeupElement);

		articleElement.style.transform = `rotate(${(Math.random() * articleRotation * 2) - articleRotation}deg)`;
		Array.from(articleElement.getElementsByTagName('figure')).forEach(figureElement => {
			figureElement.style.transform = `rotate(${(Math.random() * photographRotation * 2) - photographRotation}deg)`;
		});
		Array.from(articleElement.getElementsByTagName('blockquote')).forEach(blockquoteElement => {
			blockquoteElement.style.transform = `rotate(${(Math.random() * blockquoteRotation * 2) - blockquoteRotation}deg)`;
		});

		//details.setAttribute('open', true);

		return article;
	}
}

export {Wiki};
