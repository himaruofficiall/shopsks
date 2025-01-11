// Toggle Menu (Hamburger)
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Menampilkan Metode Pembayaran
function showPaymentOption(option) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    if (option === 'qris') {
        modalImage.src = './images/qris.png';
    } else if (option === 'gopay') {
        modalImage.src = './images/gopay.jpg';
    } else if (option === 'dana') {
        modalImage.src = './images/dana.jpg';
    }

    modal.style.display = 'block'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide the modal
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Mengirim Form ke Telegram Bot
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Ambil data dari form
    const transactionId = document.getElementById('transaction-id').value;
    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;

    // Validasi jika field tidak kosong
    if (!transactionId || !name || !whatsapp) {
        alert('Semua field harus diisi!');
        return;
    }

    // Konfigurasi untuk Telegram Bot
    const TELEGRAM_BOT_API_URL = "https://api.telegram.org/bot";
    const BOT_TOKEN = "7634252795:AAFMdsJuL77zSVucoskwPXnRy_S0tZPLhg4"; // Ganti dengan token bot Telegram Anda
    const CHAT_ID = "6975695436"; // Ganti dengan ID chat grup atau pengguna Anda

    // Membuat pesan yang akan dikirim ke Telegram
    const messageText = `Transaction ID: ${transactionId}\nName: ${name}\nWhatsApp: ${whatsapp}`;
    
    // Log pesan yang akan dikirim
    console.log('Data yang akan dikirim ke Telegram:', messageText);

    // Buat URL untuk mengirim pesan ke Telegram
    const telegramUrl = `${TELEGRAM_BOT_API_URL}${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(messageText)}`;
    
    // Kirim pesan ke Telegram
    fetch(telegramUrl)
        .then(response => response.json())
        .then(result => {
            console.log('Response dari Telegram API:', result);
            if (result.ok) {
                alert('Form Submitted Successfully');
                window.location.href = 'index.html'; // Redirect ke halaman home
            } else {
                alert('Failed to send message to Telegram');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit form');
        });
        // Data harga
const originalPrice = 150000;
const discountAmount = 30000;

// Hitung total bayar
const finalPrice = originalPrice - discountAmount;

// Tampilkan harga ke elemen HTML
document.querySelector('.original-price').textContent = `Rp ${originalPrice.toLocaleString()}`;
document.querySelector('.discount').textContent = `Diskon: Rp ${discountAmount.toLocaleString()}`;
document.querySelector('.final-price').textContent = `Total Bayar: Rp ${finalPrice.toLocaleString()}`;

});

