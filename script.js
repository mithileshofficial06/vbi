// Translations
const translations = {
  english: {
    header: 'VILLAGE BANK OF INDIA',
    footer: 'Secured by Villagebankofindia',
    cancelSession: 'Cancel Session',
    emergencyHelp: 'Emergency Help',
    cardInsert: {
      title: 'Please Insert Your Card',
      subtitle: 'Card insertion slot is on your right',
      button: 'Continue'
    },
    language: {
      title: 'Select Language / மொழி',
      tamil: 'தமிழ்',
      english: 'English',
      others: 'Others / மற்றவை'
    },
    mainMenu: {
      title: 'Select Service',
      subtitle: 'Choose the service you need',
      withdraw: 'Withdraw',
      withdrawSub: 'Get cash',
      balance: 'Balance',
      balanceSub: 'Check balance',
      statement: 'Statement',
      statementSub: 'View history',
      deposit: 'Deposit',
      depositSub: 'Add cash'
    },
    pinEntry: {
      title: 'Please Enter Your PIN',
      secretTitle: 'Please Enter Your Secret PIN',
      subtitle: 'Protect your screen with your hand while typing',
      back: 'BACK',
      confirm: 'CONFIRM',
      error: 'Please enter a 4-digit PIN'
    },
    accountType: {
      title: 'Which account do you use?',
      subtitle: 'Select your account type',
      savings: 'Savings Account',
      savingsSub: 'Personal Use',
      current: 'Current Account',
      currentSub: 'Business Use'
    },
    amountEntry: {
      title: 'Enter Amount',
      subtitle: 'Enter the amount you want to withdraw',
      clear: 'CLEAR',
      confirm: 'Confirm',
      error: 'Please enter a valid amount'
    },
    balance: {
      title: 'Available Balance',
      account: 'Account',
      print: 'Print Receipt',
      done: 'Done / Exit'
    },
    cashInsert: {
      title: 'Please Insert Your Cash',
      subtitle: 'Place up to 200 notes in the open slot. No envelopes.',
      slotReady: '✓ Slot is open and ready',
      acceptedNotes: 'Accepted Notes',
      processing: 'Processing Securely...'
    },
    cashCounting: {
      title: 'Please Wait While We Count Your Cash',
      warning: '⚠ Do not remove your card or leave the machine',
      counting: 'Counting Cash...'
    },
    depositConfirm: {
      title: 'Is the amount correct?',
      total: 'Total',
      addMore: 'Add More Cash',
      confirm: 'Confirm & Deposit'
    },
    processing: {
      withdrawal: 'Processing your withdrawal...',
      deposit: 'Processing Your Deposit',
      subtitle: 'Your account is being updated',
      security: '🔒 Security Protocol Active',
      warning: '⚠ Do not remove your card'
    },
    statement: {
      title: 'Statement Summary',
      account: 'Account',
      print: 'Print Statement',
      done: 'Done'
    },
    printing: {
      title: 'Printing Your Statement...',
      subtitle: 'Please collect your paper from the slot below',
      message: 'Transaction processing. Securely clearing data...'
    },
    pleaseWait: {
      title: 'Please Wait',
      subtitle: 'We are processing your request. Do not remove your card'
    },
    success: {
      title: 'Transaction Successful',
      withdrawSubtitle: 'Please collect your cash and receipt from the slots below',
      depositSubtitle: 'Your deposit has been processed',
      depositAmount: 'DEPOSIT Amount',
      cashReady: 'Cash Ready',
      receiptPrinted: 'Receipt Printed',
      depositComplete: 'Deposit Complete',
      done: 'DONE / EXIT'
    },
    thankYou: {
      title: 'Thank You!',
      subtitle: 'Your transaction is complete. Please collect your card.',
      transactionId: 'Transaction ID',
      done: 'Done / Exit'
    },
    alerts: {
      cancelConfirm: 'Are you sure you want to cancel this session?',
      emergencyHelp: 'Emergency Help: Please contact bank staff or call 1800-XXX-XXXX'
    }
  },
  tamil: {
    header: 'இந்திய கிராம வங்கி',
    footer: 'Villagebankofindia மூலம் பாதுகாக்கப்பட்டது',
    cancelSession: 'அமர்வை ரத்து செய்',
    emergencyHelp: 'அவசர உதவி',
    cardInsert: {
      title: 'உங்கள் அட்டையை செருகவும்',
      subtitle: 'அட்டை செருகும் இடம் உங்கள் வலது பக்கத்தில் உள்ளது',
      button: 'தொடரவும்'
    },
    language: {
      title: 'மொழியைத் தேர்ந்தெடுக்கவும் / Select Language',
      tamil: 'தமிழ்',
      english: 'English',
      others: 'மற்றவை / Others'
    },
    mainMenu: {
      title: 'சேவையைத் தேர்ந்தெடுக்கவும்',
      subtitle: 'உங்களுக்குத் தேவையான சேவையைத் தேர்ந்தெடுக்கவும்',
      withdraw: 'பணம் எடுக்க',
      withdrawSub: 'பணம் பெறுக',
      balance: 'இருப்பு',
      balanceSub: 'இருப்பு சரிபார்க்க',
      statement: 'அறிக்கை',
      statementSub: 'வரலாறு காண',
      deposit: 'வைப்பு',
      depositSub: 'பணம் சேர்க்க'
    },
    pinEntry: {
      title: 'உங்கள் பின் எண்ணை உள்ளிடவும்',
      secretTitle: 'உங்கள் ரகசிய பின் எண்ணை உள்ளிடவும்',
      subtitle: 'தட்டச்சு செய்யும் போது உங்கள் கையால் திரையை பாதுகாக்கவும்',
      back: 'பின்',
      confirm: 'உறுதிப்படுத்து',
      error: '4 இலக்க பின் எண்ணை உள்ளிடவும்'
    },
    accountType: {
      title: 'எந்த கணக்கை பயன்படுத்துகிறீர்கள்?',
      subtitle: 'உங்கள் கணக்கு வகையைத் தேர்ந்தெடுக்கவும்',
      savings: 'சேமிப்பு கணக்கு',
      savingsSub: 'தனிப்பட்ட பயன்பாடு',
      current: 'நடப்பு கணக்கு',
      currentSub: 'வணிக பயன்பாடு'
    },
    amountEntry: {
      title: 'தொகையை உள்ளிடவும்',
      subtitle: 'நீங்கள் எடுக்க விரும்பும் தொகையை உள்ளிடவும்',
      clear: 'அழி',
      confirm: 'உறுதிப்படுத்து',
      error: 'சரியான தொகையை உள்ளிடவும்'
    },
    balance: {
      title: 'கிடைக்கக்கூடிய இருப்பு',
      account: 'கணக்கு',
      print: 'ரசீது அச்சிடு',
      done: 'முடிந்தது / வெளியேறு'
    },
    cashInsert: {
      title: 'உங்கள் பணத்தை செருகவும்',
      subtitle: 'திறந்த இடத்தில் 200 நோட்டுகள் வரை வைக்கவும். உறைகள் தேவையில்லை.',
      slotReady: '✓ இடம் திறந்து தயாராக உள்ளது',
      acceptedNotes: 'ஏற்றுக்கொள்ளப்பட்ட நோட்டுகள்',
      processing: 'பாதுகாப்பாக செயலாக்கப்படுகிறது...'
    },
    cashCounting: {
      title: 'உங்கள் பணத்தை எண்ணும் வரை காத்திருக்கவும்',
      warning: '⚠ உங்கள் அட்டையை அகற்றவோ அல்லது இயந்திரத்தை விட்டு வெளியேறவோ வேண்டாம்',
      counting: 'பணம் எண்ணப்படுகிறது...'
    },
    depositConfirm: {
      title: 'தொகை சரியானதா?',
      total: 'மொத்தம்',
      addMore: 'மேலும் பணம் சேர்க்க',
      confirm: 'உறுதிப்படுத்து & வைப்பு'
    },
    processing: {
      withdrawal: 'உங்கள் பணம் எடுப்பு செயலாக்கப்படுகிறது...',
      deposit: 'உங்கள் வைப்பு செயலாக்கப்படுகிறது',
      subtitle: 'உங்கள் கணக்கு புதுப்பிக்கப்படுகிறது',
      security: '🔒 பாதுகாப்பு நெறிமுறை செயலில் உள்ளது',
      warning: '⚠ உங்கள் அட்டையை அகற்ற வேண்டாம்'
    },
    statement: {
      title: 'அறிக்கை சுருக்கம்',
      account: 'கணக்கு',
      print: 'அறிக்கை அச்சிடு',
      done: 'முடிந்தது'
    },
    printing: {
      title: 'உங்கள் அறிக்கை அச்சிடப்படுகிறது...',
      subtitle: 'கீழே உள்ள இடத்திலிருந்து உங்கள் காகிதத்தை சேகரிக்கவும்',
      message: 'பரிவர்த்தனை செயலாக்கப்படுகிறது. தரவு பாதுகாப்பாக அழிக்கப்படுகிறது...'
    },
    pleaseWait: {
      title: 'காத்திருக்கவும்',
      subtitle: 'உங்கள் கோரிக்கையை செயலாக்குகிறோம். உங்கள் அட்டையை அகற்ற வேண்டாம்'
    },
    success: {
      title: 'பரிவர்த்தனை வெற்றிகரமாக முடிந்தது',
      withdrawSubtitle: 'கீழே உள்ள இடங்களிலிருந்து உங்கள் பணம் மற்றும் ரசீதை சேகரிக்கவும்',
      depositSubtitle: 'உங்கள் வைப்பு செயலாக்கப்பட்டது',
      depositAmount: 'வைப்பு தொகை',
      cashReady: 'பணம் தயார்',
      receiptPrinted: 'ரசீது அச்சிடப்பட்டது',
      depositComplete: 'வைப்பு முடிந்தது',
      done: 'முடிந்தது / வெளியேறு'
    },
    thankYou: {
      title: 'நன்றி!',
      subtitle: 'உங்கள் பரிவர்த்தனை முடிந்தது. உங்கள் அட்டையை சேகரிக்கவும்.',
      transactionId: 'பரிவர்த்தனை எண்',
      done: 'முடிந்தது / வெளியேறு'
    },
    alerts: {
      cancelConfirm: 'இந்த அமர்வை ரத்து செய்ய விரும்புகிறீர்களா?',
      emergencyHelp: 'அவசர உதவி: வங்கி ஊழியர்களை தொடர்பு கொள்ளவும் அல்லது 1800-XXX-XXXX ஐ அழைக்கவும்'
    }
  }
};

// State Management
const state = {
  currentFlow: '',
  step: 0,
  selectedLanguage: 'english',
  selectedAccountType: null,
  pin: '',
  amount: '',
  depositAmount: 5000,
  balance: 12450
};

let screenContent;
let cancelBtn;
let helpBtn;

// Get translation
function t(key) {
  const keys = key.split('.');
  let value = translations[state.selectedLanguage];
  for (const k of keys) {
    value = value[k];
  }
  return value;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  screenContent = document.getElementById('screen-content');
  cancelBtn = document.getElementById('cancel-btn');
  helpBtn = document.getElementById('help-btn');

  // Update header and footer
  function updateHeaderFooter() {
    document.querySelector('.atm-header h1').textContent = t('header');
    document.querySelector('.footer-brand').textContent = t('footer');
    cancelBtn.textContent = t('cancelSession');
    helpBtn.textContent = t('emergencyHelp');
  }

  // Event Listeners
  cancelBtn.addEventListener('click', () => {
    if (confirm(t('alerts.cancelConfirm'))) {
      resetState();
      loadScreen('card-insert');
    }
  });

  helpBtn.addEventListener('click', () => {
    alert(t('alerts.emergencyHelp'));
  });

  // Initialize App
  updateHeaderFooter();
  loadScreen('card-insert');
});

// Reset State
function resetState() {
  state.currentFlow = '';
  state.step = 0;
  state.selectedLanguage = 'english';
  state.selectedAccountType = null;
  state.pin = '';
  state.amount = '';
  updateHeaderFooter();
}

// Update header and footer text
function updateHeaderFooter() {
  document.querySelector('.atm-header h1').textContent = t('header');
  document.querySelector('.footer-brand').textContent = t('footer');
  cancelBtn.textContent = t('cancelSession');
  helpBtn.textContent = t('emergencyHelp');
}

// Format Currency
function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Screen Transition
function loadScreen(screenName, data = {}) {
  screenContent.classList.remove('slide-in');
  screenContent.style.opacity = '0';
  setTimeout(() => {
    renderScreen(screenName, data);
    screenContent.style.opacity = '1';
    screenContent.classList.add('slide-in');
  }, 150);
}

// Main Render Function
function renderScreen(screenName, data) {
  screenContent.innerHTML = '';
  
  switch(screenName) {
    case 'card-insert':
      renderCardInsert();
      break;
    case 'language':
      renderLanguage();
      break;
    case 'main-menu':
      renderMainMenu();
      break;
    case 'pin-entry':
      renderPinEntry(data);
      break;
    case 'account-type':
      renderAccountType();
      break;
    case 'amount-entry':
      renderAmountEntry();
      break;
    case 'balance':
      renderBalance();
      break;
    case 'cash-insert':
      renderCashInsert();
      break;
    case 'cash-counting':
      renderCashCounting();
      break;
    case 'deposit-confirm':
      renderDepositConfirm();
      break;
    case 'processing':
      renderProcessing(data);
      break;
    case 'statement':
      renderStatement();
      break;
    case 'printing':
      renderPrinting();
      break;
    case 'success':
      renderSuccess(data);
      break;
    case 'thank-you':
      renderThankYou();
      break;
    case 'please-wait':
      renderPleaseWait();
      break;
  }
}

// Screen: Card Insert
function renderCardInsert() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('cardInsert.title')}</h2>
    <p class="screen-subtitle">${t('cardInsert.subtitle')}</p>
    <div class="card-slot" id="card-slot">
      <div class="card-slot-arrow">→</div>
    </div>
    <button class="btn-primary" onclick="animateCardInsert()">${t('cardInsert.button')}</button>
  `;
}

function animateCardInsert() {
  const cardSlot = document.getElementById('card-slot');
  cardSlot.classList.add('animate');
  setTimeout(() => {
    loadScreen('language');
  }, 1500);
}

// Screen: Language Selection
function renderLanguage() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('language.title')}</h2>
    <div class="language-buttons">
      <button class="language-btn" onclick="selectLanguage('tamil')">${t('language.tamil')}</button>
      <button class="language-btn" onclick="selectLanguage('english')">${t('language.english')}</button>
    </div>
    <button class="language-btn secondary" style="width: 100%; max-width: 400px; margin-top: 12px;" onclick="selectLanguage('english')">
      ${t('language.others')}
    </button>
  `;
}

function selectLanguage(lang) {
  state.selectedLanguage = lang;
  updateHeaderFooter();
  loadScreen('main-menu');
}

// Screen: Main Menu
function renderMainMenu() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('mainMenu.title')}</h2>
    <p class="screen-subtitle">${t('mainMenu.subtitle')}</p>
    <div class="btn-grid">
      <div class="btn-grid-item" onclick="startFlow('withdraw')">
        <div class="btn-grid-item-title">${t('mainMenu.withdraw')}</div>
        <div class="btn-grid-item-subtitle">${t('mainMenu.withdrawSub')}</div>
      </div>
      <div class="btn-grid-item" onclick="startFlow('balance')">
        <div class="btn-grid-item-title">${t('mainMenu.balance')}</div>
        <div class="btn-grid-item-subtitle">${t('mainMenu.balanceSub')}</div>
      </div>
      <div class="btn-grid-item" onclick="startFlow('statement')">
        <div class="btn-grid-item-title">${t('mainMenu.statement')}</div>
        <div class="btn-grid-item-subtitle">${t('mainMenu.statementSub')}</div>
      </div>
      <div class="btn-grid-item" onclick="startFlow('deposit')">
        <div class="btn-grid-item-title">${t('mainMenu.deposit')}</div>
        <div class="btn-grid-item-subtitle">${t('mainMenu.depositSub')}</div>
      </div>
    </div>
  `;
}

function startFlow(flow) {
  state.currentFlow = flow;
  state.pin = '';
  
  if (flow === 'withdraw') {
    loadScreen('pin-entry', { title: t('pinEntry.secretTitle'), nextScreen: 'account-type' });
  } else if (flow === 'balance') {
    loadScreen('pin-entry', { title: t('pinEntry.title'), nextScreen: 'account-type' });
  } else if (flow === 'statement') {
    loadScreen('pin-entry', { title: t('pinEntry.title'), nextScreen: 'account-type' });
  } else if (flow === 'deposit') {
    loadScreen('pin-entry', { title: t('pinEntry.title'), nextScreen: 'account-type' });
  }
}

// Screen: PIN Entry (Reusable)
function renderPinEntry(data) {
  const { title = t('pinEntry.title'), subtitle = t('pinEntry.subtitle'), nextScreen } = data;
  
  screenContent.innerHTML = `
    <h2 class="screen-title">${title}</h2>
    <p class="screen-subtitle">${subtitle}</p>
    <div class="pin-display">
      <div class="pin-dot ${state.pin.length >= 1 ? 'filled' : ''}"></div>
      <div class="pin-dot ${state.pin.length >= 2 ? 'filled' : ''}"></div>
      <div class="pin-dot ${state.pin.length >= 3 ? 'filled' : ''}"></div>
      <div class="pin-dot ${state.pin.length >= 4 ? 'filled' : ''}"></div>
    </div>
    <div class="numpad" id="numpad"></div>
  `;
  
  const numpad = document.getElementById('numpad');
  
  // Number buttons 1-9
  for (let i = 1; i <= 9; i++) {
    const btn = document.createElement('button');
    btn.className = 'numpad-btn';
    btn.textContent = i;
    btn.onclick = () => addPinDigit(i.toString(), nextScreen);
    numpad.appendChild(btn);
  }
  
  // BACK button
  const backBtn = document.createElement('button');
  backBtn.className = 'numpad-btn action';
  backBtn.textContent = t('pinEntry.back');
  backBtn.onclick = () => removePinDigit(nextScreen);
  numpad.appendChild(backBtn);
  
  // 0 button
  const zeroBtn = document.createElement('button');
  zeroBtn.className = 'numpad-btn';
  zeroBtn.textContent = '0';
  zeroBtn.onclick = () => addPinDigit('0', nextScreen);
  numpad.appendChild(zeroBtn);
  
  // CONFIRM button
  const confirmBtn = document.createElement('button');
  confirmBtn.className = 'numpad-btn action';
  confirmBtn.textContent = t('pinEntry.confirm');
  confirmBtn.onclick = () => confirmPin(nextScreen);
  numpad.appendChild(confirmBtn);
}

function addPinDigit(digit, nextScreen) {
  if (state.pin.length < 4) {
    state.pin += digit;
    renderPinEntry({ nextScreen });
  }
}

function removePinDigit(nextScreen) {
  state.pin = state.pin.slice(0, -1);
  renderPinEntry({ nextScreen });
}

function confirmPin(nextScreen) {
  if (state.pin.length === 4) {
    loadScreen(nextScreen);
  } else {
    alert(t('pinEntry.error'));
  }
}

// Screen: Account Type Selection
function renderAccountType() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('accountType.title')}</h2>
    <p class="screen-subtitle">${t('accountType.subtitle')}</p>
    <div class="btn-grid">
      <div class="btn-grid-item" onclick="selectAccountType('Savings')">
        <div class="btn-grid-item-title">${t('accountType.savings')}</div>
        <div class="btn-grid-item-subtitle">${t('accountType.savingsSub')}</div>
      </div>
      <div class="btn-grid-item" onclick="selectAccountType('Current')">
        <div class="btn-grid-item-title">${t('accountType.current')}</div>
        <div class="btn-grid-item-subtitle">${t('accountType.currentSub')}</div>
      </div>
    </div>
  `;
}

function selectAccountType(type) {
  state.selectedAccountType = type;
  
  if (state.currentFlow === 'withdraw') {
    loadScreen('amount-entry');
  } else if (state.currentFlow === 'balance') {
    loadScreen('please-wait');
    setTimeout(() => loadScreen('balance'), 2000);
  } else if (state.currentFlow === 'statement') {
    loadScreen('statement');
  } else if (state.currentFlow === 'deposit') {
    loadScreen('cash-insert');
  }
}

// Screen: Amount Entry (Withdraw)
function renderAmountEntry() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('amountEntry.title')}</h2>
    <p class="screen-subtitle">${t('amountEntry.subtitle')}</p>
    <div class="amount-display">
      ${state.amount ? formatCurrency(parseInt(state.amount)) : '₹0'}
      <span class="amount-cursor"></span>
    </div>
    <div class="numpad" id="amount-numpad"></div>
  `;
  
  const numpad = document.getElementById('amount-numpad');
  
  // Number buttons 1-9
  for (let i = 1; i <= 9; i++) {
    const btn = document.createElement('button');
    btn.className = 'numpad-btn';
    btn.textContent = i;
    btn.onclick = () => addAmountDigit(i.toString());
    numpad.appendChild(btn);
  }
  
  // CLEAR button
  const clearBtn = document.createElement('button');
  clearBtn.className = 'numpad-btn action';
  clearBtn.textContent = t('amountEntry.clear');
  clearBtn.onclick = () => {
    state.amount = '';
    renderAmountEntry();
  };
  numpad.appendChild(clearBtn);
  
  // 0 button
  const zeroBtn = document.createElement('button');
  zeroBtn.className = 'numpad-btn';
  zeroBtn.textContent = '0';
  zeroBtn.onclick = () => addAmountDigit('0');
  numpad.appendChild(zeroBtn);
  
  // 00 button
  const doubleZeroBtn = document.createElement('button');
  doubleZeroBtn.className = 'numpad-btn';
  doubleZeroBtn.textContent = '00';
  doubleZeroBtn.onclick = () => addAmountDigit('00');
  numpad.appendChild(doubleZeroBtn);
  
  // Add confirm button below numpad
  const confirmBtn = document.createElement('button');
  confirmBtn.className = 'btn-primary';
  confirmBtn.textContent = t('amountEntry.confirm');
  confirmBtn.style.marginTop = '20px';
  confirmBtn.onclick = confirmAmount;
  screenContent.appendChild(confirmBtn);
}

function addAmountDigit(digit) {
  if (state.amount.length < 7) {
    state.amount += digit;
    renderAmountEntry();
  }
}

function confirmAmount() {
  if (state.amount && parseInt(state.amount) > 0) {
    loadScreen('processing', { message: t('processing.withdrawal'), nextScreen: 'success', flow: 'withdraw' });
  } else {
    alert(t('amountEntry.error'));
  }
}

// Screen: Balance
function renderBalance() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('balance.title')}</h2>
    <div class="balance-amount">${formatCurrency(state.balance)}</div>
    <p class="screen-subtitle">${state.selectedAccountType} ${t('balance.account')}</p>
    <div class="button-group">
      <button class="btn-secondary" onclick="loadScreen('printing')">${t('balance.print')}</button>
      <button class="btn-primary" onclick="loadScreen('thank-you')">${t('balance.done')}</button>
    </div>
  `;
}

// Screen: Cash Insert (Deposit)
function renderCashInsert() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('cashInsert.title')}</h2>
    <p class="screen-subtitle">${t('cashInsert.subtitle')}</p>
    <div class="screen-message" style="color: #22c55e; font-weight: 600; margin: 20px 0;">
      ${t('cashInsert.slotReady')}
    </div>
    <div class="transaction-details">
      <div style="text-align: center; color: #6b7280; font-size: 13px; margin-bottom: 12px;">
        ${t('cashInsert.acceptedNotes')}
      </div>
      <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
        <span style="background: #f3f4f6; padding: 6px 12px; border-radius: 4px; font-size: 12px;">₹10</span>
        <span style="background: #f3f4f6; padding: 6px 12px; border-radius: 4px; font-size: 12px;">₹20</span>
        <span style="background: #f3f4f6; padding: 6px 12px; border-radius: 4px; font-size: 12px;">₹50</span>
        <span style="background: #f3f4f6; padding: 6px 12px; border-radius: 4px; font-size: 12px;">₹100</span>
        <span style="background: #f3f4f6; padding: 6px 12px; border-radius: 4px; font-size: 12px;">₹200</span>
        <span style="background: #f3f4f6; padding: 6px 12px; border-radius: 4px; font-size: 12px;">₹500</span>
      </div>
    </div>
    <div class="loader"></div>
    <p class="screen-message">${t('cashInsert.processing')}</p>
  `;
  
  setTimeout(() => loadScreen('cash-counting'), 2500);
}

// Screen: Cash Counting
function renderCashCounting() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('cashCounting.title')}</h2>
    <p class="screen-subtitle" style="color: #ef4444; font-weight: 600;">
      ${t('cashCounting.warning')}
    </p>
    <div class="progress-container">
      <div class="progress-bar" id="progress-bar" style="width: 0%"></div>
    </div>
    <p class="screen-message" id="progress-text">${t('cashCounting.counting')} 0%</p>
  `;
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 8;
    if (progress > 100) progress = 100;
    
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `${t('cashCounting.counting')} ${progress}%`;
    
    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => loadScreen('deposit-confirm'), 500);
    }
  }, 150);
}

// Screen: Deposit Confirmation
function renderDepositConfirm() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('depositConfirm.title')}</h2>
    <div class="balance-amount">${formatCurrency(state.depositAmount)}</div>
    <div class="transaction-details">
      <div class="transaction-row">
        <span class="transaction-label">₹500 × 10</span>
        <span class="transaction-value">₹5,000</span>
      </div>
      <div class="transaction-row">
        <span class="transaction-label">₹200 × 0</span>
        <span class="transaction-value">₹0</span>
      </div>
      <div class="transaction-row">
        <span class="transaction-label">₹100 × 0</span>
        <span class="transaction-value">₹0</span>
      </div>
      <div class="transaction-row">
        <span class="transaction-label">${t('depositConfirm.total')}</span>
        <span class="transaction-value">${formatCurrency(state.depositAmount)}</span>
      </div>
    </div>
    <div class="button-group">
      <button class="btn-secondary" onclick="loadScreen('cash-insert')">${t('depositConfirm.addMore')}</button>
      <button class="btn-primary" onclick="loadScreen('processing', { message: '${t('processing.deposit')}', subtitle: '${t('processing.subtitle')}', nextScreen: 'success', flow: 'deposit' })">${t('depositConfirm.confirm')}</button>
    </div>
  `;
}

// Screen: Processing
function renderProcessing(data) {
  const { message = t('processing.withdrawal'), subtitle = '', nextScreen = 'success', flow = state.currentFlow } = data;
  
  screenContent.innerHTML = `
    <h2 class="screen-title">${message}</h2>
    ${subtitle ? `<p class="screen-subtitle">${subtitle}</p>` : ''}
    <div class="loader"></div>
    <p class="screen-message" style="color: #22c55e; font-weight: 600;">
      ${t('processing.security')}
    </p>
    <p class="screen-subtitle" style="color: #ef4444; font-weight: 600; margin-top: 16px;">
      ${t('processing.warning')}
    </p>
  `;
  
  setTimeout(() => loadScreen(nextScreen, { flow }), 2500);
}

// Screen: Statement
function renderStatement() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('statement.title')}</h2>
    <p class="screen-subtitle">${state.selectedAccountType} ${t('statement.account')}</p>
    <div class="transaction-details">
      <div class="transaction-row">
        <span class="transaction-label">Oct 24, 2024</span>
        <span class="transaction-value credit">+₹1,000</span>
      </div>
      <div class="transaction-row">
        <span class="transaction-label">Oct 20, 2024</span>
        <span class="transaction-value debit">-₹500</span>
      </div>
      <div class="transaction-row">
        <span class="transaction-label">Oct 18, 2024</span>
        <span class="transaction-value credit">+₹2,500</span>
      </div>
    </div>
    <div class="button-group">
      <button class="btn-secondary" onclick="loadScreen('printing')">${t('statement.print')}</button>
      <button class="btn-primary" onclick="loadScreen('thank-you')">${t('statement.done')}</button>
    </div>
  `;
}

// Screen: Printing
function renderPrinting() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('printing.title')}</h2>
    <p class="screen-subtitle">${t('printing.subtitle')}</p>
    <div class="loader"></div>
    <p class="screen-message">${t('printing.message')}</p>
  `;
  
  setTimeout(() => loadScreen('thank-you'), 2500);
}

// Screen: Please Wait
function renderPleaseWait() {
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('pleaseWait.title')}</h2>
    <p class="screen-subtitle">${t('pleaseWait.subtitle')}</p>
    <div class="loader"></div>
  `;
}

// Screen: Transaction Success
function renderSuccess(data) {
  const { flow = state.currentFlow } = data;
  
  if (flow === 'withdraw') {
    const amount = parseInt(state.amount);
    screenContent.innerHTML = `
      <svg class="success-checkmark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40"/>
        <path d="M30 50 L45 65 L70 35" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2 class="screen-title">${t('success.title')}</h2>
      <p class="screen-subtitle">${t('success.withdrawSubtitle')}</p>
      <div class="balance-amount">${formatCurrency(amount)}</div>
      <div class="status-chips">
        <span class="status-chip">${t('success.cashReady')}</span>
        <span class="status-chip">${t('success.receiptPrinted')}</span>
      </div>
      <button class="btn-primary" onclick="loadScreen('thank-you')">${t('success.done')}</button>
    `;
  } else if (flow === 'deposit') {
    screenContent.innerHTML = `
      <svg class="success-checkmark" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40"/>
        <path d="M30 50 L45 65 L70 35" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2 class="screen-title">${t('success.title')}</h2>
      <p class="screen-subtitle">${t('success.depositSubtitle')}</p>
      <div style="margin: 20px 0;">
        <div style="font-size: 14px; color: #6b7280; margin-bottom: 8px;">${t('success.depositAmount')}</div>
        <div class="balance-amount">${formatCurrency(state.depositAmount)}</div>
      </div>
      <div class="status-chips">
        <span class="status-chip">${t('success.depositComplete')}</span>
      </div>
      <button class="btn-primary" onclick="loadScreen('thank-you')">${t('success.done')}</button>
    `;
  }
}

// Screen: Thank You
function renderThankYou() {
  const txnId = 'VB-' + Math.floor(1000 + Math.random() * 9000) + '-TXN';
  
  screenContent.innerHTML = `
    <h2 class="screen-title">${t('thankYou.title')}</h2>
    <p class="screen-subtitle">${t('thankYou.subtitle')}</p>
    <div class="transaction-id">${t('thankYou.transactionId')}: ${txnId}</div>
    <button class="btn-primary" onclick="resetAndStart()">${t('thankYou.done')}</button>
  `;
}

function resetAndStart() {
  resetState();
  loadScreen('card-insert');
}
