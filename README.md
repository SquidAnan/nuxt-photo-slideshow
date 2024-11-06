# Nuxt-photo-slideshow

![webiste demo](README-images/website-demo.jpeg)

I combined all the knowledge that I self-leanred into this project, including:
- Photography
- Basic graphic design
- Front-end development (Vue.js)
- Static site generation (Nuxt 2)
- Web hosting (Vercel)

And here are some of the modules/frameworks that I learned and used in this project:
- Tailwind CSS: Fun to learn. I can write more concise CSS codes.
- egjs-flicking: I don't have to implement the sliding effect on my own.
- Nuxt Image: It makes images load faster (probably, I'm not really sure).
- Nuxt Vercel Builder: See the first issue down below.

## Issues encountered during deploying on Vercel

### 1. Failed bulid / 404 not found

![webiste demo](README-images/error-message.png)

The hosting process on Vercel didn't go well at first. Sometimes I get error messages during the deployment. Even though there are no error messages, I got a 404 not found. I thought the issue came from the Project Settings in Vercel, such as wrong output directory or wrong root directory, but there were no solutions that perfectly solve all my problems.

Finally, I fixed the issue with a `vercel.json` file in the root of my project, and it looks like this:
```
{
    "version": 2,
    "builds": [
        {
            "src": "nuxt.config.js",
            "use": "@nuxtjs/vercel-builder"
        }
    ]
}
```
I suppose it's because the latest version is Nuxt 3, so I need to specify I'm using the old version.

### 2. Images won't show

![webiste demo](README-images/no-images.png)

Another issue was that the images couldn't properly display. I fixed the issue by adding the following code in `nuxt.config.js`:
```
image: {
    provider: 'static'
},
```
It doesn't really make sense to add these lines in order to make it work, since the provider should be 'static' by default.
