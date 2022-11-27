/*
	Based on Codepen by Koen Vendrik
	https://codepen.io/kvendrik/pen/Gmefv
*/

class Markdown
{
	static toHTML(markdown)
	{

		// Unordered Lists

		markdown = markdown.replace(/^\s*\n\*/gm, '<ul>\n*');
		markdown = markdown.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
		markdown = markdown.replace(/^\*(.+)/gm, '<li>$1</li>');
		
		// Ordered Lists

		markdown = markdown.replace(/^\s*\n\d\./gm, '<ol>\n1.');
		markdown = markdown.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
		markdown = markdown.replace(/^\d\.(.+)/gm, '<li>$1</li>');
		
		// Blockquotes

		markdown = markdown.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
		
		// Headings

		markdown = markdown.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
		markdown = markdown.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
		markdown = markdown.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
		markdown = markdown.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
		markdown = markdown.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
		markdown = markdown.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');

		// Images

		markdown = markdown.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<figure><img src="./images/lazy.svg" data-lazy-src="$2" alt="$1" class="lazy" /><figcaption>$1</figcaption></figure>');
		
		// Links

		markdown = markdown.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4" target="_blank">$1</a>');
		
		// Styles

		markdown = markdown.replace(/(?:^|[\ \.])+\*{1,2}([^\*]+?)\*{1,2}(?:[\ \.]|$)/g, '<b>$1</b>');
		markdown = markdown.replace(/(?:^|[\ \.])+\_{1,2}([^\_]+?)\_{1,2}(?:[\ \.]|$)/g, '<i>$1</i>');
		markdown = markdown.replace(/[\~]{1,2}([^\~]+)[\~]{1,2}/g, '<del>$1</del>');
		
		// Pre

		markdown = markdown.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
		markdown = markdown.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
		
		// Code

		markdown = markdown.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
		
		// Paragraphs

		markdown = markdown.replace(/^\s*(\n)?(.+)/gm, function(m) {
			return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
		});
		markdown = markdown.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
		
		return markdown;
		
	}
}

export {Markdown};
