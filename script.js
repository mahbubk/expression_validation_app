let option = prompt(`Enter digit for expression:

  1.Email Address

  2.BD Phone Number

  3.Postal Code

  4.IP Address
  `
  );

switch(option) {
 case '1':
   mail = document.querySelector('.mail');
   label = document.createElement('label');
  label.for = 'email';
  label.innerHTML = 'Enter E-mail Address: ';
   input = document.createElement('input');
  input.type = 'text';
  input.id= 'email';
  input.className = 'u-full-width';

   btn = document.createElement('button');
  btn.className = 'btn';
  btn.className = 'u-full-width';
  btn.innerHTML = 'SUBMIT';

  mail.appendChild(label);
  mail.appendChild(input);

  mail.appendChild(btn);
  btn.onclick =  () => {
     re = /^(\w\.?-?)+\@(\w\.?-?)+[^\.]$/;

    if(re.test(input.value)) {

      document.querySelector('#result').innerHTML = `Your email address ${input.value} is valid.`;

    } else {

        document.querySelector('#result').innerHTML = `Your email address${input.value} isn't valid.`;
    }
    input.value = '';

  }
  break;

 case '2':
  number = document.querySelector('.number');
  label = document.createElement('label');
  label.for = 'number';
  label.innerHTML = 'Enter Phone Number: ';
  input = document.createElement('input');
  input.type = 'text';
  input.id= 'number';
  input.className = 'u-full-width';

   btn = document.createElement('button');
  btn.className = 'btn';
  btn.className = 'u-full-width';
  btn.innerHTML = 'SUBMIT';

  number.appendChild(label);
  number.appendChild(input);

  number.appendChild(btn);
  btn.onclick =  () => {
   re = /^(\+88)?(88)?01[0-9]{9}$/;

   if(re.test(input.value)) {

     document.querySelector('#result').innerHTML = `Your phone number ${input.value} is valid.`;

   } else {

       document.querySelector('#result').innerHTML = `Your phone number ${input.value} isn't valid.`;
   }
    input.value = '';

  }
  break;

  case '3':
  postal = document.querySelector('.postal-code');
  label = document.createElement('label');
 label.for = 'postal-code';
 label.innerHTML = 'Enter Postal Code: ';
 input = document.createElement('input');
 input.type = 'text';
 input.id= 'postal-code';
 input.className = 'u-full-width';

  btn = document.createElement('button');
 btn.className = 'btn';
 btn.className = 'u-full-width';
 btn.innerHTML = 'SUBMIT';

 postal.appendChild(label);
 postal.appendChild(input);

 postal.appendChild(btn);
 btn.onclick = () => {

    re = /^[0-9]{4}$/;

   if(re.test(input.value)) {

     document.querySelector('#result').innerHTML = `Your postal code ${input.value} is valid.`;

   } else {

       document.querySelector('#result').innerHTML = `Your postal code ${input.value} isn't valid.`;
   }
   input.value = '';
 }


 break;

 case '4':

  IP  = document.querySelector('.IP');
  label = document.createElement('label');
  label.for = 'IP';
 label.innerHTML = 'Enter IP Address: ';
 input = document.createElement('input');
 input.type = 'text';
 input.id= 'IP';
  input.className = 'u-full-width';

 btn = document.createElement('button');
 btn.className = 'btn';
 btn.className = 'u-full-width';
 btn.innerHTML = 'SUBMIT';
 IP.appendChild(label);
 IP.appendChild(input);

 IP.appendChild(btn);
 btn.onclick = () => {

   re = /^(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/;

  if(re.test(input.value)) {

    document.querySelector('#result').innerHTML = `Your IP address ${input.value} is valid.`;

  } else {

      document.querySelector('#result').innerHTML = `Your IP address ${input.value} isn't valid.`;
  }
  input.value = '';
}


break;


}
