import { useState } from 'react'
import './App.css'

function App() {

  const initialStudents = [
    {name: 'Серик', lesson: 'DOM'},
    {name: 'Саня', lesson: 'React'},
    {name: 'Дина', lesson: 'Angular'},
    {name: 'Гульжан', lesson: 'Promise'},
    {name: 'Гульмира', lesson: 'Event loop'},
    {name: 'Гульнар', lesson: 'Асинхронность'},
    {name: 'Сабит', lesson: 'Next.js'},
    {name: 'Медеу', lesson: 'Vue.js'},
    {name: 'Али', lesson: 'Jquery'}
  ]

  const [students, setStudents] = useState(initialStudents)

  const onDelete = (i) => {
    setStudents(students.filter((student, index) => index !== i))
  }

  return (
    <>
      {
        students.map((student, i) => {
          return (
            <View 
              key={i}
              student={student}
              studentIndex={i}
              onDelete={onDelete}/>
          )
        })
      }
    </>
  )
}

export default App

const View = ({student, studentIndex, onDelete}) => {
  return (
    <div style={{display: 'flex', gap: '10px'}}>
      <p>{student.name}</p>
      <p>{student.lesson}</p>
      <button onClick={() => onDelete(studentIndex)}>Delete</button>
    </div>
  )
}
