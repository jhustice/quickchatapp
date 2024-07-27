import Image from "next/image";
import {Plus, Search, Profile1, Profile2, Profile3, Profile4, Profile5, Blank} from '@/assets/images/image'

export default function Home() {
  return (

    <main>
      <div className="container mx-auto mt-auto">
        <section> 
          <div className="flex justify-between items-center p-2">
            <div className="bg-white rounded-xl p-4 px-6">
              {/* Heading */}
              <div className="flex gap-2 items-center">
                <h2 className="text-2xl font-semibold">Chat</h2>
                <div className="flex items-center justify-evenly border-2 p-2 px-6 border-zinc-500 rounded-full gap-40 "><input className="outline-none" type="text" placeholder="Search"></input><div><Image src={Search} width={30} height={30}/></div></div>
                <div><Image src={Plus} width={50} height={50}/></div>
              </div>
            </div>

            <div className="p-2 grow w-14">
              <div className="flex justify-between bg-white p-5 rounded-xl gap-60">
                <div className="flex gap-2">
                  <div className="self-center"><Image src={Profile1} width={50} height={70} className="rounded-3xl"/></div>
                  <div>
                    <p className="font-bold">Xavier</p>
                    <p className="text-xs">Online</p>
                  </div>
                </div>

                <div className="flex self-start gap-6">
                  <div className="px-6 py-2 bg-black text-white rounded-full">
                    Profile
                  </div>

                  <div className="px-6 py-2 bg-white text-black border-2 rounded-full">
                    Call
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center p-2 gap-2">
            <div className="flex flex-col bg-white space-y-2 rounded-xl">
              <div className="flex justify-between gap-96 px-1 items-center">
                <div className="flex gap-3 items-center p-2">
                  <Image src={Profile2} width={60} height={70} className="rounded-full"/>
                  <p>Carie Slaw</p>
                </div>
                <p>19:30</p>
              </div>
              <hr className="mx-2" />

              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile3} width={60} height={70} className="rounded-full"/>
                  <p>Denise Berr</p>
                </div>
                <p>13:10</p>
              </div>
              <hr />

              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile1} width={60} height={70} className="rounded-full"/>
                  <p>Jerry Cole</p>
                </div>
                <p>11:11</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile1} width={60} height={70} className="rounded-full"/>
                  <p>Jerry Cole</p>
                </div>
                <p>11:11</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile1} width={60} height={70} className="rounded-full"/>
                  <p>Jerry Cole</p>
                </div>
                <p>11:11</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile1} width={60} height={70} className="rounded-full"/>
                  <p>Jerry Cole</p>
                </div>
                <p>11:11</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile1} width={60} height={70} className="rounded-full"/>
                  <p>Jerry Cole</p>
                </div>
                <p>11:11</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile1} width={60} height={70} className="rounded-full"/>
                  <p>Jerry Cole</p>
                </div>
                <p>11:11</p>
              </div>
              <hr />
              <div className="flex justify-between p-2">
                <div className="flex gap-3 items-center">
                  <Image src={Profile1} width={60} height={70} className="rounded-full"/>
                  <p>Jerry Cole</p>
                </div>
                <p>11:11</p>
              </div>
              <hr />

            </div>

            <div className="bg-white grow w-14 rounded-xl">
              <h1 className="px-64 p-72">Hello!</h1>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
