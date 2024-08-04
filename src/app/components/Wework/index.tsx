"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  name: string;
  imgSrc: string;
  urlSite: string;
}

const postData: DataType[] = [
  {
    name: "Le faire part éthique",
    imgSrc: "/images/wework/lefairepartethique.png",
    urlSite: "https://lefairepartethique.fr",
  },
  {
    name: "Huf",
    imgSrc: "/images/wework/huf.png",
    urlSite: "https://hufworldwide.com",
  },
  {
    name: "Pelagic",
    imgSrc: "/images/wework/pelagic.png",
    urlSite: "https://pelagicgear.com/",
  },
  {
    name: "Mervin Made",
    imgSrc: "/images/wework/mervin.ico",
    urlSite: "https://www.mervinmade.com/",
  },
  {
    name: "Culture King",
    imgSrc: "/images/wework/cultureking.avif",
    urlSite: "https://www.culturekings.com.au",
  },
  {
    name: "RipCul",
    imgSrc: "/images/wework/ripcul.webp",
    urlSite: "https://www.ripcurl.com",
  },
  {
    name: "TroyLee Designs",
    imgSrc: "/images/wework/troylee.ico",
    urlSite: "https://www.troyleedesignsbike.fr",
  },
  {
    name: "SunRise",
    imgSrc: "/images/wework/sunrise.jpg",
    urlSite: "https://www.sunrisesurfshop.com/",
  },
  {
    name: "Rellevate",
    imgSrc: "/images/wework/rellevate.webp",
    urlSite: "https://rellevate.com",
  },
  {
    name: "Porcelanosa",
    imgSrc: "/images/wework/porcelanosa.ico",
    urlSite: "https://www.porcelanosa.com",
  },
  {
    name: "Mosko",
    imgSrc: "/images/wework/mosko.png",
    urlSite: "https://moskomoto.com",
  },
  {
    name: "The Levy Group",
    imgSrc: "/images/wework/thelevygroup.ico",
    urlSite: "https://www.thelevygroupinc.com",
  },
  {
    name: "FreeWaters",
    imgSrc: "/images/wework/freewaters.avif",
    urlSite: "https://freewaters.com",
  },
  {
    name: "BleuSalt",
    imgSrc: "/images/wework/bleusalt.jpg",
    urlSite: "https://bleusalt.com",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-wework py-32" id="wework-section">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
              Nos travaux et client.
            </h3>
          </div>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
                <div className="relative">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={182}
                    height={182}
                    className="inline-block m-auto modif-img"
                  />
                  <a target="_blanc" href={items.urlSite}>
                    <Image
                      src={"/images/wework/web.svg"}
                      alt="greenbg"
                      width={120}
                      height={120}
                      className="web-logo absolute inline-block position-linkedin"
                    />
                  </a>
                </div>
                <h4 className="text-4xl font-bold pt-14">{items.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
