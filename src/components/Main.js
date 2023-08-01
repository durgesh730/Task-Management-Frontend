import React, { useState } from 'react'
import '../components/main.css'
import Shownotes from './Shownotes';
import Navbar from './Navbar';
import { host } from '../host';

const Main = () => {



  const [note, setNote] = useState({ title: "", description: ""})

  const setval = (e) => {
    const { name, value } = e.target

    setNote(() => {
      return {
        ...note,
        [name]: value
      }
    })

  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { title, description} = note
    if (title === '') {
      alert('Your Title is Required')
    } else if (description === "") {
      alert('Your Description is Required')
    } else {
      const data = await fetch(`${host }/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description})
      })
      const res = await data.json()
      // console.log(res)
      alert("Your Notes Save Successfully")
      window.location.reload()
      // console.log(data)
    }
  }

  return (
    <>
      <Navbar />
      <div className='container' >
        <form className='form' onSubmit={handlesubmit}>
          <div className="notes" >

            <div className='head' >
              <div className='topheading' >
                <h2>Write Your Notes Here...</h2>
              </div>
            </div>

            <div className="bothinput ">
              <div className='inputs col-10'>
                <input type="title" className="form-control" id="title" value={note.title}
                  name="title" aria-describedby="emailHelp" placeholder="Title " onChange={setval} /></div>
            </div>

            <div className=" textarea col-9 my-4  ">
              <textarea type="description" rows="6" className="form-control" id="description"
                value={note.description} name="description" placeholder="Description" onChange={setval} />
            </div>
            
            <div className="text-center" >
              <button type="submit" className="btn submit ">Submit</button></div>
          </div>
        </form>
      </div>

      <Shownotes />
    </>
  )
}

export default Main
