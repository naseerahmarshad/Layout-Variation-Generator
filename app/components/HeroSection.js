'use client';
import { useState } from 'react';

const HeroSection = () => {
  const [variation, setVariation] = useState(0);

  const variations = [
    {
      bgClass: 'bg-blue-500',
      textClass: 'text-white',
      buttonClass: 'bg-yellow-500 text-black',
      additionalClass: 'py-20 px-10',
      text: 'Welcome to My App',
      description: 'Discover amazing features and improve your productivity.',
    },
    {
      bgClass: 'bg-gradient-to-r from-green-400 to-blue-500',
      textClass: 'text-black',
      buttonClass: 'bg-purple-600 text-white',
      additionalClass: 'py-24 px-12',
      text: 'Welcome to My App',
      description: 'Explore the possibilities of seamless productivity.',
    },
    {
      bgClass: 'bg-gray-900',
      textClass: 'text-gray-200',
      buttonClass: 'bg-red-500 text-white',
      additionalClass: 'py-16 px-8',
      text: 'Welcome to My App',
      description: 'Join us and make your workflow more efficient.',
    },
  ];

  const generateVariation = () => {
    const randomVariation = Math.floor(Math.random() * variations.length);
    setVariation(randomVariation);
  };

  const { bgClass, textClass, buttonClass, additionalClass, text, description } = variations[variation];

  const generateHTML = () => {
    return `
      <section class="hero ${bgClass} ${textClass} ${additionalClass}">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold ${textClass}">${text}</h1>
          <p class="mt-4 text-lg ${textClass}">${description}</p>
          <button class="mt-6 px-8 py-3 ${buttonClass} rounded-full">
            Get Started
          </button>
        </div>
      </section>
    `;
  };

  const generateReactJS = () => {
    return `
      import React from 'react';

      const HeroSection = () => {
        return (
          <section className="hero ${bgClass} ${textClass} ${additionalClass}">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold ${textClass}">${text}</h1>
              <p className="mt-4 text-lg ${textClass}">${description}</p>
              <button className="mt-6 px-8 py-3 ${buttonClass} rounded-full">
                Get Started
              </button>
            </div>
          </section>
        );
      };

      export default HeroSection;
    `;
  };

  const generateVueJS = () => {
    return `
      <template>
        <section :class="'hero ' + bgClass + ' ' + textClass + ' ' + additionalClass">
          <div class="container mx-auto text-center">
            <h1 :class="'text-4xl font-bold ' + textClass">{{ text }}</h1>
            <p :class="'mt-4 text-lg ' + textClass">{{ description }}</p>
            <button :class="'mt-6 px-8 py-3 ' + buttonClass + ' rounded-full'">
              Get Started
            </button>
          </div>
        </section>
      </template>

      <script>
      export default {
        data() {
          return {
            bgClass: '${bgClass}',
            textClass: '${textClass}',
            buttonClass: '${buttonClass}',
            additionalClass: '${additionalClass}',
            text: '${text}',
            description: '${description}',
          };
        },
      };
      </script>
    `;
  };

  const downloadCode = (code, fileName) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <section className={`hero ${bgClass} ${textClass} ${additionalClass}`}>
      <div className="container mx-auto text-center">
        <h1 className={`text-4xl font-bold ${textClass}`}>{text}</h1>
        <p className={`mt-4 text-lg ${textClass}`}>{description}</p>
        <button className={`mt-6 px-8 py-3 ${buttonClass} rounded-full`}>
          Get Started
        </button>
        <button
          onClick={generateVariation}
          className="mt-6 px-8 py-3 bg-gray-800 text-white rounded-full"
        >
          Generate Variations
        </button>
        <div className="mt-6">
          <button
            onClick={() => downloadCode(generateHTML(), 'hero-section.html')}
            className="px-8 py-3 bg-blue-500 text-white rounded-full mx-2"
          >
            Download as HTML
          </button>
          <button
            onClick={() => downloadCode(generateReactJS(), 'HeroSection.jsx')}
            className="px-8 py-3 bg-blue-500 text-white rounded-full mx-2"
          >
            Download as React JS
          </button>
          <button
            onClick={() => downloadCode(generateVueJS(), 'HeroSection.vue')}
            className="px-8 py-3 bg-blue-500 text-white rounded-full mx-2"
          >
            Download as Vue JS
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;