import Fin1 from "@/assets/fin1.jpg";
import Fin2 from "@/assets/fin2.jpg";
import Fin3 from "@/assets/fin3.jpg";
import Fin4 from "@/assets/fin4.jpg";
import ScienceFic1 from "@/assets/ScienceFic1.jpeg";
import ScienceFic2 from "@/assets/ScienceFic2.jpg";
import ScienceFic3 from "@/assets/ScienceFic3.jpg";
import ScienceFic4 from "@/assets/ScienceFic4.jpg";
import Thrill1 from "@/assets/Thrill1.jpg";
import Thrill2 from "@/assets/Thrill2.jpg";
import Thrill3 from "@/assets/Thrill3.jpg";
import Thrill4 from "@/assets/Thrill4.jpg";
import Software1 from "@/assets/Software1.jpg";
import Software2 from "@/assets/Software2.jpg";
import Software3 from "@/assets/Software3.jpg";
import Software4 from "@/assets/Software4.jpg";
import Ins1 from "@/assets/Ins1.jpg";
import Ins2 from "@/assets/Ins2.jpg";
import Ins3 from "@/assets/Ins3.jpg";
import Ins4 from "@/assets/Ins4.jpg";
import { useContext, useState } from "react";
import BookCategoryButton from "./BookCategoryButton";
import BookList from "./BookList";
import { Book, SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import { libraryContext } from "@/context/GlobalState";
import Donation from "./Donation";



const books: Book[] = [
  {
    id: 1,
    title: "The Basics of Finance",
    category: "Finance",
    image: Fin1,
    author: "Pamela Peterson Drake",
  },
  {
    id: 2,
    title: "Finance and Accounting",
    category: "Finance",
    image: Fin2,
    author: "Cheng-Few Lee",
  },
  {
    id: 3,
    title: "Personal Finace and Investment",
    category: "Finance",
    image: Fin3,
    author: "Keith Redhead",
  },
  {
    id: 4,
    title: "Money, Banking and International Finance",
    category: "Finance",
    image: Fin4,
    author: "Kenneth R. Szulezyk",
  },
  {
    id: 5,
    title: "Displaced",
    category: "Science Fiction",
    image: ScienceFic1,
    author: "Syephen Drake",
  },
  {
    id: 6,
    title: "The Loneliness of the Deep Space Cargoist",
    category: "Science Fiction",
    image: ScienceFic2,
    author: "JS Carter Gilson",
  },
  {
    id: 7,
    title: "Science Fact File",
    category: "Science Fiction",
    image: ScienceFic3,
    author: "Petters Weem",
  },
  {
    id: 8,
    title: "The Assasins Blade",
    category: "Science Fiction",
    image: ScienceFic4,
    author: "Sarah J. Maas",
  },
  {
    id: 9,
    title: "Rise and Kill First",
    category: "Thriller",
    image: Thrill1,
    author: "Ronen Bregman",
  },
  {
    id: 10,
    title: "The After House",
    category: "Thriller",
    image: Thrill2,
    author: "Mary Roberts",
  },
  {
    id: 11,
    title: "Eclipse",
    category: "Thriller",
    image: Thrill3,
    author: "Stephenie Meyer",
  },
  {
    id: 12,
    title: "Twisted Lies",
    category: "Thriller",
    image: Thrill4,
    author: "Ana Huang",
  },
  {
    id: 13,
    title: "Computer Hardware and Software",
    category: "Software",
    image: Software1,
    author: "Mary Robberts",
  },
  {
    id: 14,
    title: "Java for Absolute Beginner",
    category: "Software",
    image: Software2,
    author: "Jay Bryant",
  },
  {
    id: 15,
    title: "IT Essentials",
    category: "Software",
    image: Software3,
    author: "Mary Sunday",
  },
  {
    id: 16,
    title: "Secret of Reversing Engineering",
    category: "Software",
    image: Software4,
    author: "Eldad Eilam",
  },
  {
    id: 17,
    title: "Risk Management",
    category: "Insurance",
    image: Ins1,
    author: "DBIC",
  },
  {
    id: 18,
    title: "Helath Insurance",
    category: "Insurance",
    image: Ins2,
    author: "Ermanno Pitacco",
  },
  {
    id: 19,
    title: "Effect of Insurance on Maritime Liability Law",
    category: "Insurance",
    image: Ins3,
    author: "Muhammad Masum Billah",
  },
  {
    id: 20,
    title: "The White Coat Investor",
    category: "Insurance",
    image: Ins4,
    author: "James M. Dahle",
  },
];


const Shop = () => {
    const { setSelectedPage } = useContext(libraryContext)
    const [selectedCategory, setSelectedCategory] = useState<string>('Finance')

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredBooks = selectedCategory
    ? books.filter((book: Book) => book.category === selectedCategory) : books;


  return (
    <section id="shop">
      <motion.div className="w-full" onViewportEnter={() => setSelectedPage(SelectedPage.Shop)}>
        <div className="w-5/6 h-[40px] bg-blue-900 mx-auto mb-4"></div>
        <div className="w-5/6 h-full mx-auto">
          <h2 className="text-[32px] md:text-4xl md:text-[40px] font-bold text-blue-900">
            New on shelves
          </h2>
          <div className="w-[80%] mx-auto">
            <BookCategoryButton onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}/>
            <BookList booksToShow={filteredBooks} />
          </div>
        </div>
      </motion.div>
      <Donation />
    </section>
  );
};

export default Shop;
