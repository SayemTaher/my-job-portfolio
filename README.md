# Personal Portfolio Website

## Overview

This repository contains the source code for my personal portfolio site.  
The site presents my work in UX UI design and web development and gives visitors a clear way to explore my projects, skills and background.

Main goals

* Present selected client and study projects in a structured way  
* Show both design and development skills in one place  
* Provide an easy entry point for recruiters and collaborators  

## Live site

* Main domain: https://sayemtaher.com  
* Netlify deployment: https://clinquant-paletas-7df09d.netlify.app  

## Features

* Responsive layout for desktop, tablet and mobile  
* Single page navigation with smooth scrolling between sections  
* Project section with cards, short summaries and tech tags  
* Dedicated skills and tools section  
* About section with a short biography and focus areas  
* Contact section with a clear call to action  
* Scroll based interaction using AOS to reveal sections and cards  
* Simple structure so content can be updated without changing the code base too much  

## Tech stack

Core

* React with Vite as application and build setup  
* JavaScript and JSX  

Styling

* Tailwind CSS for utility based styling  
* Daisy UI components and Meraki UI inspired layouts  

Routing and interaction

* React Router DOM v6 for client side routing  
* AOS for scroll based animations  

Deployment

* Netlify for static hosting and continuous deployment from GitHub  

## Architecture and structure

The portfolio is built as a React single page application created with Vite.

Main folders inside the app

* `src` application source  
  * `components` shared user interface elements such as navigation, layout sections, buttons and project cards  
  * `pages` top level views for sections such as Home, Projects and Contact  
  * `assets` static images and icons  
* `public` static files that are served as they are  
* `index.html` main HTML entry file  
* `package.json` project metadata, dependencies and scripts  

Data and content

* Projects, skills and sections are defined as data structures that are passed into components  
* Reusable components keep the layout consistent and make it easier to add or reorder projects later  

This structure keeps the code base understandable and shows clearly where layout, data and configuration live.

## Design and technical choices

React with Vite

* The portfolio is a static site that runs fully in the browser, so a full framework with server features is not required  
* React matches my long term focus on the Mongo Express React Node ecosystem and aligns with other projects in my study and internship  
* Vite gives a fast development server and a simple build step with very little configuration, which keeps the setup small but modern  

Why not Next

* The site does not need server side rendering, dynamic routing from a backend or content from a headless content system  
* Using Next here would add extra concepts such as server components and file based routing that do not add clear value for this scale of project  

Why not Vue

* Vue is a good option for many projects, but my current learning path is centred on React and the Mongo Express React Node stack  
* Staying within React for this project keeps my focus on depth instead of spreading time over several front end frameworks  

Styling choices

* Tailwind CSS helps to keep styling close to components and avoid large global style files  
* Daisy UI provides ready made components that speed up layout work while staying customisable  

Overall this stack keeps the portfolio lightweight, easy to maintain and consistent with the rest of my technical direction.

## Development workflow

Main steps in local development

* Run a development server with automatic reload  
* Build an optimised bundle for production  
* Optionally preview the production build locally  

Git is used to track changes to the code base so that each iteration of the design and implementation can be traced.

## Getting started

### Prerequisites

* Node.js and npm installed locally  

### Installation and local development

Clone the repository and install dependencies

```bash
git clone https://github.com/SayemTaher/my-job-portfolio.git
cd my-job-portfolio/my-professional-portfolio
npm install
npm run dev
