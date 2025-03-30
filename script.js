function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Please enter valid values');
        return;
    }
    
    const bmi = weight / (height * height);
    let result = `Your BMI is ${bmi.toFixed(1)} - `;
    
    if (bmi < 18.5) {
        result += 'Underweight';
    } else if (bmi < 25) {
        result += 'Normal weight';
    } else if (bmi < 30) {
        result += 'Overweight';
    } else {
        result += 'Obese';
    }
    
    document.getElementById('bmi-result').textContent = result;
}

function showAlert() {
    alert('This is an alert box!');
}

function showConfirm() {
    const confirmed = confirm('Are you sure you want to delete this item?');
    document.getElementById('prompt-result').textContent = confirmed ? 'Item deleted!' : 'Deletion canceled';
}

function showPrompt() {
    const name = prompt('Please enter your name:');
    if (name) {
        document.getElementById('prompt-result').textContent = `Hello, ${name}!`;
    }
}

function changeContent() {
    const element = document.getElementById('change-text');
    element.textContent = 'Text changed successfully!';
    element.style.color = 'blue';
}

function hoverEffect(enter) {
    const image = document.getElementById('hover-image');
    if (enter) {
        image.style.transform = 'scale(1.1)';
        image.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    } else {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = 'none';
    }
}

function addItem() {
    const input = document.getElementById('new-item');
    const itemText = input.value.trim();
    
    if (itemText) {
        const list = document.getElementById('item-list');
        const li = document.createElement('li');
        
        li.textContent = itemText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            if (confirm('Are you sure?')) {
                list.removeChild(li);
            }
        };
        
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
    }
}

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    
    let valid = true;
    
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required';
        valid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        valid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Phone must be 10 digits';
        valid = false;
    } else {
        document.getElementById('phone-error').textContent = '';
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = 'Password must contain uppercase, lowercase, number, and special character';
        valid = false;
    } else {
        document.getElementById('password-error').textContent = '';
    }
    
    if (valid) {
        alert('Registration successful!');
        this.reset();
    }
});

function updateDateTime() {
    const now = new Date();
    document.getElementById('current-date').textContent = `Current date and time: ${now.toLocaleString()}`;
    
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').textContent = `Random number between 1-100: ${randomNum}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric');
        const data = await response.json();
        
        if (data.cod === 200) {
            const weather = `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
            document.getElementById('weather-data').textContent = weather;
        } else {
            document.getElementById('weather-data').textContent = 'Weather data not available';
        }
    } catch (error) {
        document.getElementById('weather-data').textContent = 'Error fetching weather data';
    }
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    
    if (task) {
        const list = document.getElementById('todo-list');
        const li = document.createElement('li');
        
        li.textContent = task;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            list.removeChild(li);
        };
        
        li.onclick = function() {
            li.classList.toggle('completed');
        };
        
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message) {
        const chat = document.getElementById('chat-messages');
        
        const userMsg = document.createElement('div');
        userMsg.className = 'message user-message';
        userMsg.textContent = `You: ${message}`;
        chat.appendChild(userMsg);
        
        input.value = '';
        
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'message bot-message';
            
            if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
                botMsg.textContent = 'Bot: Hello there! How can I help you?';
            } else if (message.toLowerCase().includes('how are you')) {
                botMsg.textContent = 'Bot: I am just a bot, but thanks for asking!';
            } else {
                botMsg.textContent = 'Bot: I did not understand that. Can you rephrase?';
            }
            
            chat.appendChild(botMsg);
            chat.scrollTop = chat.scrollHeight;
        }, 1000);
    }
}