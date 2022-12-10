
$(document).ready(function() {
   

    function createQuizOption(value, id, pos) {
   

        var mainDiv = document.createElement('div');
        mainDiv.classList.add('option-wrapper');

        var label = document.createElement('label');
        var inputRadio = document.createElement('input');
        inputRadio.type = 'radio';
        inputRadio.required = true;
        inputRadio.name = 'q'+id;
        inputRadio.value = parseInt(pos) + 1;

        var para = document.createElement('p');
        para.innerHTML = value;

        label.appendChild(inputRadio);
        label.appendChild(para);

        mainDiv.appendChild(label);

        return mainDiv;
    }

    function createQuizQuestion(obj) {
        

        var mainSection = document.createElement('section');
        mainSection.classList.add('quiz-item');

        var question = document.createElement('h3');
        question.innerHTML = 'Q'+obj.id + '. ' + obj.question;

        mainSection.appendChild(question);
        for(var i=0; i< obj.options.length; i++) {
            mainSection.appendChild(createQuizOption(obj.options[i], obj.id, i));
        }

        return mainSection;
    }

    function addSubmitButton() {
      

        var mainSection = document.createElement('section');
        var submitBtn = document.createElement('input');
        submitBtn.id = 'btn-submit';
        submitBtn.type = 'submit';
        submitBtn.value = 'Submit';

        mainSection.appendChild(submitBtn);

        return mainSection;
    }

    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function(data) {
        localStorage.setItem('quiz', JSON.stringify(data));
        //quiz is a class and we are going to clear html with in the quiz class initially
        $('.quiz').html('');

        for(var i=0; i<data.length; i++) {
            $('.quiz').append(createQuizQuestion(data[i]));
        }

        $('.quiz').append(addSubmitButton());
    })

    if(location.search !== '') {
        var quizArr = localStorage.getItem('quiz');
        quizArr = JSON.parse(quizArr);
      
        var solution = location.search.split('?');
        solution = solution[1].split('&');

        var correctCount = 0;
        for(var i=0; i<quizArr.length; i++) {
           

            if(solution[i].split('=')[0] === ('q'+quizArr[i].id)) {
                
                if(parseInt(solution[i].split('=')[1]) === parseInt(quizArr[i].answer)) {
                    correctCount += 1;
                }
            }
        }

        $('#modal-wrapper').css("display", "block");
        $('#result').html(correctCount + '/' + quizArr.length);
    }

    $('#backdrop').click(function() {
        location.search = '';
        $('#modal-wrapper').css("display", "none");
    })
})