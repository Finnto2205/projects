window.onload = init;


function init(params) {
  document.getElementById("FName").addEventListener('blur', handleFName);
  document.getElementById("FName").addEventListener('focus', function() {
          console.log("The first name has got the focus");
          document.getElementById('fnameErr').innerHTML = "";
        
      });

      document.getElementById("LName").addEventListener('blur',handleLName);
      document.getElementById("LName").addEventListener('focus', function() {
        console.log("The last name has got the focus");
        document.getElementById('LnameErr').innerHTML = ""
        
      });

      document.getElementById("CaoNo").addEventListener('blur',handleNum);
      document.getElementById("CaoNo").addEventListener('focus', function() {
        console.log("The number has got the focus");
        document.getElementById('numErr').innerHTML = ""
        
      });

      //document.getElementById("email").addEventListener('blur',handleMail);
      document.getElementById("email").addEventListener('focus',function(){
        console.log("Email has the focus");
        document.getElementById('emErr').innerHTML = ""

      });

      document.getElementById("Gender").addEventListener('blur',handleGen);
      document.getElementById("Gender").addEventListener('focus',function(){
        console.log("Gender has the focus");
        
      });
      
    document.getElementById("BSc").addEventListener('blur',handleBSc);
    document.getElementById("BSc").addEventListener('focus',function(){
      console.log("BSc has the focus");
      });

    document.getElementById("Applied").addEventListener('blur',handleApplied);
    document.getElementById("Applied").addEventListener('focus',function(){
      console.log("Applied has the focus");});

    document.getElementById("Games").addEventListener('blur',handleGames);
    document.getElementById("Games").addEventListener('focus',function(){
      console.log("Games has the focus");});

    document.getElementById("Terms").addEventListener('blur',handleTerms);
    document.getElementById("Terms").addEventListener('focus',function(){
      document.getElementById('termsError').innerHTML = ""
    });
     document.getElementById("submit").addEventListener('click', submitButton);

    }


     
      function handleFName(){
      let first = document.getElementById("FName").value;
        console.log("The first name was " + first +":");
        if(first.length <=3|| first.length > 25){
          document.getElementById('fnameErr').innerHTML = "Name has to be between 2 and 25 characters"
        }
        return;
        //alert('Ok blur event' + first.value)
      }
  

   
      function handleLName(){
        let last = document.getElementById("LName").value;
        console.log("The last name was " + last +":");
        if(last.length <=3 || last.length > 25){
          document.getElementById('LnameErr').innerHTML = "Name has to be between 2 and 25 characters"
        }
        return;
       // alert('Ok blur event' + last.value)
      }
    
      function handleGen(){
      let Gender = document.getElementById("Gender").value;
      console.log("The Gender picked was "+ Gender + ":");
      /*if(Gender.charAt(0) = 'F')
      {female = "[f]"}
      else if(Gender.charAt(0) == 'M')
      {male = "[M]"}*/
      }
      
     
      function handleNum(){
        let num = document.getElementById("CaoNo").value;
        console.log("The number was " + num +":");
        if(num.length >9 || num.length <9 || num.charAt(0) != 'L'){
          document.getElementById('numErr').innerHTML = "There has to be 9 characters and begin with 'L'"
        }
        //alert('Ok blur event' + num.value)
      }
      function handleMail(){
        let mail = document.getElementById("email").value;
        console.log("The Email was " + email +":");

      }
     function handleBSc(){
        let BScCheckbox = document.getElementById('BSc');
        if (BScCheckbox) {
          return BScCheckbox.checked;
      }
      return false; 
    }
      function handleApplied(){
        let appliedCheckbox = document.getElementById('Applied');
    if (appliedCheckbox) {
        return appliedCheckbox.checked;
    }
    return false;
    }
    function handleGames() {
      let gamesCheckbox = document.getElementById('Games');
      if (gamesCheckbox) {
          return gamesCheckbox.checked;
      }
      return false;
  }

     
      function handleTerms(){
        let termsBox = document.getElementById('Terms')
        if(!termsBox.checked){
          document.getElementById('termsError').textContent = "Terms and Conditions must be accepted";
          return;
        }


      }
      function submitButton(){
        let BSc = handleBSc();
        let Applied = handleApplied();
        let Games = handleGames();
        let selectedCourse;
    
        if (!(BSc || Applied || Games)) {
            alert("Please select a course before adding a student.");
            return;
        }

    
        let num = document.getElementById("CaoNo").value;
        let last = document.getElementById("LName").value;
        let first = document.getElementById("FName").value;
        let gender = document.getElementById("Gender").value;
        handleFName();
        handleLName();
        handleGen();
        handleNum();

        if (BSc) {
            selectedCourse = 'bsc';
        } else if (Applied) {
            selectedCourse = 'applied';
        } else if (Games) {
            selectedCourse = 'games';
        }
    
        addStudentToList(selectedCourse, num, last, first, gender);
    }
     
     
     
       function addStudentToList(selectedCourse, num, last, first, gender) {
        let ol1 = document.getElementById(selectedCourse + '-list');
    
        // If the list doesn't exist, create a new one
        if (!ol1) {
            ol1 = document.createElement('li');
            ol1.id = selectedCourse + '-list';
            document.getElementById(selectedCourse).appendChild(ol1);
        }
    
        let create = document.createElement("li");
        let add = document.createTextNode(' (' + num + '), ' + last + ', ' + first + '[' + gender + ']');
        create.appendChild(add);
        ol1.appendChild(create);
      
        document.getElementById('genderImg').innerHTML = '';
        let img = document.createElement('img');
        if (gender === 'm') {
            img.src = 'male.png';
        } else if (gender === 'f') {
            img.src = 'female.png';
        } else {
            img.src = 'other.png';
        }
        img.alt = 'Gender Image';
        
        document.getElementById('genderImg').appendChild(img);
      }
      
     
    