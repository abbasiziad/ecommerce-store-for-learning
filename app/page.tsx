import Image from "next/image";
import Link from "next/link";
import FeatureSection from "@/components/FeatureSection";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}

             <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Payments tool for software companies
                    </h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>

                    <Link
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Speak to Sales
                    </Link>
                </div>

                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                        alt="mockup"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                    />
                </div>

            </div>
        </section>  

      {/* Banner */}
      <section className="bg-green-300 text-center py-10">
        <h3 className="text-2xl font-semibold mb-4">Check Our Shop</h3>
        <Link href="/shop">
          <button className="bg-white px-6 py-2 rounded shadow">
            Go to Shop
          </button>
        </Link>
      </section>

       <FeatureSection />
       
    </main>
  );
}