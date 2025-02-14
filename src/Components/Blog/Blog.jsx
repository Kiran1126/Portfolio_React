import Heading from "../Heading/Heading";
import BlogArtwork_1 from "../../assets/Blog/Blog1.gif";
import BlogArtwork_2 from "../../assets/Blog/Blog2.jpg";
import BlogArtwork_3 from "../../assets/Blog/Blog3.jpg";
import { NavLink } from "react-router-dom";
import BtnContainer from "../Container/BtnContainer";

// Array of objects for the blog details
const blogArr = [
  {
    img: BlogArtwork_1,
    title: "My first internship experience",
    label: "Blog",
    icon: "link"
  },
  {
    img: BlogArtwork_2,
    title: "Creating my own portfolio",
    label: "Video",
    icon: "videocam"
  },
  {
    img: BlogArtwork_3,
    title: "My first internship experience",
    label: "Blog",
    icon: "link"
  }
];

function Blog () {
  return (
    <section className="w-[80%] h-screen bg-white float-right">
      <Heading faded="Blogs" bold="What I Write" theme="text-black" borderColor="border-blue-500"/>
      <ul className="flex justify-evenly flex-wrap">
      {
        blogArr.map(temp => ( 
          <li className="list-none" key={temp.title}>
            <div className="max-w-80 max-h-80 shadow-xl rounded-lg group transition ease duration-500 hover:bg-purple-400 text-white font-semibold text-center" key={temp.title}>
              <p className="absolute opacity-0 p-2 translate-x-6 bg-red-500 group-hover:opacity-100 rounded-b-lg transform duration-500 -translate-y-5 group-hover:translate-y-0">
                {temp.label}
              </p>
              <img className="aspect-square group-hover:opacity-5 rounded-lg p-5" src={temp.img} alt="artwork" />
              <div className="transition opacity-0 group-hover:opacity-100">
                <NavLink to="https://medium.com/@kiransamanta945/my-experience-throughout-my-web-development-and-designing-internship-journey-provided-by-oasis-5fdd5cf5d497" target="_blank">
                  <div className="flex justify-center transition duration-500 group-hover:-translate-y-48 p-5">
                    <span className="material-symbols-outlined">
                      north_east
                    </span>
                    <span className="hover:underline">{temp.title}</span>
                  </div>
                </NavLink>
                <span className="material-symbols-outlined bg-yellow-500 p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-32 -translate-x-28">
                  {temp.icon}
                </span>
              </div>         
            </div>
          </li>  
        ))
      }
      </ul>
      <BtnContainer>
        <input type="checkbox" name="expand" id="expand" placeholder="Show more"
        />
      </BtnContainer>
    </section>
  );
};

export default Blog;