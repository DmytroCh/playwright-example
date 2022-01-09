## Install Playwright Test
`npm i -D @playwright/test`

`npx playwright install`

## Run tests
- Default all `*.spec.*` from `tests` folder
    `npx playwright test`
- In specific browser
    `npx playwright test --browser=firefox`
- In all browsers
    `npx playwright test --browser=all`
- With browser opening
    `npx playwright test --headed`

## Scenarios

 1. Execute tests on Careers page:
	 2. Visit "Careers" page via UI
	 3. Verify if URL is proper
	 4. Get list of offers
	 5. Verify if there are offers there
 2. Should work department filter:
	 3. Visit "Careers" page via UI
	 4. Verify if URL is proper
	 5. Get list of offers without filters
	 6. Prepare list of expected offers
	 7. Set filter to 'QA' department
	 8. Get list of offers with filter
	 9. Compare UI list to expected list by numbers
	 10. Verify if all elements contains 'QA' in title 


## Usefull links
- Playground for testing: http://uitestingplayground.com/
- Nice tutorial about `playwright`, especially about debugging: https://www.youtube.com/watch?v=VKvZSpSWDZw
