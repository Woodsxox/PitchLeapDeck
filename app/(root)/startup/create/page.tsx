import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";


const page = async () => {
    const session = await auth()

if(!session) redirect("/")

  return (
      <>
         <section className="green_container !min-h-[230px]">
                <h1 className="heading">
              Submit your Startups
               </h1>
          </section>
          <StartupForm/>
      </>
  )
}

export default page