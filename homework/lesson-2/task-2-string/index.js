class MyString {
    static reverse(string) {
        return string.split('').reverse().join('');
    }

    static ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static ucWords(string) {
        var words = string.split(' ');

        words.forEach(function (word, index) {
            words[index] = MyString.ucFirst(word);
        });

        return words.join(' ');
    }
}

console.log(MyString.reverse('lorem ipsum dolor sit amet'));
console.log(MyString.ucFirst('lorem ipsum dolor sit amet'));
console.log(MyString.ucWords('lorem ipsum dolor sit amet'));
