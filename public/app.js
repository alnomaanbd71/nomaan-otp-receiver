async function fetchOTP() {
  const selectedNumber = document.getElementById('numberSelect').value;
  if (!selectedNumber) {
    alert('অনুগ্রহ করে একটি নম্বর নির্বাচন করুন!');
    return;
  }
  try {
    const response = await fetch(`/api/otp?number=${selectedNumber}`);
    const data = await response.json();
    const otpDisplay = document.getElementById('otpDisplay');
    if (data.success) {
      otpDisplay.innerText = `প্রাপ্ত OTP: ${data.otp}`;
    } else {
      otpDisplay.innerText = `OTP পাওয়া যায়নি, আবার চেষ্টা করুন।`;
    }
  } catch (error) {
    console.error(error);
    alert('সার্ভার এরর! পরে চেষ্টা করুন।');
  }
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin123') {
      window.location.href = '/index.html';
    } else {
      alert('ভুল ইউজারনেম বা পাসওয়ার্ড!');
    }
  });
}