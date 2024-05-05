import rss from '@astrojs/rss';
import type { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
	const blog = await getCollection('blog');

	return rss({
		title: 'The sandwch blog',
		description: 'All sandwich news, all the time',
		site: context.site || '',
		items: blog.map((post) => {
			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.date,
				link: `/blog/${post.slug}`,
				content: sanitizeHtml(parser.render(post.body)),
			};
		}),
	});
}
