import { Flex } from "@chakra-ui/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Continents } from "../../shared/types";
import { SwiperItem } from "./SwiperItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperLink } from "./SwiperLink";

export const Slider = ({ continents }: { continents: Continents[] }) => {
  return (
    <Flex
      w={["100vw", "100vw", "70vw"]}
      height={["40vh"]}
      mx="auto"
      justify="center"
      align="center"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <SwiperItem imgs={continent.imgs}>
              <SwiperLink name={continent.name} title={continent.title} />
            </SwiperItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
