let currentCards = [];
let currentCardIndex = 0;
let isFlipped = false;

// Initialize the application
function init() {
    populateCertificationSelect();
    setupEventListeners();
}

// Populate certification dropdown
function populateCertificationSelect() {
    const select = document.getElementById('certificationSelect');
    Object.keys(flashcardsData).forEach(cert => {
        const option = document.createElement('option');
        option.value = cert;
        option.textContent = cert;
        select.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Certification selection
    document.getElementById('certificationSelect').addEventListener('change', handleCertificationChange);
    
    // Domain selection
    document.getElementById('domainSelect').addEventListener('change', handleDomainChange);
    
    // Session controls
    document.getElementById('startSession').addEventListener('click', startSession);
    
    // Card navigation
    document.getElementById('prevCard').addEventListener('click', showPreviousCard);
    document.getElementById('nextCard').addEventListener('click', showNextCard);
    document.getElementById('flashcard').addEventListener('click', flipCard);
}

// Handle certification selection
function handleCertificationChange(e) {
    const certification = e.target.value;
    if (certification) {
        const domains = Object.keys(flashcardsData[certification].Domains);
        showDomainButtons(domains);
    } else {
        hideDomainButtons();
    }
}

// Show domain selection buttons
function showDomainButtons(domains) {
    const container = document.getElementById('domainContainer');
    const select = document.getElementById('domainSelect');
    container.classList.remove('hidden');
    
    // Reset select options
    select.innerHTML = '<option value="">Select Domain</option>';
    
    // Add domain options
    domains.forEach(domain => {
        const option = document.createElement('option');
        option.value = domain;
        option.textContent = domain;
        select.appendChild(option);
    });
}

// Hide domain buttons
function hideDomainButtons() {
    document.getElementById('domainContainer').classList.add('hidden');
    document.getElementById('sessionSetup').classList.add('hidden');
}

// Handle domain change
function handleDomainChange(e) {
    const selectedDomain = e.target.value;
    if (selectedDomain) {
        document.getElementById('sessionSetup').classList.remove('hidden');
    } else {
        document.getElementById('sessionSetup').classList.add('hidden');
    }
}

// Start flashcard session
function startSession() {
    const certification = document.getElementById('certificationSelect').value;
    const domain = document.getElementById('domainSelect').value;
    const cardCount = parseInt(document.getElementById('cardCount').value);

    // Gather all cards from the selected domain
    currentCards = [];
    const topics = flashcardsData[certification].Domains[domain];
    Object.values(topics).forEach(cards => {
        currentCards.push(...cards);
    });

    // Limit cards to selected count
    currentCards = currentCards.slice(0, cardCount);
    currentCardIndex = 0;
    isFlipped = false;

    // Show flashcard section
    document.getElementById('flashcardSection').classList.remove('hidden');
    updateCard();
}

// Update card display
function updateCard() {
    const card = currentCards[currentCardIndex];
    document.getElementById('questionText').textContent = card.question;
    document.getElementById('answerText').textContent = card.answer;
    document.getElementById('progress').textContent = 
        `Card ${currentCardIndex + 1}/${currentCards.length}`;
    
    // Reset flip state
    isFlipped = false;
    document.querySelector('#flashcard .relative').classList.remove('flashcard-flip');
}

// Navigation functions
function showNextCard() {
    if (currentCardIndex < currentCards.length - 1) {
        currentCardIndex++;
        updateCard();
    }
}

function showPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

// Flip card
function flipCard() {
    isFlipped = !isFlipped;
    document.querySelector('#flashcard .relative').classList.toggle('flashcard-flip');
}

// Initialize the application
init(); 