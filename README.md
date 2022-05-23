# Wide Eye Creative
## Technical Test
---

### Repo Details
The repo provided here has a basic file structure and boilerplate for a small static site. We have included a simple Webpack setup for your convenience. However, you should feel free to modify or replace any aspect of this repo to best suit your needs or development preferences.

### Set Up
**We are assuming a node +14 enviro here**. If you need to switch to node v14 consider using a tool like https://github.com/nvm-sh/nvm to manage your local enviro.

1. Fork repo & clone
2. Use `nvm use 14` or other to ensure the expected node version
3. Run `npm i` to add node_modules
4. Run `npm run watch`

#### Do not open a pull request to this repo. Clone into your own repo and make your changes there.

### Webpack
The basic Webpack config uses babel and postcss to transpile your src code to production ready assets. ES6 support is included, however some polyfills will likley be needed if using specific js methods.

#### Available Commands:
- `npm run build` will build production assets to the `./build` folder
- `npm run start` will start the dev server
- `npm run start` will watch js/scss file changes and will display error details

### SCSS/CSS
We have made an opinionated choice to use SCSS here as it tracks with our internal development expectations. You are free to work in raw CSS or another abstraction. A normalize css file has been added for convenience.

### API Source
We are using a basic mockend API as described by `.mockend.json` there should be no need to modify this resource. The API returns an array of objects with all the data needed for the task.
##### Posts Endpoint: 
`https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts`

##### Sample response object:

```
{
  authorName: "iRRBQH4mDe"
  content: "Nam corrupti porro, dignissimos accusantium quae veritatis expedita, a consectetur officia sint, perferendis officia odio."
  excerpt: "A."
  id: 1
  photo: "https://picsum.photos/seed/44940/1920/1080"
  publishedDate: "2020-12-21T14:19:52Z"
  title: "nihil nisi sed"
  views: 17
}
```
