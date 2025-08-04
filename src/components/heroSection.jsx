import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto flex flex-col-reverse lg:flex-row items-center max-w-7xl sm:py-8 lg:py-16">
        <div className="text-left lg:w-2/3">
        <div className="hidden sm:mb-8 sm:flex sm:justify-left ">
          <p className="text-sm/2.0 text-orange-400 font-bold">
            Best Destinations around the world
          </p>
        </div>
        <div className="text-left pr-5">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="mt-8 pr-10 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-left gap-x-6">
          <Link
            href="#"
            className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Find out more
          </Link>
          <Link href="#" className="flex flex-row text-sm/6 font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

            Play Demo
          </Link>
        </div>
        </div>
        <div className="lg:w-1/3 lg:mt-0 item-right pl-5"> 
          <img alt="Travel" src="./img/travel.jpg" className="w-76.5 h-76.4 object-cover"/>
        </div>
      </div>
    </>
  );
}
