# Portfolio site

Site was built with react as a single page application.<br/>
deployed to netlify and can been seen [here](https://chriscooney.netlify.app/).<br/> <br/>
![site_demo](src/assets/site.gif)

## Viewing locally

If you would like to view the code locally, or use my site as a template for yourself, please follow the steps below.<br/>

- Please clone or fork then clone this repo
- Once on your local machine cd in the correct directory and open with your Text editor or IDE
- To run the project locally please use the following command
  ```
  npm start
  ```

## Changing intro

Once you have the project, first thing to do is update the Into and about me paragraph. First open Into.js found inside of ```src/components```, and change the name and job title to reflect you. <br/>
Then open AboutMe.js found in the same directory and replace the large paragraph with your own blurb. 

## updating contact info

To make sure all the buttons in the about me section are linking to the correct pages/email edit the following section of code ensuring that all links are added as strings.
```js
<div className='flex'>
            <a className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
              href=[GITHUB_URL]
              target='_blank'
              rel="noopener noreferrer">GitHub</a>
            <a className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
              href=[LINKEDIN_URL]
              target='_blank'
              rel="noopener noreferrer">LinkedIn</a>
            <a className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black"
              href="mailto:"[EMAIL_ADDRESS]
              target='_blank'
              rel="noopener noreferrer">Email Me</a>
          </div>
```


## Adding projects

Instead of having to add new projects manually, everything is done via the projectJson.js.
```js
{
    "title": [TITLE],
    "description": [DESCRIPTION]
    "link": [LINK]
},
```
By copying and adding the correct information, new projects will automatically be added to the site.<br/>
Each project is added to the site as a card, these cards can be interacted with and will be hyperlinked to the link provided in the json. 
<br/>
<br/>
Feel free to get in contact with me if you have any questions. 

