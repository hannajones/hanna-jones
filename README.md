# Hanna Jones

My new home on the web. A basic personal website built using React and Firebase.

Built as my first post-bootcamp personal project built as a means of delving deeper into React and honing the skills to build more complex applications in the future.

## Updated: 7/23/19

I thought it would be fun to update this after a few years of working as a developer so that it can serve as a testament to how much I have learned on the job. I also wanted to make it more representative of where my React skills and coding style are at now. With all that in mind, I want to make a couple of dislaimers/notes:

1. **React + TypeScript are not necessairily the best tools for the job of building a personal site** - I know there are easier ways to create a simple static site. I could have gone back to basics here by crafting something using vanilla HTML/CSS/JS and deploying it to GitHub pages. For context though, when I first built this site I was brand new to both React and web development, and was trying to familiarize myself with the most in demand tools of the day. [Gatsby](https://www.gatsbyjs.org/) wasn't around yet - or at least hadn't yet gained widespread adoption - so in order to gain a better understanding of React I tried my hand at building something from scratch.

2. **Firebase is unnecessary and doesn't really serve much of a prupose here** - again, my excuse for this particular choice is that it was made three years ago when I only had the vaguest sense of what I was doing/the best way to go about doing it. This was a tool I had heard about, which I was curious to learn more about, so I used this site as an opportunity to play around with it.

I fully felt the reprocussions of that choice when I figured out that the firebase dependency was pusing my main JS file over 244 kB even when running webpack in production. However I did some research and learned that this is a [known issue](https://github.com/firebase/firebase-js-sdk/issues/332) that has even been encountered by [members](https://davidea.st/articles/firebase-bundle-size) of the Firebase team. I had some fun researching/implementing a solution to load the dependency as a separate chunk (so as not to block the initial page render), but ultimately I will probably migrate away from this tool once I have the time to assess options and port my data elsewhere.

Anyway, please keep in mind that this is still very much a work in progress. Going forward I plan to update it more frequently than once every three years 🙃
