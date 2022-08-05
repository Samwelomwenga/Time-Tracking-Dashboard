# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
-

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](screenshot-127.0.0.1_5500-2022.08.04-12_52_50.png)
![](screenshot-127.0.0.1_5500-2022.08.04-13_46_44.png)
![](screenshot-127.0.0.1_5500-2022.08.04-13_50_11.png)
![](screenshot-127.0.0.1_5500-2022.08.04-13_51_14.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind Css] - CsS Framework

### What I learned

I have learned how to fetch data asynchronously using fetch method and how to render data to the DOM.

```js
fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => {});

const dailyStudyPrevious = data[2].timeframes.daily.previous;
const dailyStudyCurrent = data[2].timeframes.daily.current;
studyPrevious.innerHTML = `Yesterday-${dailyStudyPrevious}hrs`;
studyCurrent.innerHTML = `${dailyStudyCurrent}hrs`;
```

### Continued development

I want to develop website which fetch online API and do computation with the data before rendering it into the DOM.

## Author

- Website - [Samwel Omwenga](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Samwelomwenga)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
