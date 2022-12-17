import React, { useState, useEffect } from 'react'

export default function Validation() {
const [email, setEmail] = useState('')
const [topic, setTopic] = useState('')
const [name, setName] = useState('');
const [text, setText] = useState('');
const [emailDirty, setEmialDirty] = useState(false)
const [topicDirty, setTopicDirty] = useState(false)
const [emailError, setEmailError] = useState('E-mail не може бути порожнім!')
const [topicError, setTopicError] = useState('Пароль не може бути порожнім!')
const [formValid, setFormValid] = useState(false)

useEffect(() => {
   if(emailError || topicError) {
      setFormValid(false)
   } else {
      setFormValid(true)
   }
}, [emailError, topicError])

const emailHandler = (e) => {
    setEmail(e.target.value)
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(String(e.target.value).toLowerCase())) {
        setEmailError('Невірний E-mail!')
        if(!e.target.value) {
            setEmailError('Поле не може бути порожнім!')
        }
    } else {
      setEmailError('')
    }
   //console.log(e.target.value);
}

const topicHandler = (e) => {
    setTopic(e.target.value)
        if(!e.target.value) {
            setTopicError('Поле не може бути порожнім!')
        }
     else {
      setTopicError('')
    }
    //console.log(e.target.value);
}

const blurHandler = (e) => {
  switch (e.target.name) {
    case 'email': 
      setEmialDirty(true)
      break
    case 'topic': 
      setTopicDirty(true)
      break
  }
}
const nameHandleChange = (event) => {
   setName(event.target.value);
}
const textHandleChange = (event) => {
   setText(event.target.value);
}
const onSubmit = (event) => {
   console.log(
           "Name: " + name + "\n" +
           "E-mail: " + email + "\n" +
           "Topic: " + topic + "\n" +
           "Text: " + text + "\n"
   );
   event.preventDefault();
}
  return (
   <form action="#" method="GET" className="form-feedback" name="feedback"  onSubmit={ onSubmit } >
   <div className="form-feedback__wrap">
    <input onChange={nameHandleChange} className = "form-feedback__name" name ="name" type="text" placeholder="Ім'я" />
      {( emailDirty && emailError ) && <p style={{color: "red"}}>{ emailError }</p>}
     <input  
            className="form-feedback__email"
            value={email} 
            onChange={e => emailHandler(e)}
            onBlur={e => blurHandler(e)} 
            name="email" type="text" 
            placeholder="E-mail*" 
            />
              {( topicDirty && topicError ) && <p style={{color: "red"}}>{ topicError }</p>}
        <input 
            className="form-feedback__topic"
            value={topic} 
            onChange={e => topicHandler(e)}
            onBlur={e => blurHandler(e)} 
            name="topic" type="text" 
            placeholder="Тема*" 
            />
     <textarea onChange={textHandleChange} className="form-feedback__message" placeholder="Повідомлення"></textarea>
   </div>
     <p><i>Поля відмічені * мають бути обов'язково заповненими</i></p>
     <button disabled={!formValid} className="form-feedback__button" type="submit">Відправити</button>
 </form>
  )
}
