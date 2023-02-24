import Image from "next/image";
import Layouts from "@/components/Layouts";
import { motion } from "framer-motion";
import {
  ContentAnimation,
  FadeAnimation,
  CardHomeAnimation,
} from "@/components/Animations";

const Home = () => {
  return (
    <Layouts>
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          John
        </motion.span>

        <motion.div
          {...ContentAnimation}
          className="relative order-2 flex w-1/2 justify-end md:order-1 md:w-1/3"
        >
          <motion.div
            {...CardHomeAnimation}
            animate={{ rotate: -12 }}
            className="card-home absolute bg-[#464646]"
          />
          <motion.div
            {...CardHomeAnimation}
            animate={{ rotate: -3 }}
            className="card-home absolute bg-secondary-light"
          />
          <motion.div
            {...CardHomeAnimation}
            animate={{ rotate: 2 }}
            className="card-home relative bg-primary-light"
          >
            <motion.div
              {...FadeAnimation}
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/images/profile/profile.png"
                priority
                layout="intrinsic"
                width={500}
                height={500}
                alt="avatar"
                className="relative"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          {...ContentAnimation}
          className="relative order-1 w-1/3 md:order-2"
        >
          <h3 className=" text-base font-normal">Hi! My name is</h3>
          <h1 className="-ml-1 mb-1 text-7xl font-bold text-primary-light">
            john
          </h1>
          <h4 className="mt-2 text-sm font-light transition-all duration-500 hover:text-primary-light">
            Front-end Dev | Back-end Dev
          </h4>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Home;
