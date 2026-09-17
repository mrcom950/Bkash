// ==========================================
// Global Balance & Storage Manager
// ==========================================
const BALANCE_KEY = 'userBalance';
const DEFAULT_BALANCE = 21253.53;

// ১. পেজ লোড হলেই ব্যালেন্স চেক ও সেট করা
function initBalance() {
  if (localStorage.getItem(BALANCE_KEY) === null) {
    localStorage.setItem(BALANCE_KEY, DEFAULT_BALANCE);
  }
}

// ২. বর্তমান ব্যালেন্স পাওয়ার ফাংশন
function getBalance() {
  initBalance();
  return parseFloat(localStorage.getItem(BALANCE_KEY)) || DEFAULT_BALANCE;
}

// ৩. নতুন ব্যালেন্স সেভ করার ফাংশন
function updateBalance(newBalance) {
  localStorage.setItem(BALANCE_KEY, parseFloat(newBalance).toFixed(2));
}

// ৪. টাকা কাটার ফাংশন (Send Money, Cashout, Recharge ইত্যাদির জন্য)
function deductBalance(amount) {
  let current = getBalance();
  amount = parseFloat(amount);
  if (isNaN(amount) || amount <= 0 || amount > current) {
    return false;
  }
  let updated = current - amount;
  updateBalance(updated);
  return true;
}

// ৫. টাকা যোগ করার ফাংশন (Add Money-এর জন্য)
function addBalance(amount) {
  let current = getBalance();
  amount = parseFloat(amount);
  if (!isNaN(amount) && amount > 0) {
    updateBalance(current + amount);
  }
}

// ৬. ফরম্যাট করা ব্যালেন্স (যেমন: 21,253.53)
function getFormattedBalance() {
  return getBalance().toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// অটো ইনিশিয়ালাইজেশন
initBalance();
