const questions = [
    {
        question: "¿Qué significa HTML?",
        options: ["Lenguaje de Marcado de Hipertexto", "Lenguaje de Programación", "Hojas de Estilo en Cascada", "Lenguaje de Marcado de Texto"],
        respuesta: "Lenguaje de Marcado de Hipertexto"
    },
    {
        question: "¿Qué significa CSS?",
        options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        respuesta: "Cascading Style Sheets"
    },
    {
        question: "¿Para qué se utiliza principalmente JavaScript en el desarrollo web?",
        options: ["Estilizar páginas web", "Crear elementos interactivos", "Gestionar bases de datos", "Scripting en el lado del servidor"],
        respuesta: "Crear elementos interactivos"
    },
    {
        question: "¿Qué símbolo se utiliza para comentarios de una sola línea en JavaScript?",
        options: ["//", "/*", "<!--", "-->"],
        respuesta: "//"
    },
    {
        question: "¿Cuál es el resultado de `2 + 2 + '5'` en JavaScript?",
        options: ["9", "45", "22", "Error"],
        respuesta: "45"
    },
    {
        question: "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
        options: ["push()", "append()", "addToEnd()", "insertLast()"],
        respuesta: "push()"
    },
    {
        question: "¿Cuál de los siguientes tipos de datos se utiliza para almacenar texto en JavaScript?",
        options: ["number", "string", "boolean", "array"],
        respuesta: "string"
    },
    {
        question: "¿Cuál es el resultado de `3 == '3'` en JavaScript?",
        options: ["true", "false", "Error", "undefined"],
        respuesta: "true"
    },
    {
        question: "¿Qué palabra clave se utiliza para declarar una variable en JavaScript?",
        options: ["var", "variable", "v", "declare"],
        respuesta: "var"
    },
    {
        question: "¿Cuál es el operador de asignación en JavaScript?",
        options: ["=", "==", "===", ":="],
        respuesta: "="
    },
    {
        question: "¿Qué función se utiliza para imprimir algo en la consola en JavaScript?",
        options: ["console.print()", "log()", "print()", "display()"],
        respuesta: "log()"
    },
    {
        question: "¿Cuál es el resultado de `typeof null` en JavaScript?",
        options: ["object", "null", "undefined", "number"],
        respuesta: "object"
    },
    {
        question: "¿Cuál es la forma correcta de escribir un comentario de varias líneas en JavaScript?",
        options: ["/* Este es un comentario */", "// Este es un comentario //", "<!-- Este es un comentario -->", "'' Este es un comentario ''"],
        respuesta: "/* Este es un comentario */"
    },
    {
        question: "¿Cuál es el método que se utiliza para cambiar el contenido de un elemento HTML en JavaScript?",
        options: ["changeContent()", "modify()", "setHTML()", "innerHTML()"],
        respuesta: "innerHTML()"
    },
    {
        question: "¿Qué tipo de bucle se utiliza para ejecutar un bloque de código mientras una condición sea verdadera en JavaScript?",
        options: ["for loop", "while loop", "do-while loop", "if loop"],
        respuesta: "while loop"
    },
    {
        question: "¿Cuál es el operador lógico AND en JavaScript?",
        options: ["&&", "||", "!", "&"],
        respuesta: "&&"
    },
    {
        question: "¿Qué método se utiliza para obtener la longitud de un array en JavaScript?",
        options: ["size()", "length()", "getSize()", "count()"],
        respuesta: "length()"
    },
    {
        question: "¿Cuál es el resultado de `undefined == null` en JavaScript?",
        options: ["true", "false", "Error", "undefined"],
        respuesta: "true"
    },
    {
        question: "¿Cuál de las siguientes afirmaciones sobre los objetos en JavaScript es correcta?",
        options: ["Los objetos no pueden contener funciones", "Los objetos pueden contener solo datos primitivos", "Los objetos pueden contener tanto datos primitivos como funciones", "Los objetos solo pueden contener funciones"],
        respuesta: "Los objetos pueden contener tanto datos primitivos como funciones"
    },
    {
        question: "¿Qué función se utiliza para redondear un número hacia abajo al entero más cercano en JavaScript?",
        options: ["round()", "ceil()", "floor()", "truncate()"],
        respuesta: "floor()"
    },
    {
        question: "¿Qué método se utiliza para eliminar el último elemento de un array en JavaScript?",
        options: ["removeLast()", "delete()", "pop()", "splice()"],
        respuesta: "pop()"
    },
    {
        question: "¿Cuál es el resultado de `typeof NaN` en JavaScript?",
        options: ["number", "NaN", "undefined", "string"],
        respuesta: "number"
    },
    {
        question: "¿Cuál es el operador de concatenación de cadenas en JavaScript?",
        options: ["++", "+", "||", ":"],
        respuesta: "+"
    },
    {
        question: "¿Qué función se utiliza para convertir una cadena a minúsculas en JavaScript?",
        options: ["toLowerCase()", "toLowercase()", "convertLowerCase()", "stringLower()"],
        respuesta: "toLowerCase()"
    }
];


const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score-value');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', selectOption);
        optionsContainer.appendChild(button);
    });
}

function selectOption(event) {
    const selectedButton = event.target;
    const correct = selectedButton.textContent === questions[currentQuestionIndex].respuesta;
    const correctAnswer = questions[currentQuestionIndex].respuesta;
    if (correct) {
        score++;
        selectedButton.classList.add('correct-answer');
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: '¡Respuesta correcta!',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        selectedButton.classList.add('incorrect-answer');
        Swal.fire({
            icon: 'error',
            title: 'Incorrecto',
            html: `Respuesta incorrecta. La respuesta correcta es: <strong>${correctAnswer}</strong>.`,
        })}
    scoreElement.textContent = score;
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.disabled = false;
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = false;
        });
        nextButton.disabled = true;
    }  else {
        // End of the quiz
        const totalQuestions = questions.length;
        const correctPercentage = (score / totalQuestions) * 100;

        let message = "";

        if (correctPercentage > 50) {
            message = "Felicitaciones, sabes mucho de JavaScript.";
        } else if (correctPercentage < 50) {
            message = "No está mal, pero falta práctica... ¡No te desanimes!";
        } else {
            message = "Tienes más que solo una idea sobre JavaScript, pero falta práctica. ¡Ánimo!";
        }

        Swal.fire({
            icon: 'info',
            title: 'Completado!',
            html: `Tu puntuación: ${score}/${totalQuestions}<br><br>${message}`,
            showConfirmButton: true,
        });
    }
}

nextButton.addEventListener('click', showNextQuestion);

startQuiz();
