import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";

const SearchBar = ({onOpen}) => {

  const filterContacts = (e) => {
    const value=e.target.value;

    const contactsRef = collection(db, "contacts");

          onSnapshot(contactsRef,(snapshot) => {
            const contactLists = snapshot.docs.map((i) => {
              return {
                id: i.id,
                ...i.data(),
              };
            });
           
              const filteredContacts = contactLists.filter
              ((contact) => contact.name.toLowerCase().includes(value.toLowerCase())
              );
              setContacts(filteredContacts);

              return filteredContacts;
            });
          };


  
  return (
    <>
    <div className="flex">
          <div className="flex relative items-center flex-grow">
            <FiSearch className=" text-white text-2xl absolute left-1" />
            <input
            onChange={filterContacts}
              type="text"
              className="pl-9 text-white border bg-transparent border-white rounded-md h-10 flex-grow px-4"
            />
          </div>
          <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white gap-2 cursor-pointer" />
        </div>
    </>
  )
}

export default SearchBar