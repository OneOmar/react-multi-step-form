import './App.css'
import UserForm from './components/UserForm'

function App() {
  return (
    <>
      <h1 className='mt-3 text-center text-primary'>Registration Form</h1>
      <div className='mt-3 p-3 container' style={{ maxWidth: '500px' }}>
        <UserForm />
      </div>
    </>
  )
}

export default App
