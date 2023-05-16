# Fake OS Project

## Demo & Snippets

-   You can view the live version here: 'insert link'

## Requirements / Purpose

-   The MVP was to create a single page application mimicking an OS of my choice, with a minimum of 3 icons displayed on the desktop.
-   The purpose of the project is to explore and consolidate understandings of HTML, CSS and JavaScript.
-   Tech stack used: JavaScript, DOM, CSS/Sass, HTML

## Design Goals / Approach

-   I have mimicked a Windows95 OS using html and css and have created clickable icons using javascript and DOM manipulation to recreate some "apps" (Notepad, Solitaire, Network connection).

## Known issues

-   Refactored get date/time function to exclude DOM interaction, but now it no longer updates every minute.
-   Apps can be opened more than once, which affects the close window event listener.

## Future Goals

-   Refactor JavaScript to create one event listener for all apps.
-   Create function to bring interaction to solitaire 'app'. E.g. function on hover over image or create 'enter name' form to begin a new game.
-   Create function to bring clicked app to front.
-   Create draggable divs.

---

## Change logs

### 26/04/23

-   This project was submitted on 03/04/23.
-   Update README to include known issues and future goals.

### 29/04/23

-   Fix bug prevent apps from opening if already open.

### 16/05/23

-   Add updateTime function to fix bug, time not updating every minute, or showing wrong data. Now clock updates to show minute changes and get date time function remains separated from DOM.

---

## What did you struggle with?

-   This was my first project involving DOM manuipulation, so at first I found it difficult to append elements to other dynamic elements, because I was not targeting the element correctly, however after much repetition I feel more confident about this.
