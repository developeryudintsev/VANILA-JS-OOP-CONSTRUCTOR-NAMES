function Family() {
    this.array = ['Igor', 'Olga', 'Sasha', 'Nadia', 'Amely'];
    this.text = null;
    this.push = null;
    this.result = null;
}
Family.prototype.start = function () {
    let currentThis = this;
    currentThis.text = document.querySelector('#text');
    currentThis.push = document.querySelector('#push');
    currentThis.result = document.querySelector('#result')

    currentThis.push.addEventListener('click', function () {
        currentThis.pushBTN();
    })

}
Family.prototype.pushBTN = function () {
    let string = this.array.join();
    console.log(string);
    let lowerString = string.toLowerCase();
    console.log(lowerString)
    let lowerArray = lowerString.split(',');
    console.log(lowerArray)

    let textValue = this.text.value;
    let finalTextValue = textValue.toLowerCase();
    console.log(finalTextValue)

    let key2 = lowerArray.indexOf(finalTextValue);
    console.log(key2)

    if (key2 === -1) {
        // console.log('pizdec!')
        this.result.innerHTML = 'pizdec!';
    } else {
        this.result.innerHTML = 'OK!';
        // console.log('OK!')
    }
}