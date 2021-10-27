module.exports = {
    //如何查找故事 story book
    stories: [
        "../src/Introduction.stories.mdx",
        "../src/Install.stories.mdx",
        "../src/Components.stories.mdx",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: ['@storybook/addon-essentials'],
};