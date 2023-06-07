<template>
    <div class="site">
        <div class="bar">
            <ul class="navigation">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            </ul>
        </div>

      <div class="content">
        <div class="home">
          <header class="hero">
            <h1 class="hero-title">Hoş Geldiniz!</h1>
            <p class="hero-subtitle">Zodiac's Web Site</p>
          </header>
  
          <section class="features" style="text-align: center;border-radius: 20px;">
            <div class="feature">
              <i class="icon fas fa-laptop"></i>
              <h2 class="feature-title">Gelişmiş Tasarım</h2>
              <p class="feature-description">Şık ve estetik bir görünüm</p>
            </div>
  
            <div class="feature">
              <i class="icon fas fa-mobile-alt"></i>
              <h2 class="feature-title">Duyarlı Tasarım</h2>
              <p class="feature-description">Mobil cihazlara uyumlu arayüz</p>
            </div>
  
            <div class="feature">
              <i class="icon fas fa-cogs"></i>
              <h2 class="feature-title">Esnek Özelleştirme</h2>
              <p class="feature-description">Kolayca özelleştirilebilir bileşenler</p>
            </div>
          </section>
  
          <section class="cta">
            <h2 class="cta-title">Hemen Başlayın!</h2>
            <p class="cta-description">Modern web tasarımıyla tanışın</p>
            <button class="cta-button" style="text-align: center;border-radius: 20px;" >Daha Fazla Bilgi</button>
          </section>
  
          <footer class="footer" style="text-align: center;border-radius: 20px;">
            <p>Telif Hakkı &copy; 2023 Örnek Şirket. Tüm hakları saklıdır.</p>
          </footer>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .site {
    background-color: #ffffff;
    color: #333;
  }
  
  .navbar {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  
  .content {
    padding: 2rem;
  }
  
  .home {
    text-align: center;
    color: #333;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .hero {
    padding: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    color: #888;
  }
  
  .features {
    display: flex;
    justify-content: space-around;
    margin: 4rem 0;
    
  }
  
  .feature {
    width: 30%;
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .feature-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .feature-description {
    color: #888;
  }
  
  .cta {
    padding: 4rem 0;
  }
  
  .cta-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .cta-description {
    color: #888;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    background-color: #333;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .footer {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  .bar {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: #333;
    margin-top: 10px;
    border-radius: 25px;
  }
  
  .navigation {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .navigation li {
    margin-right: 10px;
  }
  
  .navigation li:last-child {
    margin-right: 0;
  }
  
  .navigation a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px;
  }
  
  .navigation a:hover {
    background-color: #555;
  }
  </style>
  