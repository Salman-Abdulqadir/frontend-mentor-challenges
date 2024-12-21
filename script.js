const renderServices = () => {
  const services = [
    {
      title: "Online Banking",
      desc: `Our modern web and mobile applications allow you to keep track of
          your finances wherever you are in the world.`,
      imageSrc: "./images/icon-online.svg",
    },
    {
      title: "Simple Budgeting",
      desc: `See exactly where your money goes each month. Receive notifications
      when you’re close to hitting your limits.`,
      imageSrc: "./images/icon-budgeting.svg",
    },
    {
      title: "Fast Onboarding",
      desc: `We don’t do branches. Open your account in minutes online and start
      taking control of your finances right away.`,
      imageSrc: "./images/icon-onboarding.svg",
    },
    {
      title: "Open API",
      desc: `Manage your savings, investments, pension, and much more from one
      account.`,
      imageSrc: "./images/icon-api.svg",
    },
  ];

  const servicesContainer = document.getElementById("services-container");
  if (!servicesContainer) return;

  const serviceCards = services?.map((service) => {
    const logo = document.createElement("img");
    logo.src = service.imageSrc;
    logo.alt = service.title;
    const title = document.createElement("h3");
    title.innerHTML = service.title;
    const desc = document.createElement("p");
    desc.innerHTML = service.desc;

    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card flex flex-col align-start gap-16";
    serviceCard.append(logo, title, desc);
    return serviceCard;
  });

  servicesContainer.append(...serviceCards);
};

const renderArticles = () => {
  const articles = [
    {
      imgSrc: "./images/image-currency.jpg",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      desc: `The world is getting smaller and we’re becoming more mobile. So why should you be forced to only
      receive money in a single … `,
    },
    {
      imgSrc: "./images/image-restaurant.jpg",
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      desc: `Our simple budgeting feature allows you to separate out your
      spending and set realistic limits each month. That means you … `,
    },
    {
      imgSrc: "./images/image-plane.jpg",
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      desc: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re
      abroad. We’ll even show you …  `,
    },
    {
      imgSrc: "./images/image-confetti.jpg",
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      desc: `After a lot of hard work by the whole team, we’reexcited to launch our closed beta. It’s easy to request an invite through
      the site ...`,
    },
  ];

  const articlesContainer = document.getElementById("articles-container");
  if (!articlesContainer) return;

  const articleCards = articles?.map((article) => {
    const cover = document.createElement("img");
    cover.className = "article-img";
    cover.src = article.imgSrc;
    cover.alt = article.imgSrc + article.author;

    const author = document.createElement("h5");
    author.innerText = `By ${article.author}`;

    const title = document.createElement("h4");
    title.innerText = article.title;

    const desc = document.createElement("p");
    desc.innerText = article.desc;

    const detailsContainer = document.createElement("div");
    detailsContainer.className =
      "flex-col p-16 align-start article-card-details";
    detailsContainer.append(author, title, desc);

    const articleCard = document.createElement("div");
    articleCard.className = "article-card";
    articleCard.append(cover, detailsContainer);

    return articleCard;
  });

  articlesContainer.append(...articleCards);
};

const renderSocialMediaLinks = () => {
  const socialMediaLinks = [
    {
      logo: "./images/icon-facebook.svg",
      alt: "facebook",
      link: "https://facebook.com",
    },
    {
      logo: "./images/icon-youtube.svg",
      alt: "youtube",
      link: "https://youtube.com",
    },
    {
      logo: "./images/icon-twitter.svg",
      alt: "twitter",
      link: "https://twitter.com",
    },
    {
      logo: "./images/icon-pinterest.svg",
      alt: "pinterest",
      link: "https://pinterest.com",
    },
    {
      logo: "./images/icon-instagram.svg",
      alt: "instgram",
      link: "https://instagram.com",
    },
  ];
};

function main() {
  renderServices();
  renderArticles();
}

main();
