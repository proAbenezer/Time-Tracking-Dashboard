const cards = document.querySelectorAll("#cards-container > div");

const dailyLink = document.getElementById("daily-link");
const weeklyLink = document.getElementById("weekly-link");
const monthlyLink = document.getElementById("monthly-link");

const getCardsData = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`ERROR fetching data ${error}`);
  }
};

const populateCards = async (date) => {
  try {
    const cardsData = await getCardsData();
    if (date == "daily") {
      for (let i = 1; i < cards.length; i++) {
        cards[i].querySelector("#current-hour").textContent =
          cardsData[i - 1].timeframes.daily.current;
        cards[i].querySelector("#previous-hour").textContent = ` day - ${
          cardsData[i - 1].timeframes.daily.previous
        }`;
      }
    } else if (date == "weekly") {
      for (let i = 1; i < cards.length; i++) {
        cards[i].querySelector("#current-hour").textContent =
          cardsData[i - 1].timeframes.weekly.current;
        cards[i].querySelector("#previous-hour").textContent = ` week - ${
          cardsData[i - 1].timeframes.weekly.previous
        }`;
      }
    } else {
      for (let i = 1; i < cards.length; i++) {
        cards[i].querySelector("#current-hour").textContent =
          cardsData[i - 1].timeframes.monthly.current;
        cards[i].querySelector("#previous-hour").textContent = ` month - 
          ${cardsData[i - 1].timeframes.monthly.previous}`;
      }
    }
  } catch (error) {
    console.log(`ERROR populating the cards ${error}`);
  }
};

const removeAllLinksStyle = (link) => {
  link.style.fontWeight = "400";
  link.style.opacity = "75%";
};
dailyLink.addEventListener("click", () => {
  removeAllLinksStyle(dailyLink);
  removeAllLinksStyle(weeklyLink);
  removeAllLinksStyle(monthlyLink);

  dailyLink.style.opacity = "100%";
  dailyLink.style.fontWeight = "800";
  populateCards("daily");
});
weeklyLink.addEventListener("click", () => {
  removeAllLinksStyle(dailyLink);
  removeAllLinksStyle(weeklyLink);
  removeAllLinksStyle(monthlyLink);

  weeklyLink.style.opacity = "100%";
  weeklyLink.style.fontWeight = "800";

  populateCards("weekly");
});
monthlyLink.addEventListener("click", () => {
  removeAllLinksStyle(dailyLink);
  removeAllLinksStyle(weeklyLink);
  removeAllLinksStyle(monthlyLink);

  monthlyLink.style.opacity = "100%";
  monthlyLink.style.fontWeight = "800";
  populateCards("monthly");
});

weeklyLink.style.opacity = "100%";
weeklyLink.style.fontWeight = "800";
populateCards("weekly");
