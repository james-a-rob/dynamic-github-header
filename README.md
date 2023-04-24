## Dynamic Image
Easily create images that can change on each request.

## Warning!!!!
This is Beta phase software. Expect bugs.

## Why?
There are many places on the web where you can add images but no dynamic content. For example this Github Repo README or a marketing email. So the more exicting we can make images the more engaging these sort of online spaces will be. 

Images on the web are usually static. That means that every time you request that image you see the exact same result. Dynamic images are regenerated everytime they are request from the server. This allows the content of those images to change. A simple example would be updating some text in an image based on time of the day.

## Static vs Dynamic example


| Static image example (Will not change when refreshing page) | Dynamic image example (Refresh the page to see this image change)      |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Static image](hello-world.png?raw=true)                   | ![image](https://dynamic-image.onrender.com/image/simple-example.jpeg) |


## Real example
Dynamic images get really intresting when they pull in information from other systems. The image below is an example of a dynamic image that uses Github user data. Whenever the image is requested the server gets my latest follower via the Github Graphql API and dynamically generates the image using the latest followers username and profile image. Finally the image is returned to the browser. If you were to follow me and then refresh this page you will see the image change.

## Features 
 - Make static webpages and markdown files more exciting.
 - Lots of differnt image templates to easily copy and extend
 - Writen with TypeScript

## Video walkthrough

## Setup

## Write your own template
I would suggest using the simple-example template as your starting point.

## Deployment
