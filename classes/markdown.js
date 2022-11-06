/*
	Based on Codepen by Koen Vendrik
	https://codepen.io/kvendrik/pen/Gmefv
*/

class Markdown
{
	static toHTML(md, path)
	{

		// Unordered Lists

		md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
		md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
		md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
		
		// Ordered Lists

		md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
		md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
		md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
		
		// Blockquotes

		md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
		
		// Headings

		md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
		md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
		md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
		md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
		md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
		md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');

		// Images

		md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<figure><img src="./images/lazy.svg" data-lazy-src="$2" alt="$1" class="lazy" /><figcaption>$1</figcaption></figure>');
		
		// Links

		md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4" target="_blank">$1</a>');
		
		// Styles

		md = md.replace(/(?:^|[\ \.])+\*{1,2}([^\*]+?)\*{1,2}(?:[\ \.]|$)/g, '<b>$1</b>');
		md = md.replace(/(?:^|[\ \.])+\_{1,2}([^\_]+?)\_{1,2}(?:[\ \.]|$)/g, '<i>$1</i>');
		md = md.replace(/[\~]{1,2}([^\~]+)[\~]{1,2}/g, '<del>$1</del>');
		
		// Pre

		md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
		md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
		
		// Code

		md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
		
		// Paragraphs

		md = md.replace(/^\s*(\n)?(.+)/gm, function(m) {
			return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
		});
		md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
		
		return md;
		
	}
}

export {Markdown};
