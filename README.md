# Personal Portfolio Website

## Overview

This repository contains the source code for my personal portfolio site, which presents my work in UX UI design and web development. The site allows visitors to explore my projects, skills, and background in a clear and interactive way.

Main goals

* Present selected client and study projects in a structured way  
* Highlight both design and development skills  
* Provide an easy entry point for recruiters and collaborators  

## Live site

The portfolio is deployed on Netlify and available here  

[Live demo](https://clinquant-paletas-7df09d.netlify.app)

## Features

* Responsive layout for desktop and mobile  
* Multi section single page navigation with smooth scrolling  
* Project cards with clear titles, short descriptions and tech tags  
* Dedicated section for skills and tools  
* About section with a short biography and focus areas  
* Contact section with a direct call to action  
* Scroll based interaction using AOS to reveal sections and cards  

## Tech stack

* React with Vite as build tool  
* Tailwind CSS  
* Daisy UI components and Meraki UI inspired layouts  
* React Router DOM v6 for client side routing  
* JavaScript and JSX  
* Netlify for static hosting and deployment  

## Project structure

The main app lives in the folder that contains the React Vite setup.

Typical folders inside the app

* `src` main application source  
  * `components` shared UI elements such as navigation, layout sections, buttons and cards  
  * `pages` views for top level sections such as Home, Projects and Contact  
  * `assets` static images and icons  
* `public` static files that are served directly  
* `index.html` main HTML entry file  
* `package.json` project metadata and scripts  
* `tailwind.config.cjs` and `postcss.config.cjs` styling configuration  
* `vite.config` bundler configuration  

## Getting started

### Prerequisites

* Node.js and npm installed locally  

### Installation

Clone the repository and install dependencies

```bash
git clone https://github.com/SayemTaher/my-job-portfolio.git
cd my-job-portfolio
npm install
npm run dev

