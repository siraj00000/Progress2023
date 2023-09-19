import { BlogHeroBg, Logo } from '../../assets'

type Props = {}

const Programs = (props: Props) => {
  return (
    <main className="py-[10%]">
      <h1 className="w-full text-center text-dark text-5xl font-semibold uppercase">
        our program
      </h1>

      <section className="text-center mb-10 mt-20 flex flex-col gap-8 justify-center items-center">
        <h2 className="text-4xl text-black uppercase font-semibold">
          Build in a box
        </h2>
        <p className="text-black text-2xl leading-6 w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          neque, officia sed non minima soluta cum quam cupiditate, itaque,
          accusantium eaque sapiente tempora ea at officiis vel cumque. Sequi,
          rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          maiores optio ex odit nobis fugiat doloribus? Velit eius quisquam
          reprehenderit. Sed minima itaque, vel consectetur laboriosam vitae
          inventore aliquid architecto.
        </p>
        <button className="px-12 py-2 text-light text-md bg-dark">
          See Live
        </button>
      </section>

      <section className="w-full">
        <img src={BlogHeroBg} alt={'OurProgram'} />
      </section>

      <section className="text-center flex flex-col gap-10 mt-8">
        <h2 className="text-4xl text-black uppercase font-semibold">AIM</h2>
        <p className="text-black text-2xl leading-6 w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          neque, officia sed non minima soluta cum quam cupiditate, itaque,
          accusantium eaque sapiente tempora ea at officiis vel cumque. Sequi,
          rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          maiores optio ex odit nobis fugiat doloribus? Velit eius quisquam
          reprehenderit. Sed minima itaque, vel consectetur laboriosam vitae
          inventore aliquid architecto.
        </p>

        <aside className="relative -mt-40">
          <div className="w-3/4 mx-auto relative top-52">
            <img src={BlogHeroBg} alt={'OurProgram'} />
          </div>
          <div className="bg-[#eee] h-[350px] w-full"></div>
        </aside>
      </section>

      <section className="text-center flex flex-col gap-24 mt-5 pb-24">
        <h2 className="text-4xl text-black font-semibold">Get Involved</h2>
        <p className="text-black text-2xl leading-6 w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          neque, officia sed non minima soluta cum quam cupiditate, itaque,
          accusantium eaque sapiente tempora ea at officiis vel cumque. Sequi,
          rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          maiores optio ex odit nobis fugiat doloribus? Velit eius quisquam
          reprehenderit. Sed minima itaque, vel consectetur laboriosam vitae
          inventore aliquid architecto.
        </p>
      </section>

      <section className="w-full bg-[#eee] pt-40">
        <img src={BlogHeroBg} alt={'OurProgram'} />
      </section>

      <section className='w-full text-center flex flex-col gap-5 mt-20'>
        <p className="text-black text-2xl leading-6 w-3/4 mx-auto italic">
          Somewhere inside all of us is the power to change the world
        </p>
        <p className="text-black text-2xl leading-6 w-3/4 mx-auto">
          Ronald Dahl
        </p>
        <img src={Logo} alt="logo" className='mx-auto' />
      </section>
    </main>
  )
}

export default Programs
