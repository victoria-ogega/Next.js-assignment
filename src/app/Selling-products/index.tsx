import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

interface Products {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description:string
  colors?: string[];
}
const products: Products[] = [
{
  id: 1,
    name: "Red jacket",
    image: "/Images/red-jacket.png",
    description:"The north coat",
    price: 360,
    rating: 5,  
},
{
  id: 2,
    name: "Gucci bag",
    image: "/Images/gucci-bag.png",
    description:"Gucci duffle bag",
    price: 960,
    rating: 5,  
},
{
  id: 3,
    name: "Cooler",
    image: "/Images/cooler.png",
    description:"RGB liquid CPU Cooler",
    price: 370,
    rating: 5,  
},
{
  id: 4,
    name: "Book self",
    image: "/Images/bookself.png",
    description:"Small BookSelf",
    price: 160,
    rating: 5,  
},

]

const Selling: React.FC = () => {
  return (
    <section className=" py-12 text-center mt-20 ">
      <div className="display: flex mb-4">

        <div>
        <div className="mb-8 flex items-center">
          <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
          <span className="text-red-600 font-semibold">This Month</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">Best selling products</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 w-250">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 relative group"
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2 ">
                <button className="bg-white p-2 rounded-full shadow">
                 {< CiHeart></CiHeart>}
                </button>
                <button className="bg-white p-2 rounded-full shadow ">
                 {<IoEyeOutline ></IoEyeOutline>}
                </button>
              </div>
            </div>
            <p className="text-sm mt-2">{product.description}</p>
          <div className="flex items-center ml-16 space-x-4">
            <br></br>
          <p className="text-red-500 font-bold mt-3">${product.price}</p>
            <div className="text-yellow-600">
              {"★".repeat(Math.floor(product.rating)) }
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Selling;


