function createLogEntry(level, message) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    return {
        raw: formattedMessage,
        html: `<div class="log-entry ${level}">
                 <span class="timestamp">${timestamp}</span>
                 <span class="level">${level}</span>
                 <span class="message">${message}</span>
               </div>`
    };
}

const log = createLogEntry("info", "User logged in successfully");
console.log(log.raw);
console.log(log.html);