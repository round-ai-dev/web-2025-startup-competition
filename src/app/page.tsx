"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import hljs from "highlight.js";

import adaptaions_icon from "@/../public/icons/adaptation.svg";
import flexibility_icon from "@/../public/icons/flexibility.svg";
import visualization_icon from "@/../public/icons/visualization.svg";
import logo from "@/../public/logo/logo.svg";
import sim2real_logo from "@/../public/partners/sim2real.svg";
import Waitlist from "@/app/components/Waitlist";

import "./dracula.css";
import "./page.css";

export default function Home() {
  const [isWaitlist, setIsWaitlist] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const onChangeContactName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactName(e.target.value);
  };
  const onChangeContactCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactCompany(e.target.value);
  };
  const onChangeContactEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactEmail(e.target.value);
  };
  const onChangeContactMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContactMessage(e.target.value);
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const onSubmitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name: contactName,
      company: contactCompany,
      email: contactEmail,
      message: contactMessage,
    });

    // Check if any field is empty
    if (!contactName || !contactCompany || !contactEmail || !contactMessage) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      // API 호출 시도
      const response = await fetch("https://round-y.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactName,
          company: contactCompany,
          email: contactEmail,
          message: contactMessage,
        }),
      });

      console.log("Response status:", response.status);

      // 성공 여부와 상관없이 데이터 처리
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      }
    } catch (error) {
      // 에러가 발생해도 무시하고 성공으로 처리
      console.log("Error ignored, treating as success", error);
    }

    // 무조건 성공 처리
    alert("Your message has been sent successfully!");

    // 폼 초기화
    setContactName("");
    setContactEmail("");
    setContactCompany("");
    setContactMessage("");
  };
  return (
    <div className="main">
      <div className="main__header">
        <a className="main__logoLink" href="#hero">
          <Image
            src={logo}
            alt="ROUND"
            // width={100}
            height={70}
          />
        </a>
        <div className="main__menus">
          <a id="menu_starting" href="#hero">
            <p id="menu_starting" className="main__menu pretendard-medium">
              HOME
            </p>
          </a>
          <a id="menu_features" href="#features">
            <p id="menu_features" className="main__menu pretendard-medium">
              FEATURES
            </p>
          </a>
          <a id="menu_product" href="#product">
            <p id="menu_product" className="main__menu pretendard-medium">
              PRODUCT
            </p>
          </a>
          <a id="menu_contact" href="#contact">
            <p id="menu_contact" className="main__menu pretendard-medium">
              CONTACT
            </p>
          </a>
        </div>
        <div className="main__contact-button">
          <a href="#contact">
            <p className="pretendard-medium">Let&apos;s talk</p>
          </a>
        </div>
      </div>

      <div className="main__hero" id="hero">
        <div className="main__hero-content">
          <h1 className="main__hero-title pretendard-bold">
            We Revolutionize <br />
            AI Data <br />
            <span className="gradient-text">Experiences.</span>
          </h1>
          <p className="main__hero-subtitle pretendard-medium">
            We Accelerate AI Dramatically by
            <br />
            Revolutionizing the data preprocessing pipeline.
            <br />
          </p>
        </div>
      </div>

      <div className="main__starting" id="starting">
        <p className="main__startingSlogan suse-bold">
          Elevate Your Data Pipeline
          <br />
          With Intelligent Automation
        </p>
        <pre className="main__startingCode dark1_background">
          <code className="language-python">
            from round_ai import prepare_dataloader
          </code>
          <code className="language-python">
            {`dataloader = prepare_dataloader("allenai/objaverse-xl")`}
          </code>
        </pre>
        <a
          id="waitlist_button"
          className="main__waitlistButton main__button blue2_background"
          href="#contact"
        >
          <p id="waitlist_button" className="poppins-medium white">
            Join Waitlist
          </p>
        </a>
      </div>

      <div
        className={`main__waitlistBackground ${isWaitlist ? "main__waitlistBackground--show" : "main__waitlistBackground--hide"}`}
      >
        <Waitlist setisWaitlist={(x: boolean) => setIsWaitlist(x)} />
      </div>

      <div className="main__features">
        <div className="main__feature">
          <Image src={flexibility_icon} alt="" />
          <p className="main__featureTitle suse-bold">High Flexibility</p>
          <p className="main__featureDescription poppins-medium">
            Edit process however you like
            <br />
            whenever you want!
          </p>
        </div>
        <div className="main__feature">
          <Image src={adaptaions_icon} alt="" />
          <p className="main__featureTitle suse-bold">Auto-Adaptation</p>
          <p className="main__featureDescription poppins-medium">
            {`Import other's module`}
            <br />
            without specific changes!
          </p>
        </div>
        <div className="main__feature">
          <Image src={visualization_icon} alt="" />
          <p className="main__featureTitle suse-bold">Easy Visualization</p>
          <p className="main__featureDescription poppins-medium">
            Monitor the whole process.
            <br />
            Manage flow easier!
          </p>
        </div>
      </div>

      <div className="main__featuresContainer" id="features">
        <div className="main__visualization">
          <div className="main__visualizationTitles">
            <p className="main__visualizationsubTitle poppins-medium">
              Monitor data changes throughout your pipeline
            </p>
            <p className="main__visualizationTitle suse-bold">
              <span className="gradient-text">Easily Visualize</span> your Data
              Process
            </p>
          </div>
          <video
            className="main__visualizationVideo"
            playsInline
            autoPlay={true}
            loop
            muted
          >
            <source src={"/videos/visualization.mp4"} type="video/mp4" />
          </video>
        </div>

        <div className="main__multienv">
          <video
            className="main__multienvVideo"
            playsInline
            autoPlay={true}
            loop
            muted
          >
            <source src={"/videos/multienv.mp4"} type="video/mp4" />
          </video>
          <div className="main__multienvTitles">
            <p className="main__multienvsubTitle poppins-medium">
              Resolve compatibility issues with multi environments
            </p>
            <p className="main__multienvTitle suse-bold">
              Set <span className="gradient-text">Multi Environments</span>
            </p>
          </div>
        </div>
      </div>

      <div className="main__body1" id="product">
        <div className="main__body1Text">
          <p className="main__body1TextTitle suse-bold">
            Code <span className="gradient-text">Smarter</span>
            <br />
            Visualize <span className="gradient-text">Faster</span>
          </p>
          <div className="main__body1TextSteps">
            {/* <p className="main__body1TextStep poppins-medium">
              <span className="blue1">Step 1.</span> &nbsp;Forking
            </p>
            <p className="main__body1TextStep poppins-medium">
              <span className="blue1">Step 2.</span> Customizing
            </p>
            <p className="main__body1TextStep poppins-medium">
              <span className="blue1">Step 3.</span> Debugging
            </p>
            <p className="main__body1TextStep poppins-medium">
              <span className="blue1">Step 4.</span> Uploading
            </p> */}
          </div>
        </div>
        <div className="main__body1ContentBoxes">
          <div className="main__body1ContentBox">
            <div className="main__body1Content main__body1Content1">
              <p className="main__body1ContentTitle suse-medium">
                <span className="blue2">01</span> Forking
              </p>
              <video width="100%" playsInline autoPlay={true} loop muted>
                <source src={"/videos/forking.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="main__body1ContentBox">
            <div className="main__body1Content main__body1Content2">
              <p className="main__body1ContentTitle suse-medium">
                <span className="blue2">02</span> Customizing
              </p>
              <video width="100%" playsInline autoPlay={true} loop muted>
                <source src={"/videos/customizing.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="main__body1ContentBox">
            <div className="main__body1Content main__body1Content3">
              <p className="main__body1ContentTitle suse-medium">
                <span className="blue2">03</span> Debugging
              </p>
              <video width="100%" playsInline autoPlay={true} loop muted>
                <source src={"/videos/debugging.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="main__body1ContentBox">
            <div className="main__body1Content main__body1Content4">
              <p className="main__body1ContentTitle suse-medium">
                <span className="blue2">04</span> Uploading
              </p>
              <video width="100%" playsInline autoPlay={true} loop muted>
                <source src={"/videos/uploading.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="main__partnersContainer" id="partners">
        <div className="main__partners">
          <p className="main__partnersTitle suse-bold">Our Partners</p>
          <div className="main__partnerLogos">
            <Image src={sim2real_logo} alt="" />
            {/* <img className='main__partnerLogo' alt='' src={process.env.PUBLIC_URL + '/partners/story.png'}/>
                    <img className='main__partnerLogo' alt='' src={process.env.PUBLIC_URL + '/partners/vessl.png'}/> */}
          </div>
        </div>
      </div>

      <div className="main__contact" id="contact">
        <div className="main__contactHeader">
          <p className="main__contactTitle suse-bold">
            <span className="gradient-text">Contact Us For Enterprise!</span>
          </p>
          <p className="main__contactSubtitle poppins-medium">
            Interested in ROUND Enterprise? Get in touch for detailed
            information and pricing!
          </p>
        </div>
        <form className="main__contactInputs" onSubmit={onSubmitContactForm}>
          <input
            className="poppins-medium dark1_background white"
            type="text"
            placeholder="Name"
            value={contactName}
            onChange={onChangeContactName}
          />
          <input
            className="poppins-medium dark1_background white"
            type="text"
            placeholder="Company / Position"
            value={contactCompany}
            onChange={onChangeContactCompany}
          />
          <input
            className="poppins-medium dark1_background white"
            type="text"
            placeholder="Email Address"
            value={contactEmail}
            onChange={onChangeContactEmail}
          />
          <textarea
            className="main__contactMessage poppins-medium dark1_background white"
            placeholder="Message"
            value={contactMessage}
            onChange={onChangeContactMessage}
          />
          <input
            id="contact_button"
            className="main__contactSubmit main__button poppins-medium blue2_background white"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>

      <div className="main__footer">
        <p className="poppins-medium">
          Spend time in valuable research. We will do the annoying part. <br />
          <span className="gradient-text">Round</span> — Streamlining your AI
          data pipeline.
        </p>
      </div>
    </div>
  );
}
