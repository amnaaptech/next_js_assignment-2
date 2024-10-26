
import React from 'react';

const Card = () => {
  return (
    <>
    <div className='box-border mt-auto'>
    <section >
    <h2 className="text-2xl font-semibold mb-0 mt-16 px-0 text-center font-sans">Dive into Our Movie Collection</h2>
    <div className='flex flex-wrap justify-center'>
    <div className='p-3'>
    {/* card 1 */}
      <div className='lg:p-4 md:w-full flex mt-20'>
        <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg  h-full flex flex-col '>
          <img className='w-full h-auto object-cover' src="images/image1.jpg" alt="React js" />

          <div className='px-6 py-4 lg:h-44'>
            <span className='tracking-widest text-xs title-font font-medium text-pink-600 mb-1'>Barbie Movie One</span>
            <div className='title-font text-lg font-medium mb-2'>
              <a href="#" className='no-underline text-pink-700'>
                Barbie The Princess & the Popstar
              </a>
            </div>
            <p className='text-pink-900 text-base'>
            "Barbie: The Princess & the Popstar" is a musical animated film that follows Barbie as Tori, a princess who dreams of being a pop star, and her doppelgänger, a pop singer named Keira.  
              {/* The film follows Barbie, Skipper, Stacie, and Chelsea as they visit Marlene's equestrian academy in Switzerland, and Barbie finds a legendary horse that was believed to be just a fable. */}
            </p>
          </div>
          {/* button style */}
          <div className='px-6 pt-4 pb-2 mt-2' >
            <span className='inline-block bg-pink-400 text-pink-800 px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-pink-200 transition ease-in-out delay-150 bg-pink-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400/40'>Watch Now</span>
          </div>
        </div>
      </div>
      </div>

{/* card 2 */}
<div className='p-3 '>

      <div className='lg:p-4 md:w-full flex justify-center mt-20'>
        <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg h-full flex flex-col'>
          <img className='w-full h-auto object-cover' src="images/image2.jpg" alt="React js" />

          <div className='px-6 py-4 lg:h-44'>
            <span className='tracking-widest text-xs title-font font-medium text-pink-600 mb-1'>Barbie Movie Two</span>
            <div className='title-font text-lg font-medium mb-2'>
              <a href="#" className='no-underline text-pink-700'>
              Magic of the Rainbow
              </a>
            </div>
            <p className='text-pink-900 text-base'>
     "Magic of the Rainbow" is the 10th Barbie movie, this is a delightful animated story When a mysterious rainbow appears, they discover it has magical powers that can bring joy and color to their world.
            </p>
          </div>
          {/* button style */}
          <div className='px-6 pt-4 pb-2 mt-2'>
            <span className='inline-block bg-pink-400 text-pink-800 px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-pink-200 transition ease-in-out delay-150 bg-pink-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400/40'>Watch Now</span>
          </div>
        </div>
      </div>
      </div>


      {/* card3 */}
      <div className='p-3 '>

      <div className='lg:p-4 md:w-full flex justify-center mt-20'>
        <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg h-full flex flex-col'>
          <img className='w-full h-auto  object-cover' src="images/image3.jpg" alt="React js" />

          <div className='px-6 py-4 lg:h-44'>
            <span className='tracking-widest text-xs title-font font-medium text-pink-600 mb-1 '>Barbie Movie Three</span>
            <div className='title-font text-lg font-medium mb-2'>
              <a href="#" className='no-underline text-pink-700'>
              Mariposa and the Fairy Princess
              </a>
            </div>
            <p className='text-pink-900 text-base'>
            "Mariposa and the Fairy Princess", follows Mariposa, a butterfly fairy, on a quest to save her kingdom with the help of a magical Fairy Princess.  
            </p>
          </div>
          {/* button style */}
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-pink-400 text-pink-800 px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-pink-200 transition ease-in-out delay-150 bg-pink-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400/40'>Watch Now</span>
          </div>
        </div>
      </div>
      </div>
      </div>
</section>


<section>
{/* Character Showcase Section */}
<div className='container'>
        <div className="mt-12 mb-10 px-10">
         <h2 className="text-2xl font-semibold mb-4 text-center font-sans">Meet Your Favorite Characters</h2>
         <div className="grid grid-cols-2 mt-8 md:grid-cols-4 gap-4">
            <div className="text-center">
               <img src="images/character1.jpg" alt="Character 1" className="w-full h-80 object-cover rounded-lg" />
               <p className="mt-2 font-semibold font-sans">Barbie</p>
             </div>
             <div className="text-center">
              <img src="images/character2.jpg" alt="Character 2" className="w-full h-80 object-cover rounded-lg" />
               <p className="mt-2 font-semibold font-sans">Ken</p>
          </div>
             <div className="text-center">
              <img src="images/character3.jpg" alt="Character 3" className="w-full h-80 object-cover rounded-lg" />
              <p className="mt-2 font-semibold font-sans">Bibble</p>
           </div>
             <div className="text-center">
               <img src="images/character4.jpg" alt="Character 4" className="w-full h-80 object-cover rounded-lg" />
             <p className="mt-2 font-semibold font-sans">Thumbelina</p>
            </div>
           </div>
        </div>
</div>
</section>

<section>
<div className="max-w-full">
          <h2 className="text-xl font-semibold mb-4 mt-10 font-sans text-center">Watch Our Video</h2>
          <div className='flex items-center px-7 max-h-96 '>
          <iframe   className='w-full h-96 border-pink-700 ' src="https://www.youtube.com/embed/6fEcDSvKDtU?si=OVZedHUCikSmn_30" title="YouTube video player"   style={{ border: 'pink-700' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  referrerPolicy="no-referrer"></iframe>
          </div>
        </div>

</section>

<section>
    {/* Newsletter Signup Section */}
          <div className="mt-11">
           <h2 className="text-2xl font-semibold mb-4 text-center font-sans">Stay Updated!</h2>
         <form className="flex flex-col  items-center">
             <input
              type="email"
              placeholder="Enter your email "
              className="p-3	w-11/12 px-10 rounded-lg mb-4 border  border-pink-700 hover:border-pink-600"
              required
            />
            <button className="bg-pink-300 text-pink-600 font-semibold py-2 px-4 mb-10 shadow-lg shadow-pink-600/60 rounded-lg hover:bg-pink-200 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
</section>
</div>
    </>

    
  );
}

export default Card;









