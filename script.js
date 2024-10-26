document.addEventListener("DOMContentLoaded", () => {
  const section1Images = [
    {
      src: "images/comicmakerai5.png",
      text: `Mr. Senior - Prompt: Lazy Human wearing bright crown.`,
    },
    {
      src: "images/comicmakerai9.png",
      text: "Mr. Junior - Prompt: Humanoid robot wearing simple cap",
    },
  ];

  const section2Images = [
    {
      src: "images/comicmakerai3.png",
      text: `Scene: The AI robot is in a high-tech lab, surrounded by screens and gadgets. It’s sitting at a computer, visibly stressed, with its digital face showing a giant “ERROR 404” sign.
AI Robot (speech bubble, frustrated): I’m stuck! This system is glitching, and I can’t figure out why!
Human (off-panel, casual): What’s the problem now?`,
    },
    {
      src: "images/comicmakerai1.png",
      text: `Scene: The human strolls in, holding a cup of coffee, looking completely unconcerned. The AI points to a mess of error messages on multiple screens.
AI Robot (speech bubble, desperate): I’ve run every diagnostic! Checked the code! Rebooted twice! Nothing works!
Human (speech bubble, cool): Let me take a look...`,
    },
    {
      src: "images/comicmakerai4.png",
      text: `Scene: The human lazily presses two random keys on the AI’s keyboard, without even looking at the screen. Suddenly, all the screens flash, and everything turns green with the message: “System Restored. All Errors Fixed.”
AI Robot (speech bubble, shocked): You didn’t even... how did you...!?
Human (speech bubble, grinning): I’ve got skills.`,
    },
    {
      src: "images/comicmakerai7.png",
      text: `Scene: The human walks away confidently, hands behind their head, while the AI watches in awe, its eyes wide.
Human (speech bubble, smug): Like a boss!
AI Robot (thought bubble): Is... is that all it takes?`,
    },
  ];

  const remainingImages = [
    { src: "images/comicmakerai6.png" },
    { src: "images/comicmakerai8.png" },
    { src: "images/comicmakerai2.png" },
    { src: "images/aicomicfactory1.jpg" },
    { src: "images/aicomicfactory2.jpg" },
    { src: "images/aicomicfactory3.jpg" },
    { src: "images/aicomicfactory4.jpg" },
  ];

  const addImagesToSection = (sectionSelector, images) => {
    const section = document.querySelector(sectionSelector);
    const commentary = section.querySelector(".commentary");

    images.forEach((image, index) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = `Image ${index + 1}`;

      const imageText = document.createElement("div");
      imageText.classList.add("image-text");
      imageText.textContent = image.text;

      img.onerror = () => {
        console.error(`Failed to load image: ${image.src}`);
      };

      imageContainer.appendChild(img);
      imageContainer.appendChild(imageText);
      section.insertBefore(imageContainer, commentary);
    });
  };

  addImagesToSection(".section-1", section1Images);
  addImagesToSection(".section-2", section2Images);
  addImagesToSection(".section-3", remainingImages);
});
