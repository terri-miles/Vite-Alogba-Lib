import useMediaQuery from "@/hooks/useMediaQuery";
import { Book } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  booksToShow: Book[];
};

const BookList = ({ booksToShow }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full my-5 mb-10">
      <div className="md:flex md:justify-between md:gap-4">
        {booksToShow.map((book) => (
          <div key={book.id} className="mb-8 relative group">
            <div className="md:bg-white/90 py-2 px-3 border border-black absolute z-10 w-[180px] h-[100%] opacity-0 group-hover:md:opacity-100 transition duration-300 rounded">
              <p className="text-[18px] leading-6 font-bold underline">{book.title}</p>
              <p className="text-[14px] underline">by {book.author}</p>
            </div>
            <img
              className="w-full md:w-[180px] rounded"
              src={book.image}
              alt={book.title}
            />
            {!isAboveMediumScreen && (
              <div className="w-full flex flex-col gap-1">
                <p className="mt-3 text-[20px] font-bold">{book.title}</p>
                <p className="text-[18px]">{book.author}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <AnchorLink
        className="text-center block mt-10 underline hover:text-orange-500 transition duration-300 mb-4"
        href="#"
      >
        View all books
      </AnchorLink>
    </div>
  );
};

export default BookList;
