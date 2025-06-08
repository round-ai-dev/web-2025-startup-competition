"use client";

import { useState } from "react";

import Image from "next/image";

import check_ring_dark_icon from "@/../public/icons/check_ring_dark.svg";
import check_ring_white_icon from "@/../public/icons/check_ring_white.svg";
import exit_icon from "@/../public/icons/exit.svg";
import exit_bright_icon from "@/../public/icons/exit_bright.svg";

import "./Waitlist.css";

function WaitlistMain({
  setisWaitlist,
  setPopupState,
}: {
  setisWaitlist: (x: boolean) => void;
  setPopupState: (x: number) => void;
}) {
  return (
    <div className="waitlistMain white_background">
      <div className="waitlistMain__header">
        <p className="waitlistMain__title suse-bold">Waitlist</p>
        <p className="waitlistMain__subtitle poppins-medium">
          We will be launching our product in January, 2025.
          <br />
          If you are interested, book ROUND or leave your e-mail to follow up
          with us!
        </p>
      </div>
      <div className="waitlistMain__plans">
        <div className="waitlistMain__plan">
          <p className="waitlistMain__planName suse-medium dark1">
            Leave your e-mail
          </p>
          <p className="waitlistMain__planPrice poppins-semibold dark1">$0</p>
          <div className="waitlistMain__properties">
            <div className="waitlistMain__property">
              <Image alt="" src={check_ring_dark_icon} />
              <p className="poppins-medium dark1">Get news for updates</p>
            </div>
            <div className="waitlistMain__property">
              <Image alt="" src={check_ring_dark_icon} />
              <p className="poppins-medium dark1">Get access to beta</p>
            </div>
            <div className="waitlistMain__property">
              <Image alt="" src={check_ring_dark_icon} />
              <p className="poppins-medium dark1">
                Get notifications
                <br />
                for open-source
              </p>
            </div>
          </div>
          <div
            id="email_button"
            onClick={() => setPopupState(1)}
            className="waitlistMain__planButton dark1_background"
          >
            <p id="email_button" className="white poppins-semibold">
              Leave e-mail
            </p>
          </div>
        </div>
        <div className="waitlistMain__plan dark1_background">
          <p className="waitlistMain__planName suse-medium white">
            Book ROUND Premium
          </p>
          <p className="waitlistMain__planPrice poppins-semibold white">$15</p>
          <div className="waitlistMain__properties">
            <div className="waitlistMain__property">
              <Image alt="" src={check_ring_white_icon} />
              <p className="poppins-medium dark3">Get news for updates</p>
            </div>
            <div className="waitlistMain__property">
              <Image alt="" src={check_ring_white_icon} />
              <p className="poppins-medium dark3">Get access to beta</p>
            </div>
            <div className="waitlistMain__property">
              <Image alt="" src={check_ring_white_icon} />
              <p className="poppins-medium dark3">
                Get notifications
                <br />
                for open-source
              </p>
            </div>
            <div className="waitlistMain__property">
              <Image alt="" src={check_ring_white_icon} />
              <p className="poppins-medium white">
                80% discount on premium <br /> version for 1 year
              </p>
            </div>
          </div>
          <a
            id="book_button"
            className="waitlistMain__bookLink"
            href="https://www.buymeacoffee.com/round"
            target="_blank"
            rel="noreferrer"
          >
            <div className="waitlistMain__planButton white_background">
              <p id="book_button" className="dark1 poppins-semibold">
                Start Booking
              </p>
            </div>
          </a>
        </div>
      </div>

      <Image
        onClick={() => {
          setisWaitlist(false);
          setPopupState(0);
        }}
        className="waitlistMain__exit"
        alt=""
        src={exit_icon}
      />
    </div>
  );
}

function WaitlistEmail({
  setPopupState,
}: {
  setPopupState: (x: number) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onSubmitForm = async () => {
    try {
      const response = await fetch("https://round-y.com/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error posting waitlist email:", error);
    }
  };

  return (
    <div className="waitlistEmail white_background">
      <div className="waitlistEmail__header dark1_background">
        <Image
          onClick={() => setPopupState(0)}
          className="waitlistEmail__exit"
          alt=""
          src={exit_bright_icon}
        />
      </div>

      <div className="waitlistEmail__starting">
        <p className="waitlistEmail__title suse-semibold">Leave E-mail</p>
        <p className="waitlistEmail__subtitle poppins-medium">
          Leave your email, and we will update you with exciting news about
          ROUND.
        </p>
      </div>

      <div className="waitlistEmail__inputs">
        <div className="waitlistEmail__input">
          <p className="waitlistEmail__inputName poppins-medium">name:</p>
          <div className="waitlistEmail__inputHolder dark1_background">
            <input
              className="white"
              type="text"
              onChange={onChangeName}
              value={name}
            />
          </div>
        </div>
        <div className="waitlistEmail__input">
          <p className="waitlistEmail__inputName poppins-medium">e-mail:</p>
          <div className="waitlistEmail__inputHolder dark1_background">
            <input
              className="white"
              type="text"
              onChange={onChangeEmail}
              value={email}
            />
          </div>
        </div>
      </div>

      <div
        id="emailSubmit_button"
        className="waitlistEmail__submitButton dark2_background"
        onClick={onSubmitForm}
      >
        <p id="emailSubmit_button" className="poppins-medium white">
          Submit
        </p>
      </div>
    </div>
  );
}

function Waitlist({ setisWaitlist }: { setisWaitlist: (x: boolean) => void }) {
  const [popupState, setPopupState] = useState(0);

  return (
    <div className="waitlist">
      <div
        className={`waitlist__main ${popupState === 0 ? "waitlist__main--show" : "waitlist__main--hide"}`}
      >
        <WaitlistMain
          setisWaitlist={(x: boolean) => setisWaitlist(x)}
          setPopupState={(x: number) => setPopupState(x)}
        />
      </div>

      <div
        className={`waitlist__email ${popupState === 1 ? "waitlist__email--show" : "waitlist__email--hide"}`}
      >
        <WaitlistEmail setPopupState={(x: number) => setPopupState(x)} />
      </div>
    </div>
  );
}

export default Waitlist;
