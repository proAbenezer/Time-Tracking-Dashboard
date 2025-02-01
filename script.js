const cardsTemplate = document.getElementById("cards-template");
const cardsContainer = document.getElementById("cards-container");
const BannerColors = [
  "LightRedWork",
  "SoftBlue",
  "LightRedStudy",
  "LimeGreen",
  "Viole",
  "SoftOrange",
];
const BannerImagePath = [
  "icon-work.svg",
  "icon-play.svg",
  "icon-study.svg",
  "icon-exercise.svg",
  "icon-social.svg",
  "icon-self-care.svg",
];
const getCardsData = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`ERROR fetching data ${error}`);
  }
};

const createCards = async () => {
  try {
    const cardsData = await getCardsData();
    console.log(cardsData);
    let countOfCards = 0;
    cardsData.forEach((card) => {
      const templateClone = cardsTemplate.content.cloneNode(true);
      templateClone.getElementById("title").textContent = card.title;
      templateClone.getElementById(
        "current-hour"
      ).textContent = `${card.timeframes.weekly.current}hrs`;
      templateClone.getElementById(
        "previous-hour"
      ).textContent = `previous week - ${card.timeframes.weekly.previous}hrs`;

      templateClone
        .getElementById("banner")
        .classList.add(`bg-${BannerColors[countOfCards]}`);
      templateClone
        .getElementById("card-image")
        .setAttribute("src", `./images/${BannerImagePath[countOfCards]}`);

      countOfCards++;
      cardsContainer.appendChild(templateClone);
    });
  } catch (error) {
    console.log(`ERROR creating cards ${error}`);
  }
};

createCards();
/* const createHTMLElement = (elementName, elementClassList = [""]) => {
  const newElement = document.createElement(elementName);
  elementClassList.forEach((className) => {
    newElement.classList.add(className);
  });

  return newElement;
};
const createCards = (
  title,
  imagePath,
  bannerColor,
  currentHour,
  privousHour
) => {
  const card = createHTMLElement("div", ["flex", " flex-col", "rounded-lg"]);
  const cardBanner = createHTMLElement("div", [
    "relative",
    "w-full",
    "h-12",
    "bg-SoftBlue",
    "rounded-t-xl",
    "overflow-hidden ",
    "xl:h-14",
  ]);
  const cardBannerImage = createHTMLElement("img", [
    "absolute",
    "-top-[20%]",
    "right-1",
  ]);
  cardBannerImage.setAttribute("src", imagePath);
  const cardDescription = createHTMLElement("div", [
    "bg-DarkBlue",
    "w-full",
    "p-6",
    "rounded-b",
    "rounded-t-xl",
    "-mt-4 z-10",
    "flex",
    "flex-col",
    "gap-x-2",
    "xl:gap-x-0",
    "xl:gap-y-8",
  ]);
  const cardDescriptionMain = createHTMLElement("div", [
    "flex",
    "justify-between",
    "items-center",
  ]);
  const cardDescriptionMainTitle = createHTMLElement("h1", [
    "font-bold",
    "text-white",
    "text-[18px]",
  ]);
  const cardDescriptionMainImage = createHTMLElement("img", [
    "w-[16px]",
    "h-[4px]",
    "cursor-pointer",
  ]);
  cardDescriptionMainTitle.textContent = title;
  cardDescriptionMainImage.setAttribute("src", "./images/ellipse-icon.svg");

  const cardDescriptionSide = createHTMLElement("div", [
    "flex",
    "justify-between",
    "items-center",
    "xl:flex-col",
    "xl:items-start",
    "xl:gap-y-1",
  ]);
  const cardDescriptionSideTitle = createHTMLElement("h1", [
    "font-extralight",
    "text-white",
    "text-3xl",
    "xl:text-5xl",
  ]);
  cardDescriptionSideTitle.textContent = `${currentHour}hrs`;
  const cardDescriptionSideSubtitle = createHTMLElement("p", [
    "text-white",
    "text-xs",
    "opacity-[75%]",
  ]);
  cardDescriptionSideSubtitle.textContent = `privous week ${privousHour}hrs`;
};

<div class="flex flex-col rounded-lg">
  <div class="relative w-full h-12 bg-SoftBlue rounded-t-xl overflow-hidden xl:h-14">
    <img
      src="./images/icon-play.svg"
      alt=""
      class="absolute -top-[20%] right-1"
    />
  </div>
  <div class="bg-DarkBlue w-full p-6 rounded-b rounded-t-xl -mt-4 z-10 flex flex-col gap-x-2 xl:gap-x-0 xl:gap-y-8">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-white text-[18px]">Play</h1>
      <img
        src="./images/icon-ellipsis.svg"
        alt=""
        class="w-[16px] h-[4px] cursor-pointer"
      />
    </div>
    <div class="flex justify-between items-center xl:flex-col xl:items-start xl:gap-y-1">
      <h1 class="font-extralight text-white text-3xl xl:text-5xl">
        <span id="current-hour">32</span>hrs
      </h1>
      <p class="text-white text-xs opacity-[75%]">
        Last week - <span id="previous-hour">8</span>hrs
      </p>
    </div>
  </div>
</div>;
 */
