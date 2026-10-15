# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Challenge is to build out this social links profile and get it looking as close to the design as possible.

Users should be able to:

    -See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/social-links-screenshot.png)

### Links

- Github URL: [Github Repository](https://github.com/estebanrodriguez28/social-links-profile)
- Live Site URL: [Live Site](https://estebanrodriguez28.github.io/social-links-profile/)

## My process

- Sturctured semantic HTML first
- Wrote out base styles in css (fonts, resets)
- Added styles in css from top of the page down

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

When you set a flex container to column and set align-items to center, the flex items width does not stretch out to fill the container, instead their width fits to the content. This made the nav element sorrounding the links match the width of the links, but the design was for the links to take up the whole width of the card.

Solution was to make the nav stretch to fill the entire card using the align-self property so that the hyperlinks could be styled to fill the whole card.

```css
.social-links-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links-card nav {
  align-self: stretch;
}
```

Variable fonts allows you to declare custom font once in the css and set a font-weight range instead of importing several different font files (bold, semi-bold, etc) making variable fonts more flexible and concise.

```css
@font-face {
  font-family: Inter;
  src: url("assets/fonts/Inter-VariableFont_slnt\,wght.ttf");
  font-weight: 400 700;
}
```

I learned how to set up a block of nav links using semantic html (nav, ul, li). Also how to use Emmet, shortcut for writing html quickly to create multiple links using this structure you can do:

```html
nav>ul>(li>a)*5
```

to make html quicker to create

```html
<nav>
  <ul>
    <li>
      <a
        href="https://github.com/estebanrodriguez28"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >
    </li>
  </ul>
</nav>
```

For styling navigation links, I learned that we can make hyperlinks (a tags) display block since a tags are inline. To make the link take up full width of the card we set display to block.

Also I was going to style the list item instead of the a tag however the a tag is where the user can actually click so its better to style the a tag instead so a user can click anywhere within the link's width not just the text which would happen if you style the li tag.

Focus visible makes sure keyboard users can see active states as they go through hyperlinks to receive visual feedback.

```css
.social-links-card a {
  display: block;
  /* Other properties */
  &:hover,
  &:focus-visible {
    background-color: var(--green);
    color: var(--grey-900);
  }
}
```

Within the footer, I wanted the last link to break onto the next line since the links looked too squished together being all in the same line. I tried setting a width small enough on the parent container to break the last link onto next line but that caused layout issues with hover states.

A fix I got from Claude was to think about how in writing, separate thoughts go in separate paragraphs, after that I got the idea to use p tag to wrap first two links so they become wrapped in a block element and take up a whole line. So then the next link has to break onto the next line, no problems with hover states.

```html
<p>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
                rel="noopener noreferrer">Frontend Mentor</a
        >. Coded by
        <a href="https://github.com/estebanrodriguez28" target="_blank"
                rel="noopener noreferrer"" >Esteban Rodriguez</a>.
      </p>
```

For the button, just setting it to dispaly block will not make the button take up the full width of the parent because forms elements like button or input have their width set to fit the content so you must also specify width to 100% to make the form element in this case button take up the full width.

Button in this case is more correct because clicking performs an action which is more appropriate than having an a tag for a hyperlink since that implies navigation.

```css
#email {
  width: 100%;
  border: none;
  position: relative;
}
```

I used a custom image for the profile picture but someone commented in my submission that the image could be optimized to be smaller. I used a tool online to set the aspect ratio 1:1, then using another tool I converted the image from png to webp. A extension that reduces file size. After these changes I was able to make the image a proportional circle without using the object-fit property, significantly reduced the size of the image, improving the site's performance.

I learned about Retina screens, how to make images look sharp on a Retina screen (like iPhones or several other modern devices) we need to double the size of the image but can set the size we want in css, so that the image maintains it's detail and remains clear. I still don't fully understand Retina screens but hope to understand more as I progress and how they fit into web development.

### Continued development

I realized that there are some concepts in flex that I still dont fully understand such as how aling-items fit flex items width to their content. Going to continue practicing with project to gain better understanding of flex.

### Useful resources

I should save my resources as I go along cause I close them then forget which one I used specifically. However here's what I remember for this project:

- Semantic HTML Article - There was an article that went through examples of semantic html that is where I noticed that I was missing more semantic html for my hyper links (nav, ul, li) before I just had all the nav links by themselves as a tags
- [Color contrast](https://web.dev/articles/testing-web-design-color-contrast) - This article showed me how to view if a color meets the WCAG color contrast standards using devtools making sure the colors have enough contrast and are accessible

### AI Collaboration

- I used Claude Desktop, connecting my project to a chat
- I used Claude for debugging and to guide me closer toward the design. When I did not know why my links weren't taking up the full width of the card I asked Claude what I thought was the problem the nav tag being the flex item but not taking up the full width. That question guided me toward realizing how flexbox works with align-items.
- Process generally is when stuck, search first, then if still stuck tell Claude what the problem is and what I am thinking to solve it. Then Claude based on the instructions included by Front-end mentor, guides me toward the answer by asking me questions rather than giving me the answer
- At first claude gave me the answer for why my image was not a symmetrical circle pointing me toward the css property and giving me copy and paste solution. For some reason clauded did not read the AI instructions in this project before giving me the first answer. I learned how to solve it and eventually why but I did not think through the problem enough to solve it by myself since claude gave me full answer
- I think what went well is how Claude guides me toward answers/understanding what didn't go well was the first answer I got giving me a complete solution

## Author

- Frontend Mentor - [@estebanrodriguez28](https://www.frontendmentor.io/profile/estebanrodriguez28)
