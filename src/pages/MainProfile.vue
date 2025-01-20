<template>
  <div>
    <NavBar :activeSection="activeSection" />
    <section id="section1"
      class="h-screen bg-gradient-to-r from-space-blue via-coffee-brown to-dark-black flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8">
      <div class="absolute top-0 left-0 w-full h-full bg-space-pattern"></div>

      <div class="relative z-10 flex flex-col items-center justify-center w-full px-4 mt-14 md:px-8">
        <!-- Image Above Title -->
        <div class="w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4 border-coffee-brown shadow-lg rounded-full mb-8">
          <img src="/images/dabid1.jpg" alt="Your Name" class="w-full h-full object-cover rounded-full" ref="image" />
        </div>

        <div class="max-w-3xl text-center mx-auto space-y-8">
          <h1 class="text-5xl md:text-6xl font-extrabold text-star-light mb-4 opacity-0" ref="title">
            Welcome to My World
          </h1>

          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto opacity-0 mt-4 leading-relaxed">
            Hi! I'm Dave Leonard, a Computer Engineer on a mission to change the world.

          </p>

          <div class="mt-8">
            <a href="#section3"
              class="bg-coffee-brown text-white py-3 px-8 rounded-lg shadow-lg hover:bg-coffee-cream transition duration-300 text-lg">
              Explore My Work
            </a>
          </div>
          <div class="text-3xl text-gray-200 fade-in">
            <span>I love </span>
            <span ref="typedElement"></span>
          </div>

        </div>
      </div>
    </section>

    <section id="section2"
      class="bg-gradient-to-r from-space-blue via-coffee-brown to-dark-black flex flex-col items-center justify-center relative overflow-hidden py-28">
      <div class="absolute top-0 left-0 w-full h-full bg-space-pattern"></div>
      <div class="relative max-w-5xl text-center space-y-12 " ref="section2Content">
        <h2 class="text-5xl font-extrabold text-white mb-6">About Me</h2>

        <p class="text-lg text-white  mt-4 max-w-2xl mx-auto leading-relaxed">
          Coding is more than just a job for me it's my therapy and my way of exploring creativity. Whether I’m happy,
          sad, or somewhere in between, I turn to code to express myself.
          (Still learning everyday).
        </p>

        <div
          class="p-6 bg-green-600 text-white rounded-lg shadow-lg max-w-sm mx-auto transform hover:scale-105 transition duration-300 ease-in-out">
          <div class="flex items-center mb-4">
            <i class="fab fa-spotify text-4xl text-green-300"></i>
            <h3 class="ml-3 text-xl font-bold">Favorite Music</h3>
          </div>
          <div class="mb-4">
            <img src="https://parreviewsmusic.wordpress.com/wp-content/uploads/2020/03/coyote-theory.jpg"
              alt="Album Cover" class="w-full rounded-lg" />
          </div>
          <div>
            <h4 class="text-lg font-semibold">This side of paradise</h4>
            <p class="text-sm text-gray-200">Cayote Theory</p>
          </div>
          <a href="https://open.spotify.com/track/79EkGysjP2dL5GdpeQjRxT?si=57f87cb97a114ccd" target="_blank"
            class="mt-4 inline-block w-full text-center bg-green-800 text-white py-2 px-4 rounded-lg shadow hover:bg-green-900 transition duration-200">
            Play on Spotify
          </a>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div
            class="p-8 bg-coffee-dark text-coffee-cream rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 class="text-xl font-bold mb-4 text-golden-brew">Languages & Frameworks</h3>
            <p class="text-lg">Here are some of the technologies I work with:</p>
            <ul class="mt-4 space-y-6">
              <li class="flex items-center space-x-6">
                <i class="fab fa-js-square text-4xl text-yellow-400"></i>
                <span>JavaScript / TypeScript</span>
              </li>
              <li class="flex items-center space-x-6">
                <i class="fab fa-vuejs text-4xl text-green-500"></i>
                <span>Vue.js & Nuxt.js</span>
              </li>
              <li class="flex items-center space-x-5">
                <i class="fab fa-react text-4xl text-blue-400"></i>
                <span>React.js</span>
              </li>
              <li class="flex items-center space-x-3">
                <i class="fab fa-node text-4xl text-green-700"></i>
                <span>Node.js & Express.js</span>
              </li>
              <li class="flex items-center space-x-6">
                <i class="fab fa-python text-4xl text-yellow-500"></i>
                <span>Python</span>
              </li>
              <li class="flex items-center space-x-7">
                <i class="fab fa-java text-4xl text-red-600"></i>
                <span>Java</span>
              </li>
            </ul>
          </div>

          <div
            class="p-8 bg-coffee-dark text-coffee-cream rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 class="text-xl font-bold mb-4 text-golden-brew">Skills</h3>
            <p class="text-lg">These are some of the areas where I have knowledge:</p>
            <ul class="mt-4 space-y-6">
              <li class="flex items-center space-x-4">
                <i class="fas fa-code text-4xl text-purple-500"></i>
                <span>Full Stack Development</span>
              </li>
              <li class="flex items-center space-x-9">
                <i class="fas fa-plug text-4xl text-blue-600"></i>
                <span>RESTful APIs</span>
              </li>
              <li class="flex items-center space-x-10">
                <i class="fas fa-mobile-alt text-4xl text-teal-400"></i>
                <span>Responsive Web Design & UX/UI</span>
              </li>
              <li class="flex items-center space-x-8">
                <i class="fas fa-database text-4xl text-orange-500"></i>
                <span>SQL & NoSQL Database Management</span>
              </li>
              <li class="flex items-center space-x-7">
                <i class="fab fa-github text-4xl text-black"></i>
                <span>Version Control (Git & GitHub)</span>
              </li>
              <li class="flex items-center space-x-4">
                <i class="fas fa-cogs text-4xl text-gray-600"></i>
                <span>Agile & DevOps Practices</span>
              </li>
              <li class="flex items-center space-x-6">
                <div class="flex-shrink-0">
                  <i class="fas fa-heart text-4xl text-red-500"></i>
                </div>
                <span class="text-lg">Emotional Intelligence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>

    <section id="section3"
      class=" bg-gradient-to-r from-space-blue via-coffee-brown to-dark-black flex flex-col items-center justify-center relative overflow-hidden px-8 py-20 ">

      <div class="absolute top-0 left-0 w-full h-full bg-space-pattern"></div>
      <h3 class="text-4xl font-bold mb-12 text-golden-brew ">Projects Made (Some of it is private due to DI PWEDE MA
        EXPOSE HAAHHAH)</h3>

      <div class="grid grid-cols-2 gap-8 opacity-0" ref="section3Content">
        <div class="bg-coffee-dark p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-golden-brew mb-4">Scanventory (Created using React Native)</h3>
          <p class="text-coffee-cream">A mobile app that manage inventory and have a scanner to add or search some items
            in your inventory.</p>
          <a href="https://github.com/Dabiidi/Scanventory" target="_blank"
            class="mt-4 inline-block text-center bg-golden-brew text-coffee-dark py-2 px-4 rounded shadow hover:bg-yellow-500 transition duration-200">
            View on GitHub
          </a>
        </div>
        <div class="bg-coffee-dark p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-golden-brew mb-4">Ripeness Classification (Python, Tensorflow, RaspberryPI
            4)</h3>
          <p class="text-coffee-cream">An Machine Learning Application that manage to detect the ripeness of a durian
            (Thesis with my bro team ❤ )</p>
          <a href="https://github.com/Dabiidi/RipenessClassification" target="_blank"
            class="mt-4 inline-block text-center bg-golden-brew text-coffee-dark py-2 px-4 rounded shadow hover:bg-yellow-500 transition duration-200">
            View on GitHub
          </a>
        </div>

        <div class="bg-coffee-dark p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-golden-brew mb-4">ChatApp (JavaScript, HTML, CSS)</h3>
          <p class="text-coffee-cream">An application that manage to send and received a message from the sender to user
            vise-versa.</p>
          <a href="https://github.com/Dabiidi/ChatApp" target="_blank"
            class="mt-4 inline-block text-center bg-golden-brew text-coffee-dark py-2 px-4 rounded shadow hover:bg-yellow-500 transition duration-200">
            View on GitHub
          </a>
        </div>
        <div class="bg-coffee-dark p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-golden-brew mb-4">QR Scanner for relief goods (Android Studio)</h3>
          <p class="text-coffee-cream">A mobile application that scan a QR code and will not able to scanned again if
            the QR is already scanned. Project is propose during my college days</p>
          <a href="https://github.com/Dabiidi/ChatApp" target="_blank"
            class="mt-4 inline-block text-center bg-golden-brew text-coffee-dark py-2 px-4 rounded shadow hover:bg-yellow-500 transition duration-200">
            View on GitHub
          </a>
        </div>
      </div>
    </section>


    <section id="section4"
      class=" bg-gradient-to-r from-space-blue via-coffee-brown to-dark-black flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 py-20">
      <div class="absolute top-0 left-0 w-full h-full bg-space-pattern"></div>

      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-coffee-cream mb-8">Contact Me</h2>
        <p class="text-lg text-gray-300 mb-12">
          Feel free to reach out to me through any of the platforms below.
        </p>
        <div class="flex justify-center space-x-6">
          <!-- Instagram -->
          <a href="https://www.instagram.com/daaaaavz/" target="_blank"
            class="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-110 transition-transform duration-300"
            aria-label="Instagram">
            <i class="fab fa-instagram text-white text-2xl group-hover:rotate-12 transition-transform"></i>
          </a>

          <a href="facebook.com/dave.engracia" target="_blank"
            class="group flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:scale-110 transition-transform duration-300"
            aria-label="Facebook">
            <i class="fab fa-facebook-f text-white text-2xl group-hover:rotate-12 transition-transform"></i>
          </a>

          <a href="https://discord.gg/dabiidi" target="_blank"
            class="group flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 hover:scale-110 transition-transform duration-300"
            aria-label="Discord">
            <i class="fab fa-discord text-white text-2xl group-hover:rotate-12 transition-transform"></i>
          </a>
          <!-- GitHub -->
          <a href="https://github.com/Dabiidi" target="_blank"
            class="group flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 hover:scale-110 transition-transform duration-300"
            aria-label="GitHub">
            <i class="fab fa-github text-white text-2xl group-hover:rotate-12 transition-transform"></i>
          </a>
          <!-- Email -->
          <a href="mailto:daveleonardengracia@gmail.com"
            class="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-teal-500 hover:scale-110 transition-transform duration-300"
            aria-label="Email">
            <i class="fas fa-envelope text-white text-2xl group-hover:rotate-12 transition-transform"></i>
          </a>
          <a href="https://steamcommunity.com/id/DAVINCI06/"
            class="group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-110 transition-transform duration-300"
            aria-label="Steam">
            <i class="fab fa-steam text-white text-2xl group-hover:rotate-12 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "/src/components/NavBar.vue";
import Typed from 'typed.js';

gsap.registerPlugin(ScrollTrigger);

const activeSection = ref("home");
const loading = ref(true);
const typedElement = ref(null);

onMounted(() => {
  const options = {
    strings: ["Coding.", "Gaming.", "Anime.", "Traveling.", "You."
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true
  };

  new Typed(typedElement.value, options);
  setTimeout(() => {
    loading.value = false;
  }, 3000);

  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        activeSection.value = section.id.replace("section", "");
      },
      onEnterBack: () => {
        activeSection.value = section.id.replace("section", "");
      },
    });
  });

  gsap.fromTo(
    "#section1 h1",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#section1",
        start: "top 70%",
      },
    }
  );

  gsap.fromTo(
    "#section1 p",
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#section1",
        start: "top 70%",
      },
    }
  );
  gsap.fromTo(
    "#section2 div",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: "#section2",
        start: "top 70%",
      },
    }
  );
  gsap.fromTo(
    "#section3 .grid",
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      scrollTrigger: {
        trigger: "#section3",
        start: "top 70%",
      },
    }
  );
});
</script>
<style scoped>
.typewriter {
  font-family: 'Courier New', monospace;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 4s steps(40) 1s forwards, blink 0.75s step-end infinite;
}

@keyframes typing {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}
</style>