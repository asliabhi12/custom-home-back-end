

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
  
//   await page.goto('https://practice.geeksforgeeks.org/problem-of-the-day');
  
//   const problemDescription = await page.$eval('p.problemOfTheDay_problemContainerTxt__pPZ3Z', element => element.textContent);
//   console.log('Problem description: ', problemDescription.trim());
  
//   const solveButtonHref = await page.$eval('a#potd_solve_prob', element => element.getAttribute('href'));
//   console.log('Solve button href: ', solveButtonHref);
  
//   await browser.close();
// })();




















const puppeteer = require('puppeteer');
const express = require('express');
const cors = require('cors')


const app = express();

app.use(cors())

app.get("/scrape", async(req, res)=>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://practice.geeksforgeeks.org/problem-of-the-day');

  const problemDescription = await page.$eval('p.problemOfTheDay_problemContainerTxt__pPZ3Z', element => element.textContent);
  const solveButtonHref = await page.$eval('a#potd_solve_prob', element => element.getAttribute('href'));
  
  
  const data = {problemDescription, solveButtonHref}
  await browser.close();

  console.log(data)

  res.json(data);

})

app.listen(8800, () => {
    console.log('Server listening on port 8800');
  });
 
  


