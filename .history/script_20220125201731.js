let url = window.location.href;

setInterval(() => {
  if (
    url !== window.location.href &&
    window.location.href.includes("https://www.linkedin.com/in")
  ) {
    url = window.location.href;

    console.log("do request");
  }
}, 500);
