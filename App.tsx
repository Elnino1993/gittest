import React, { useEffect } from 'react';

const LINKS = [
  "https://onlyfans.com/tasty_marie/c8",
  "https://onlyfans.com/yoourpriincess/c7",
  "https://onlyfans.com/natsunya/c10",
  "https://onlyfans.com/medixkate/c59",
  "https://onlyfans.com/eva_millerr/c6",
  "https://onlyfans.com/tori_hayes/c104",
  "https://onlyfans.com/mollylo/c8",
  "https://onlyfans.com/sofaaaaaaaaaa/c5",
  "https://onlyfans.com/hillary_sweets/c110",
  "https://onlyfans.com/paula_flores/c16",
  "https://onlyfans.com/nicole_angel/c57",
  "https://onlyfans.com/sofiaaamillerrr/c54"
];

const App = () => {
  useEffect(() => {
    // Select a random link
    const randomIndex = Math.floor(Math.random() * LINKS.length);
    const selectedUrl = LINKS[randomIndex];

    // 1. Standard redirect attempt
    window.location.href = selectedUrl;

    // 2. Android specific: Try to force Chrome via Intent to break out of in-app browsers
    if (/Android/i.test(navigator.userAgent)) {
      const cleanUrl = selectedUrl.replace(/^https?:\/\//, '');
      const intentUrl = `intent://${cleanUrl}#Intent;scheme=https;package=com.android.chrome;end`;
      
      // extensive delay not needed, we want it to trigger immediately while showing the logo
      setTimeout(() => {
        window.location.href = intentUrl;
      }, 50);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      {/* 
        Using the standard SVG logo to ensure high quality on all devices. 
        It matches the blue logo provided in the screenshot.
      */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/OnlyFans_logo.svg" 
        alt="OnlyFans" 
        className="w-64 md:w-80 max-w-full h-auto object-contain"
      />
    </div>
  );
};

export default App;