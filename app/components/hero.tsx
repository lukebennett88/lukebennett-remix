import { Me } from '../svg/me';

export function Hero(): JSX.Element {
  return (
    <div className="relative">
      <div className="max-w-5xl px-4 mx-auto mt-16 sm:mt-24 sm:px-6 lg:mt-32 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="block mt-1 text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900 dark:text-white">
                Hi, I’m Luke
              </span>
            </h1>
            <div className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              <p>I’m a front-end web designer/developer.</p>
              <p>
                I specialise in making fast, accessible websites using modern
                technologies.
              </p>
            </div>
          </div>
          <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative w-full mx-auto lg:max-w-md">
              <span className="sr-only">Watch our video to learn more</span>
              <Me />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
