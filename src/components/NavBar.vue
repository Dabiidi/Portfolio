<template>
    <nav class="fixed w-full bg-space-blue text-white z-10 shadow-lg flex items-center justify-between p-4">
      <div>
        <img src="/images/logo.jpg" class="w-14 h-14" alt="Logo">
      </div>
      <ul class="flex justify-end space-x-8 text-lg">
        <li>
          <a
            href="#"
            :class="activeSection === 'home' ? 'text-coffee-cream font-bold border-b-2 border-coffee-cream' : ''"
            @click.prevent="scrollTo('#section1', 'home')"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="activeSection === 'about' ? 'text-coffee-cream font-bold border-b-2 border-coffee-cream' : ''"
            @click.prevent="scrollTo('#section2', 'about')"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="activeSection === 'projects' ? 'text-coffee-cream font-bold border-b-2 border-coffee-cream' : ''"
            @click.prevent="scrollTo('#section3', 'projects')"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const activeSection = ref("home");
  
  const scrollTo = (selector, section) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      activeSection.value = section;
    }
  };
  
  // Detect active section on scroll
  const detectActiveSection = () => {
    const sections = [
      { id: "home", element: document.querySelector("#section1") },
      { id: "about", element: document.querySelector("#section2") },
      { id: "projects", element: document.querySelector("#section3") },
    ];
  
    const threshold = window.innerHeight / 2;
  
    for (const section of sections) {
      const rect = section.element?.getBoundingClientRect();
      if (rect && rect.top < threshold && rect.bottom > threshold) {
        activeSection.value = section.id;
        break;
      }
    }
  };
  
  onMounted(() => {
    window.addEventListener("scroll", detectActiveSection);
  });
  </script>
  
  <style scoped>
  nav {
    background-color: var(--space-blue);
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s, border-color 0.3s;
  }
  
  nav ul li a:hover {
    color: var(--golden-brew);
  }
  
  nav ul li a.text-coffee-cream {
    color: var(--coffee-cream);
  }
  
  nav ul li a.text-coffee-cream:hover {
    color: var(--golden-brew);
  }
  
  nav ul li a {
    padding: 8px 16px;
    border-radius: 4px;
  }
  
  nav ul li a.text-coffee-cream {
    border-bottom: 2px solid var(--coffee-cream);
  }
  
  nav ul li a.text-coffee-cream:hover {
    border-bottom: 2px solid var(--golden-brew);
  }
  </style>
  
  