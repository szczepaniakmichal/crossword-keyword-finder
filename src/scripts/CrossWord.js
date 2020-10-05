export class CrossWord {

    inputsArray = [];
    allWords = ['javaScript', 'node.js', 'deno', 'python', 'java', 'c++'];

    getWordLength() {
        const value = document.querySelector('.get-word-length__input').value;
        if (!isNaN(value)) return value;
    }

    generateInputs(parent) {
        const howManyInputs = this.getWordLength();
        const title = parent.querySelector('.generate-inputs-word__title');
        title.style.display = 'block';
        const fields = parent.querySelector('.generate-inputs-word__field');
        fields.textContent = '';

        for (let i = 0; i < howManyInputs; i++) {
            const div = document.createElement('div');
            const label = document.createElement('label');
            const input = document.createElement('input');
            div.classList.add('generate-inputs-word__word');
            label.textContent = i + 1;
            input.addEventListener('input', () => {
                console.log(this.inputsArray);
                this.clearInputsArray();
            })
            div.appendChild(label);
            div.appendChild(input);
            fields.appendChild(div);
        }

        const btnFindWord = document.createElement('button');
        btnFindWord.classList.add('generate-inputs-word__btn-find');
        btnFindWord.textContent = 'Wyszukaj słowa'
        const getFindBtn = document.querySelector('.generate-inputs-word__btn-find');
        if (getFindBtn) return;
        btnFindWord.addEventListener('click', () => {
            this.findWords(this.allWords);
        })
        parent.appendChild(btnFindWord);
    }

    getInputsValue() {
        const inputs = [...document.querySelectorAll('.generate-inputs-word__word > input')];
        inputs.forEach(input => {
            this.inputsArray.push(input.value);
        })
        return this.inputsArray;
    }

    findWords(array) {
        this.getInputsValue();
        array.forEach(word => {
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < this.inputsArray.length; j++) {
                    if (word.charAt(i) === this.inputsArray[i]) {
                        console.log(word);
                    }
                }
            }
        })
    }

    clearInputsArray() {
        this.inputsArray.splice(0, this.inputsArray.length);
    }
}