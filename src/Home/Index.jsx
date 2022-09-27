import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import frontImage from '../assets/frontImage.png'


function App() {
  return (
    <div className="bg-primaryGradient h-screen flex flex-col">
      <Header />
      <div className="relative grid grid-cols-2 items-center text-white mx-40 my-32 justify-between">
        <div className="flex-initial">
          <span className="bg-textGradient text-7xl text-clip text-transparent bg-clip-text my-10">Em Breve</span>
          <p className="text-gray-400 text-xl">Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, 
            nisi eros vermeio.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. 
            Sed non ipsum felis.In elementis mé pra quem é amistosis quis leo.Atirei o
            pau no gatis, per gatis num morreus.</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={frontImage} width={600} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
