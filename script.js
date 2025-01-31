const cardsContainer = document.querySelectorAll("#cards-container > div");

const getUserData = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
  }
};
getUserData();
const populateDate = async () => {
  try {
    const cardsData = await getUserData();

    cardsData.forEach((card) => {
      const template = `<div class="flex flex-col rounded-lg">
          <div
            class="relative w-full h-12 bg-LightRedWork rounded-t-xl overflow-hidden xl:h-14"
          >
            <img
              src="./images/icon-work.svg"
              alt=""
              class="absolute -top-[20%] right-1"
            />
          </div>
          <div
            class="bg-DarkBlue w-full p-6 rounded-b rounded-t-xl -mt-4 z-10 flex flex-col gap-x-2 xl:gap-x-0 xl:gap-y-8"
          >
            <div class="flex justify-between items-center">
              <h1 class="font-bold text-white text-[18px]">${card.title}</h1>
              <img
                src="./images/icon-ellipsis.svg"
                alt=""
                class="w-[16px] h-[4px] cursor-pointer"
              />
            </div>
            <div
              class="flex justify-between items-center xl:flex-col xl:items-start xl:gap-y-1"
            >
              <h1 class="font-extralight text-white text-3xl xl:text-5xl">
                <span id="current-hour">32</span>hrs
              </h1>
              <p class="text-white text-xs opacity-[75%]">
                Last week - <span id="previous-hour">8</span>hrs
              </p>
            </div>
          </div>
        </div>`;
      cardsContainer.append(template);
    });
  } catch (error) {
    console.log("error populating cards data");
  }
};

populateDate();
