const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const special = document.getElementById("special");
const nums = document.getElementById("nums");
const lenInput = document.getElementById("len");
const generateBtn = document.getElementById("generate");
const finalEl = document.getElementById("final");
const errorEl = document.getElementById("error");
const copyBtn = document.getElementById("copy");

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMS = "0123456789";
// Safe, common special chars:
const SPECIAL = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

function generatePassword(length, charset) {
  let out = "";
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * charset.length);
    out += charset[idx];
  }
  return out;
}

function generate() {
  errorEl.textContent = "";

  const length = Number(lenInput.value);

  if (!Number.isInteger(length) || length <= 0) {
    errorEl.textContent = "Please enter a valid length (1 to 64).";
    finalEl.textContent = "—";
    return;
  }

  if (length > 64) {
    errorEl.textContent = "Max length is 64.";
    finalEl.textContent = "—";
    return;
  }

  let allowed = "";
  if (upper.checked) allowed += UPPER;
  if (lower.checked) allowed += LOWER;
  if (nums.checked) allowed += NUMS;
  if (special.checked) allowed += SPECIAL;

  if (allowed.length === 0) {
    errorEl.textContent = "Select at least one option (uppercase/lowercase/numbers/special).";
    finalEl.textContent = "—";
    return;
  }

  const password = generatePassword(length, allowed);
  finalEl.textContent = password;
}

generateBtn.addEventListener("click", generate);

// Optional: press Enter in length input to generate
lenInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generate();
});

// Copy button
copyBtn.addEventListener("click", async () => {
  const text = finalEl.textContent;
  if (!text || text === "—") return;

  try {
    await navigator.clipboard.writeText(text);
    errorEl.textContent = "Copied to clipboard ✅";
    setTimeout(() => (errorEl.textContent = ""), 1200);
  } catch {
    errorEl.textContent = "Copy failed (browser blocked clipboard).";
  }
});
