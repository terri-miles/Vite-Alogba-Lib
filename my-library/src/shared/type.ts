export type User = {
  id: number;
  fName: string;
  status: "Borrowed" | "Returned";
  books: string[];
  date: {
    date_borrowed: Date;
    date_returned: Date;
  };
  time: string;
};

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Shop = "shop",
  ContactUs = "contactus",
}

export type UserProps = {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
  users: User[][]
  addNewUser: (newUser: User) => void;
  mobileToggle: boolean;
  setMobileToggle:  React.Dispatch<React.SetStateAction<boolean>>
};

export type AppState = {
  users: User[];
};

export type Benefit = {
  id: number;
  name: string;
  description: string;
  icon: JSX.Element;
};

export type Book = {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
};

export type Action = { type: "ADD_USER"; newUser: User };
