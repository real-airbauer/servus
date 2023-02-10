<template>
  <div class="home-container">
    <nav class="home-navbar">
      <div class="home-nav-content">
        <div class="home-nav-links">
          <a href="#aboutme" class="home-link nav-link">About Me</a>
          <a href="#fancyskills" class="home-link1 nav-link">
            <span>FancyShit</span>
            <br />
          </a>
        </div>
        <a href="#links" class="home-link2">
          <div class="home-socials get-started">
            <span class="home-text2">Links</span>
          </div>
        </a>
        <div id="open-mobile-menu" class="home-hamburger get-started">
          <img
            alt="image"
            src="9df4c1d2-c994-4c1e-a57e-b5a81d63ee6c"
            class="home-image"
          />
        </div>
      </div>
      <div id="mobile-menu" class="home-mobile-menu">
        <div class="home-branding">
          <img
            alt="image"
            src="/playground_assets/planical7012-ttpb.svg"
            class="home-image1"
          />
          <div id="close-mobile-menu" class="home-container1">
            <svg viewBox="0 0 1024 1024" class="home-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="home-nav-links1">
          <span class="nav-link">Features</span>
          <span class="nav-link">Why us</span>
          <span class="nav-link">Prices</span>
          <span class="nav-link">Contact</span>
        </div>
        <div class="get-started"><span class="home-text3">Get started</span></div>
      </div>
      <div>
        <DangerousHTML
          html="<script>
      /*
  Mobile menu - Code Embed
  */
  
  /* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
  the mobile menu will still work*/
  
  const listenForUrlChangesMobileMenu = () => {
      let url = location.href;
      document.body.addEventListener('click', () => {
          requestAnimationFrame(() => {
              if (url !== location.href) {
                  runMobileMenuCodeEmbed();
                  url = location.href;
              }
          });
      },
      true
      );
  };
  
  const runMobileMenuCodeEmbed = () => {
      // Mobile menu
      const mobileMenu = document.querySelector('#mobile-menu')
  
      // Buttons
      const closeButton = document.querySelector('#close-mobile-menu')
      const openButton = document.querySelector('#open-mobile-menu')
  
      // On openButton click, set the mobileMenu position left to -100vw
      openButton && openButton.addEventListener('click', function() {
          mobileMenu.style.transform = 'translateX(0%)'
      })
  
      // On closeButton click, set the mobileMenu position to 0vw
      closeButton && closeButton.addEventListener('click', function() {
          mobileMenu.style.transform = 'translateX(100%)'
      })
  }
  
  runMobileMenuCodeEmbed()
  listenForUrlChangesMobileMenu()
  </script>"
        ></DangerousHTML>
      </div>
    </nav>
    <section class="home-section">
      <div class="home-hero">
        <div class="home-content">
          <main class="home-main">
            <header class="home-header">
              <h1 class="home-heading">Hi, i&apos;m AIRbauer</h1>
              <span class="home-caption">&lt;3</span>
            </header>
            <div class="home-buttons">
              <a href="#links" class="home-link7">
                <div class="home-socialsg button">
                  <span class="home-text4">Links &lt;3</span>
                </div>
              </a>
            </div>
          </main>
        </div>
        <lottie-vue-player
          :src="`https://assets6.lottiefiles.com/packages/lf20_ex5DR6Osfr.json`"
          :autoplay="true"
          :speed="1"
          :backgroundColor="transparent"
          :loop="true"
          class="home-lottie-node"
        ></lottie-vue-player>
        <div class="home-image2"></div>
      </div>
    </section>
    <section id="aboutme" class="home-section1">
      <header class="home-header1">
        <h2 class="home-werbinich">Who am I?</h2>
        <span class="home-text5">
          I am from Germany and I am a passionate gamer and programmer. I love to
          meet new people, so feel free to write me &lt;3 If you have any
          questions or Hitman Speedrun tips, I&apos;m always there.
        </span>
      </header>
    </section>
    <section id="fancyskills" class="home-section2">
      <header class="home-header2">
        <header class="home-left">
          <span class="section-head">especially programming</span>
          <h2 class="section-heading">My Skills &lt;3</h2>
        </header>
        <div class="home-right">
          <p class="home-paragraph section-description">
            That&apos;s not all I can do and just because it says something
            doesn&apos;t mean I&apos;m the best at it. I just want to show what
            I&apos;m not bad at and what I enjoy the most!
          </p>
        </div>
      </header>
      <main class="home-cards">
        <app-card1></app-card1>
        <app-card4></app-card4>
        <app-card3></app-card3>
      </main>
    </section>
    <section id="links" class="home-section4">
      <header class="home-header3">
        <span class="section-head">All my links</span>
        <h2 class="home-linksheaderig section-heading">
          My Links and Socials &lt;3
        </h2>
      </header>
    </section>
    <section class="home-section6">
      <a
        href="https://github.com/real-airbauer"
        target="_blank"
        rel="noreferrer noopener"
        class="home-github button"
      >
        GitHub
      </a>
      <button type="button" class="home-discord button">Discord</button>
      <a
        href="https://twitter.com/real_airbauer"
        target="_blank"
        rel="noreferrer noopener"
        class="home-twitter button"
      >
        Twitter
      </a>
      <a
        href="https://dev.to/airbauer"
        target="_blank"
        rel="noreferrer noopener"
        class="home-devto button"
      >
        Dev.to
      </a>
      <a
        href="https://gitlab.com/real-airbauer"
        target="_blank"
        rel="noreferrer noopener"
        class="home-gitlab button"
      >
        GitLab
      </a>
    </section>
    <footer class="home-footer">
      <div class="home-content1">
        <main class="home-main-content">
          <div class="home-content2"></div>
          <section class="home-copyright">
            <span class="home-text6">© 2023 AIRbauer. All Rights Reserved.</span>
          </section>
        </main>
        <section class="home-copyright1">
          <span class="home-text7">© 2022 latitude. All Rights Reserved.</span>
        </section>
      </div>
    </footer>
    <div>
      <DangerousHTML
        html="<script>
      /*
  Accordion - Code Embed
  */
  
  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/
  
  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          'click',
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };
  
  
  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role='accordion-container']'); // All accordion containers
      const accordionContents = document.querySelectorAll('[data-role='accordion-content']'); // All accordion content
      const accordionIcons = document.querySelectorAll('[data-role='accordion-icon']'); // All accordion icons
  
      accordionContents.forEach((accordionContent) => {
          accordionContent.style.display = 'none'; //Hides all accordion contents
      });
  
      accordionContainers.forEach((accordionContainer, index) => {
          accordionContainer.addEventListener('click', () => {
              accordionContents.forEach((accordionContent) => {
              accordionContent.style.display = 'none'; //Hides all accordion contents
              });
  
              accordionIcons.forEach((accordionIcon) => {
                  accordionIcon.style.transform = 'rotate(0deg)'; // Resets all icon transforms to 0deg (default)
              });
  
              accordionContents[index].style.display = 'flex'; // Shows accordion content
              accordionIcons[index].style.transform = 'rotate(180deg)'; // Rotates accordion icon 180deg
          });
      });
  }
  
  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()
  
  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class 'accordion-open'
              - If it does, it removes class 'accordion-open'
              - If it doesn't, it:
                  - Removes class 'accordion-open' from all containers
                  - Adds class 'accordion-open' to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
  </script>"
      ></DangerousHTML>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.mjs'

import AppCard1 from '../components/card1'
import AppCard4 from '../components/card4'
import AppCard3 from '../components/card3'

export default {
  name: 'Home',
  components: {
    DangerousHTML,
    AppCard1,
    AppCard4,
    AppCard3,
  },
  head: {
    title: 'airbauer',
    meta: [
      {
        property: 'og:title',
        content: 'airbauer',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.home-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: 1200px;
  align-self: auto;
  align-items: center;
  flex-shrink: 1;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-fiveunits);
}
.home-nav-content {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-direction: row;
  justify-content: flex-start;
}
.home-nav-links {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  border-color: transparent;
}
.home-link {
  text-decoration: none;
}
.home-link1 {
  text-decoration: none;
}
.home-link2 {
  display: contents;
}
.home-socials {
  text-decoration: none;
}
.home-text2 {
  color: rgba(255, 255, 255, 1);
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-stretch: normal;
  text-decoration: none;
}
.home-hamburger {
  display: none;
}
.home-image {
  width: 100px;
  object-fit: cover;
}
.home-mobile-menu {
  gap: var(--dl-space-space-twounits);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  position: fixed;
  transform: translateX(100%);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: column;
  background-color: #fff;
}
.home-branding {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-image1 {
  width: 100px;
  filter: brightness(0) saturate(100%);
  object-fit: cover;
}
.home-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon {
  width: 24px;
  height: 24px;
}
.home-nav-links1 {
  gap: var(--dl-space-space-unit);
  color: var(--dl-color-gray-black);
  display: flex;
  flex-direction: column;
}
.home-text3 {
  color: rgba(255, 255, 255, 1);
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-stretch: normal;
  text-decoration: none;
}
.home-section {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  justify-content: center;
  border-bottom-width: 1px;
}
.home-hero {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
}
.home-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-header {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-heading {
  color: rgb(255, 255, 255);
  font-size: 64px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-caption {
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: Poppins;
  line-height: 30px;
}
.home-buttons {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-link7 {
  display: contents;
}
.home-socialsg {
  display: flex;
  text-decoration: none;
  background-color: #80FF44;
}
.home-text4 {
  color: #0C100C;
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.home-lottie-node {
  width: 300px;
  height: 300px;
}
.home-image2 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: none;
}
.home-section1 {
  gap: var(--dl-space-space-sixunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
}
.home-header1 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  max-width: 900px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-werbinich {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-text5 {
  color: #C2C6CC;
  width: 100%;
  max-width: 600px;
  text-align: center;
  font-family: Poppins;
  line-height: 28px;
}
.home-section2 {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
}
.home-header2 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-left {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-right {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-paragraph {
  width: 100%;
  max-width: 480px;
}
.home-cards {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-section4 {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 120px;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
}
.home-header3 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-linksheaderig {
  text-align: center;
}
.home-section6 {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 120px;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
}
.home-github {
  top: 70px;
  left: 700px;
  color: #80ff44;
  position: absolute;
  text-align: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  text-decoration: none;
  background-color: var(--dl-color-gray-black);
}
.home-discord {
  top: 70px;
  left: 300px;
  color: #80ff44;
  position: absolute;
  text-align: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  background-color: var(--dl-color-gray-black);
}
.home-twitter {
  top: 70px;
  left: 500px;
  color: #80ff44;
  position: absolute;
  text-align: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  text-decoration: none;
  background-color: var(--dl-color-gray-black);
}
.home-devto {
  top: 70px;
  color: rgb(128, 255, 68);
  right: 176px;
  position: absolute;
  align-self: flex-end;
  text-align: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  text-decoration: none;
  background-color: var(--dl-color-gray-black);
}
.home-gitlab {
  top: 70px;
  left: 100px;
  color: rgb(128, 255, 68);
  position: absolute;
  text-align: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  text-decoration: none;
  background-color: var(--dl-color-gray-black);
}
.home-footer {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: center;
}
.home-content1 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.home-main-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-content2 {
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-copyright {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text6 {
  color: #C4C4C4;
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
.home-copyright1 {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text7 {
  color: rgb(196, 196, 196);
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
@media(max-width: 991px) {
  .home-section {
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-hero {
    gap: var(--dl-space-space-fourunits);
    flex: 1;
    position: relative;
    max-width: auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-content {
    position: relative;
    align-items: center;
  }
  .home-main {
    align-items: center;
  }
  .home-heading {
    text-align: left;
  }
  .home-caption {
    text-align: left;
  }
  .home-buttons {
    width: 100%;
  }
  .home-socialsg {
    flex: 1;
  }
  .home-image2 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .home-werbinich {
    text-align: center;
  }
  .home-section2 {
    gap: var(--dl-space-space-threeunits);
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .home-header2 {
    gap: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-cards {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
  .home-content1 {
    gap: var(--dl-space-space-threeunits);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-copyright {
    display: none;
  }
  .home-copyright1 {
    display: flex;
  }
}
@media(max-width: 767px) {
  .home-navbar {
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .home-nav-links {
    display: none;
  }
  .home-socials {
    display: none;
  }
  .home-hamburger {
    display: flex;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-image {
    width: 16px;
    height: 14px;
  }
  .home-branding {
    width: 100%;
  }
  .home-nav-links1 {
    margin-top: var(--dl-space-space-twounits);
    align-items: flex-start;
    margin-bottom: var(--dl-space-space-twounits);
    justify-content: center;
  }
  .home-content {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-heading {
    font-size: 40px;
  }
  .home-caption {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-family: Poppins;
    line-height: 24px;
  }
  .home-socialsg {
    padding-top: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }
  .home-section1 {
    gap: var(--dl-space-space-fourunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-werbinich {
    font-size: 32px;
    text-align: center;
  }
  .home-left {
    gap: var(--dl-space-space-unit);
  }
  .home-content2 {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .home-header {
    align-items: flex-start;
  }
  .home-heading {
    max-width: 280px;
  }
}
</style>
