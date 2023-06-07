<template>
  <div class="site">
    <div class="home">
      <header class="hero">
        <h1 class="hero-title">Hoş Geldiniz!</h1>
        <div class="hero-image-container">
          <img src="https://c.pxhere.com/images/28/95/d90f2f5d3b4b47a7818a77a66126-1617333.jpg!d" alt="Dağ Resmi" class="hero-image">
        </div>
        <p class="hero-subtitle">Zodiac's Web Site</p>
      </header>

      <section class="features">
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
        <button class="cta-button">Daha Fazla Bilgi</button>
      </section>
    </div>
  </div>
</template>

<style scoped>
.site {
  background-color: #ffffff;
  color: #333;
  border-radius: 10px;
  display:inline;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.home {
  text-align: center;
  color: #333;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5rem;
}

.hero {
  position: relative;
  padding: 2rem;
  background-color: #000;
}

.hero-image-container {
  position: relative;
  width: 100%;
  height: calc(100vw / 4);
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%) saturate(120%) contrast(1.2) blur(1px);
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
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
  width: 100%;
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
</style>
