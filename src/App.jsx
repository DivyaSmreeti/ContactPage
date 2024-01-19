// import { useState } from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import ContactCard from "./Components/ContactCard";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import AddandUdateContact from "./Components/AddandUdateContact";

import useDisclose from "./Hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import NotFound from "./Components/NotFound";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((i) => {
            return {
              id: i.id,
              ...i.data(),
            };
          });
          setContacts(contactLists);
          // console.log(contactLists);
          // console.log(contactsSnapshot);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);




  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((i) => {
        return {
          id: i.id,
          ...i.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <div className="flex">
          <div className="flex relative items-center flex-grow">
            <FiSearch className=" text-white text-2xl absolute left-1" />
            <input
              onChange={filterContacts}
              type="text"
              className="pl-9 text-white border bg-transparent border-white rounded-md h-10 flex-grow px-4"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white gap-2 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          {contacts.length <= 0 ? (<NotFound />) : ( contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          )))}
        </div>
      </div>
      <AddandUdateContact isOpen={isOpen} onClose={onClose} />

      {/* <AddandUdateContact onClose={onClose} isOpen={isOpen}/> */}

      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
