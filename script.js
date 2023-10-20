// JavaScript code
window.onload = () => {
    const myInput = document.getElementById("dummyKeyboard");
    myInput.onpaste = (e) => e.preventDefault();
};

const COMMANDS = {
    help: "Command matrix initialized. Accessible commands: <span class='code'>about</span>, <span class='code'>experience</span>, <span class='code'>education</span>, <span class='code'>skills</span>, <span class='code'>acknowledges</span>, <span class='code'>contact</span>, <span class='code'>resume</span>",
    about: "Initializing personal profile...<br> Welcome to my space! I am <b>Haktan Gönen</b>, a <b>Bug Bounty Hunter</b> and a curious apprentice.<br>Currently helping to make the internet safer through bounty hunting. My mission: to act together with other hunters and make the digital world safer by acting ahead of black hats.",
    skills: '<span class="code">Proficiencies:</span> Cybersecurity, Penetration Testing, basic level software developer and more.<br>',
    education: "Bug Bounty Hunter, Adana Türkiye<br> Mersin University computer engineering and Anadolu University management information systems<br>",
    experience: "Determined Hunter<br> Currently honing my skills and I'm always on the hunt.<br>",
    acknowledges: "Security Achievements: Breached firewalls, uncovered vulnerabilities, outsmarted intrusion systems, cracked codes, explored the deep web, remained anonymous.",
    contact: "For encrypted communications and collaboration, reach out through these secure channels:<br> <a href='https://www.instagram.com/haktangnn' class='success link'>Instagram</a> - Covert Visuals<br><a href='https://www.twitter.com/apropos_py' class='success link'>Twitter</a> - Digital Signals<br>",
};

const userInput = document.getElementById("userInput");
const terminalOutput = document.getElementById("terminalOutput");
const inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let input = e.target.value;
        input = input.toLowerCase();
        if (input.length === 0) {
            return;
        }
        let output;
        output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
        if (!COMMANDS.hasOwnProperty(input)) {
            output += `<div class="terminal-line">Unauthorized access attempt detected: <span class="code">${input}</span></div>`;
            console.log("Intrusion detected: Unauthorized command access");
        } else {
            output += COMMANDS[input];
        }
        terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        e.target.value = "";
    }
});