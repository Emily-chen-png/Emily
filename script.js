// Execute after page load
document.addEventListener('DOMContentLoaded', function() {
    // 1. Navigation Switch Functionality
    const navBtns = document.querySelectorAll('.nav-btn');
    const modules = document.querySelectorAll('.module');

    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove all active states
            navBtns.forEach(b => b.classList.remove('active'));
            modules.forEach(m => m.classList.remove('active'));
            
            // Add active state to current button/module
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 2. Personal Profile Module Interaction
    const profileBtn = document.getElementById('profileBtn');
    const profileOutput = document.getElementById('profileOutput');

    profileBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value || '[Your Name]';
        const hobby = document.getElementById('hobby').value || '[Your Hobby]';
        const food = document.getElementById('food').value || '[Your Food]';
        const job = document.getElementById('job').value || '[Your Job]';

        const story = `
            <strong>Hello!</strong> My name is ${name}. I love ${hobby}, and my favorite food is ${food} – .
            In the future, I hope to become a ${job}.
        `;

        profileOutput.innerHTML = story;
        profileOutput.style.display = 'block';
    });

    // 3. Budget Calculator Module Interaction
    const budgetBtn = document.getElementById('budgetBtn');
    const budgetOutput = document.getElementById('budgetOutput');

    budgetBtn.addEventListener('click', function() {
        const income = parseFloat(document.getElementById('income').value) || 0;
        const foodExp = parseFloat(document.getElementById('foodExp').value) || 0;
        const transportExp = parseFloat(document.getElementById('transportExp').value) || 0;
        const entertainmentExp = parseFloat(document.getElementById('entertainmentExp').value) || 0;

        const totalExpenses = foodExp + transportExp + entertainmentExp;
        const balance = income - totalExpenses;
        
        let analysis = '';
        if (balance > 0) {
            analysis = `<strong>Financial Analysis:</strong> Great job! Your monthly remaining balance is $${balance.toFixed(2)}. This means you live within your means with a surplus – consider saving this for future goals or a small treat!`;
        } else if (balance === 0) {
            analysis = `<strong>Financial Analysis:</strong> Your monthly balance is $0, meaning you break even exactly. It's wise to track your expenses closely to ensure you have enough for unexpected costs.`;
        } else {
            analysis = `<strong>Financial Analysis:</strong> Warning! You overspent by $${Math.abs(balance).toFixed(2)} this month – total expenses exceed your income. It's time to review your budget and find areas to cut costs.`;
        }

        budgetOutput.innerHTML = analysis;
        budgetOutput.style.display = 'block';
    });

    // 4. Favorites Generator Module Interaction
    const favoritesBtn = document.getElementById('favoritesBtn');
    const favoritesOutput = document.getElementById('favoritesOutput');

    favoritesBtn.addEventListener('click', function() {
        const movie = document.getElementById('movie').value || '[Movie]';
        const music = document.getElementById('music').value || '[Music]';
        const place = document.getElementById('place').value || '[Place]';

        const profile = `
            <strong>My Life Vision:</strong> My favourite movie is ${movie} – .
            I love listening ${music}. I enjoy staying in ${place} .
        `;

        favoritesOutput.innerHTML = profile;
        favoritesOutput.style.display = 'block';
    });
});