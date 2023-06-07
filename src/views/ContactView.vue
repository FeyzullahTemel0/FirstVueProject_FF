<template>
  <div class="contact">
    <section class="contact-form">
      <h2>SEND US A MESSAGE</h2>
      <form>
        <div class="form-group">
          <input type="text" id="name" class="input-field" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <input type="email" id="email" class="input-field" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" rows="4" class="input-field" placeholder="Your Message" required></textarea>
        </div>
        <button class="btn" @click="sendEmail">Send Message</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    sendEmail() {
      window.open('mailto:feyzullaht421@gmail.com');
    }
  }
}
</script>

<style>.contact {
  font-family: 'Arial', sans-serif;
  color: #333;
  background: #f5f5dc; /* Change the background color to beige (#f5f5dc) */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.contact-form {
  background: #f5f5dc; /* Change the background color to beige (#f5f5dc) */
  padding: 20px 0;
  text-align: center;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}

.input-field {
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  resize: vertical;
}

button.btn {
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.btn:hover {
  background-color: #777;
}
</style>
