# Airtable Timeline

I built this timeline using [React.js](https://reactjs.org), [react-dnd](https://react-dnd.github.io/react-dnd), [date-fns](https://date-fns.org/) with [TypeScript](https://www.typescriptlang.org/) and [webpack](https://webpack.js.org/) to combines all module in my project needs into bundles.

[CodeSandBox projects](https://codesandbox.io/s/airtable-timeline-44f9ks)
## Time Spent

I spent roughly 12-15 hours on this projects

## What works

I use [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) to display the gird line and automatically adjust with scroll event

## What could have been improved with more times

If I have more, I would love to finish implementing the [react-dnd](https://react-dnd.github.io/react-dnd) so it works when user drag/drop an event within or to another lane.

I also would love to debug and improve the performance for the events where we have many and many events spread accross multiple decades or centuries.

## Design

I did some research and look at a few sources for inspirations:

- [Google Calendar](https://calendar.google.com/)
- [Apple macOS Calendar](https://www.icloud.com/calendar)
- [Gantt Chart](https://en.wikipedia.org/wiki/Gantt_chart)
and a few more [creative examples](https://www.apptio.com/blog/42-timelines-is-the-answer/)

## Tests

If I have time, I would use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to write unit and snapshot tests. I also would use [Cypress](https://docs.cypress.io/) to write integration tests to do end to end testing on some of the core functionalities of the application. For visual testing, I would use [Storybook](https://storybook.js.org/) to build and test UI components in isolation.