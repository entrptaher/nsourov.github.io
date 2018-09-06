const projectList = [
  {
    name: "A little ToDo App",
    desc: "A simple Todo application written in Reactjs.",
    image: "assets/images/portfolio/todo.png",
    techs: "React, Semantic-ui",
    link: "http://tight-bit.surge.sh/"
  },
  {
    name: "Voting App",
    desc:
      "This App is created with Backend and User Authentication. User can vote to a poll and create, delete poll.",
    techs: "Nodejs, Expressjs, Authentication",
    image: "assets/images/portfolio/vote-app.png",
    link: "https://reflective-record.glitch.me/"
  },
  {
    name: "Markdown Previewer",
    desc: "Simple Markdown previewer written in Reactjs.",
    techs: "React, Semantic-ui",
    image: "assets/images/portfolio/markdown.png",
    link: "http://military-snakes.surge.sh/"
  },
  {
    name: "Twicth Tv",
    desc: "An app created by using twitch ajax API.",
    techs: "Semantic-ui, Ajax",
    image: "assets/images/portfolio/twitch.png",
    link: "http://naimur.me/Twitch-Tv/"
  },
  {
    name: "Gmail Reader",
    desc: "Gmail reader created with google gmail api and authentication api. ",
    techs: "Semantic-ui, Google API",
    image: "assets/images/portfolio/gmail.png",
    link: "http://sweltering-distance.surge.sh/"
  },
  {
    name: "Javascript Calculator",
    desc: "A simple calculator created in Javascript and designed with jQuery.",
    techs: "jQuery",
    image: "assets/images/portfolio/cal.png",
    link: "http://naimur.me/javascript-calculator/ "
  },
  {
    name: "Weather App",
    desc:
      "An weather app to see any places weather. This app used weather API.",
    techs: "Bootstrap, Weather API",
    image: "assets/images/portfolio/weather.png",
    link: "http://naimur.me/WeatherApp"
  },
  {
    name: "Social Poster Bot",
    desc:
      "Social Posts Management Bot. This Desktop Bot written in Puppeteer automation framework.",
    techs: "Puppeteer, Electron, Bootstrap",
    image: "assets/images/portfolio/social-bot.png",
    link: "#"
  },
  {
    name: "Instagram Comment Bot",
    desc: "Automatic Comment tools for Instagram.",
    techs: "Puppeteer, Electron, Bootstrap",
    image: "assets/images/portfolio/instagram-bot.png",
    link: "#"
  }
];
projectList.map((project, index) => {
  $("#portfolio").append(
    `<div class="card green">
          <div class="image">
            <img src="${project.image ? project.image : ""}">
          </div>
          <div class="content">
            <div class="header">${project.name}</div>
            <div class="meta">
              <a>${project.techs}</a>
            </div>
            <div class="description">
              ${project.desc}
            </div>
          </div>
          <a href="${project.link}"></a>
        </div>`
  );
});
