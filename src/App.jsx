
import './App.css'
import student_img from './assets/student_img.jpg'
function App() {
  

  return (
    <>
      
        <h1 className="text-5xl text-blue-600"> <a href="https://en.wikipedia.org/wiki/Sukhvinder_Singh_Sukhu" 
        className="cursor-pointer" target="_blank">Sukhu g</a> Wants to destroy the Political carrier of
         <span className="text-6xl text-red-800"> Maharani g Pratibha Singh (MP) </span>  </h1>
         <div className="para flex">
         <img src={student_img} alt="stnd_img"  className="mt-10"/>
          <h1 className="text-2xl font-bold mt-10"> Allegation On CHIEF Minister <span className="text-xl font-thin"> He is not allowing all the pending results to
           be released. Has started angering the youth.</span></h1>
           <br />
           <p className='mt-10'>Teacher recruitment is also temporary and not through commission but through recommendation.</p>
           <p className='mt-10'>Sukhu knows that only Pratibha or Vikramaditya can become MP, only one Lok Sabha seat can come and CM wants to defeat Pratibha ji in MP elections.</p>
         </div>

         <h1 className="text-2xl text-green-700">Youth of Himachal challenges Sukhu ji (CM), you will not able to win MP election even from Hamirpur seat.</h1>
       
    </>
  )
}

export default App
