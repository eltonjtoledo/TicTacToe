const initialize = () => {
    let disponiveis = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let user1 = [];
    let user2 = [];
    const ctx = this;
    const construct = () => {
        // Create a div container for app
        const container = document.createElement("div");
        container.id = "game_container";
        
        // Create a button for start the game
        const buttonStart = document.createElement("div");
        buttonStart.id = "button_start";
        buttonStart.innerText = "Iniciar";
        buttonStart.addEventListener("click", ()=>{
            let itens = document.querySelectorAll(".cell");
            itens.forEach((i)=>{
                i.innerText = ""
            });
            window.location.reload()
        });

        
        // Create a inner box container 
        const content = document.createElement("div")
        content.classList.add("content");

        const result = document.createElement("h1");
        result.id = "result";
        
        // Build the table elements 
        let current = 0;
        for (let I = 0; I < 3; I++) {
            const row = document.createElement("ul");
            row.classList.add("row");
            for (e = 0; e < 3; e++) {
                const cell = document.createElement("li");
                cell.classList.add("cell");
                cell.id = current;
                cell.innerText = "";
                row.appendChild(cell);
                current++
            }
            content.appendChild(row)
        }
        
        container.appendChild(buttonStart);
        container.appendChild(content);
        container.appendChild(result);

        document.body.prepend(container);
    }

    const clicked = (event) => {
        if (disponiveis.length > 0) {
            jogoUsuario(event.target, parseInt(event.target.id))
        }
    }
    const fazerJogada = (num) => {
        if (disponiveis.includes(num)) {
            disponiveis.splice(disponiveis.indexOf(num), 1);
            return num;
        }
    }

    const jogoMaquina = (element) => {
        if (disponiveis.length > 0) {
            num = disponiveis[Math.floor(Math.random() * (disponiveis.length - 0) + 0)]
            exibir(fazerJogada(num), "O");
            user2.push(num)
        }
    }

    const jogoUsuario = (element, num) => {
        if (disponiveis.length > 0) {
            exibir(fazerJogada(num), "X");
            user1.push(num);
            jogoMaquina(element);
        }
    }

    const exibir = (item, char) => {
        const element = document.getElementById(`${item}`);
        element.removeEventListener("click", clicked);
        if (element != null) {
            element.innerText = `${char}`;
            Result();
        }
    }

    function Result() {
        if (((buttons[0].innerText == buttons[4].innerText && buttons[8].innerText == buttons[0].innerText) && buttons[0].innerText != "")
            || ((buttons[2].innerText == buttons[4].innerText && buttons[6].innerText == buttons[2].innerText) && buttons[2].innerText != "")
            || ((buttons[3].innerText == buttons[4].innerText && buttons[5].innerText == buttons[3].innerText) && buttons[3].innerText != "")
            || ((buttons[1].innerText == buttons[4].innerText && buttons[7].innerText == buttons[1].innerText) && buttons[1].innerText != "")) {
            document.getElementById("result").innerText = `Vitoria para ${buttons[4].innerText}`;
        } else if (((buttons[0].innerText == buttons[1].innerText && buttons[2].innerText == buttons[0].innerText) && buttons[0].innerText != "")
            || ((buttons[0].innerText == buttons[3].innerText && buttons[6].innerText == buttons[0].innerText) && buttons[0].innerText != "")) {
            document.getElementById("result").innerText = `Vitoria para ${buttons[0].innerText}`;
        } else if (((buttons[6].innerText == buttons[7].innerText && buttons[8].innerText == buttons[6].innerText) && buttons[6].innerText != "")) {
            document.getElementById("result").innerText = `Vitoria para ${buttons[6].innerText}`;
        } else if (((buttons[2].innerText == buttons[5].innerText && buttons[8].innerText == buttons[2].innerText) && buttons[2].innerText != "")) {
            document.getElementById("result").innerText = `Vitoria para ${buttons[2].innerText}`;
        } else if (disponiveis.length == 0) {
            document.getElementById("result").innerText = `Vitoria para Velha`;
        }
    }

    construct();

    const buttons = document.querySelectorAll(".cell");
    buttons.forEach((btn) => {
        btn.addEventListener("click", clicked);
    });
}
window.addEventListener("load", initialize)



