export function seo(seoArg, title, meta) {
    title.setTitle(seoArg.title);
    meta.addTags([
        {name: 'keywords', content: seoArg.keywords},
        {name: 'description', content: seoArg.descriptions}
    ]);
}