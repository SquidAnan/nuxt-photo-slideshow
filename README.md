# Nuxt-photo-slideshow

![webiste demo](README-images/website-demo.jpeg)

This project is a **photo slideshow website** built using **Nuxt 2**. I wanted to apply all the skills that I learned throughout the years.

Here are the skills and tools used in this project:

- **Photography**: Showcasing photos taken and digitally edited by me.
- **Graphic Design**: Basic layout and design principles.
- **[Vue.js](https://vuejs.org/)**: Modern front-end coding style
- **[Nuxt 2](https://v2.nuxt.com/)**: Vue framework for static site generation 
- **[Vercel](https://vercel.com/)**: Convenient way to host a static site

<br />

Also, some useful tools used:
- **[Tailwind CSS](https://tailwindcss.com/)**: Write more concise CSS code.
- **[Flicking](https://naver.github.io/egjs-flicking/)**: So that I don't have to implement the sliding effect.
- **[Nuxt Image (for Nuxt 2)](https://v0.image.nuxtjs.org/)**: Optimizing image rendering.
- **[Nuxt Vercel Builder](https://github.com/nuxt/vercel-builder/tree/main)**: Helps Vercel build a Nuxt 2 project. See the first issue down below.

<br />

## Issues Encountered

During the initial deployment on Vercel, I encountered multiple errors.

### 1. Failed Bulid / 404 Not Found

Sometimes the build would fail with an error message saying the output directory is wrong.

![webiste demo](README-images/error-message.png)

Some people suggested [overriding the Output Directory in Vercel's Project Settings](https://stackoverflow.com/questions/75592472/no-output-directory-named-build-found-after-the-build-completed-you-can-confi). This solution did fix the issue and the deployment could be run successfully. However, after the delopyment finished, the website showed "404 Not Found".

![webiste demo](README-images/404-not-found.png)

My final working solution was to add a  `vercel.json` file in the root directory of the project:
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
For more details, see [Nuxt Vercel Builder](https://github.com/nuxt/vercel-builder/tree/main).

### 2. Images Not Showing

Another issue occurred where images failed to display properly.

![webiste demo](README-images/no-images.png)

To fix the issue, I added the following in `nuxt.config.js`:
```
image: {
    provider: 'static'
},
```
While this should be the default setting, it somehow fixed the issue.
