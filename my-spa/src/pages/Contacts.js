import { useState } from "react";
import uuid4 from "uuid4";
import equality from "./img/equality.png";
import female from "./img/female.png";
import male from "./img/male.png";

const contacts = [
  {
    id: uuid4(),
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    id: uuid4(),
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    id: uuid4(),
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    id: uuid4(),
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    id: uuid4(),
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    id: uuid4(),
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

const Contracts = () => {
  let [state, setState] = useState({
    contacts,
    search: "",
    checked: {
      male: true,
      female: true,
      none: true,
    },
  });

  const handleSearchChange = (event) => {
    const value = event.target.value;
    const expression = RegExp(value, "gi");
    setState((prevState) => {
      return {
        ...prevState,
        contacts: contacts.filter((contact) => {
          let fullName = `${contact.firstName} ${contact.lastName} `;
          return fullName.match(expression) || contact.phone.match(expression);
        }),
        search: value,
      };
    });
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.checked;
    const target = event.target.id;

    setState((prevState) => {
      let isChecked = {
        ...prevState.checked,
        [target]: value,
      };

      const genderFilters = Object.keys(isChecked).filter(
        (key) => isChecked[key]
      );

      const filteredContacts = contacts.filter((contact) => {
        const maleOrFemale = genderFilters.includes(contact.gender);
        const none = genderFilters.includes("none") && !contact.gender;
        return maleOrFemale || none;
      });

      return {
        ...prevState,
        checked: isChecked,
        contacts: filteredContacts,
      };
    });
  };

  const render = () => {
    return state.contacts.map((contact) => {
      return <Contract key={contact.id} contact={contact} />;
    });
  };

  return (
    <>
      <h1 className="title">Contacts</h1>
      <input
        className="input"
        id="search"
        placeholder="🔍Search"
        type="search"
        onChange={handleSearchChange}
      />
      <div className="checkBoxes">
        <label className="male" htmlFor="male">
          Ч
        </label>
        <input
          type="checkbox"
          id="male"
          checked={state.checked.male}
          onChange={handleCheckboxChange}
        />
        <label className="female" htmlFor="female">
          Ж
        </label>
        <input
          type="checkbox"
          id="female"
          checked={state.checked.female}
          onChange={handleCheckboxChange}
        />
        <label className="no" htmlFor="none">
          Не вказано
        </label>
        <input
          type="checkbox"
          id="none"
          checked={state.checked.none}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="contacts">
        <ul>{render()}</ul>
      </div>
    </>
  );
};

const Contract = ({ contact }) => {
  const { id, firstName, lastName, phone, gender } = contact;
  const maleIcon = <img className="imgIcons" alt="male icon" src={male} />;
  const femaleIcon = (
    <img className="imgIcons" alt="female icon" src={female} />
  );
  const noIcon = (
    <img className="imgIcons" alt="male or female icon" src={equality} />
  );

  const chooseGenderIcons = () => {
    return gender === "male"
      ? maleIcon
      : gender === "female"
      ? femaleIcon
      : noIcon;
  };

  return (
    <>
      <li className="list_contacts" key={id}>
        <h1 className="fullName">
          {firstName} {lastName}
        </h1>
        <p className="phone">{phone}</p>
        <p className="gender">{gender}</p>
        {chooseGenderIcons()}
      </li>
    </>
  );
};

function Contacts() {
  return (
    <div className="Contacts">
      <Contracts />
    </div>
  );
}

export default Contacts;
