import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import Template from '../../components/templates/Template';
import WelcomeSlide from '../../components/organisms/welcome.slide';
import Swiper from 'react-native-swiper';
import { slides } from '../../constants/onboarding.data';
import AppText from '../../components/atoms/AppText';
import WelcomeHeader from '../../components/molecules/WelcomeHeader';
import { AUTH_SCREENS_NAME } from '../../constants/screen.names';
import { useAppNavigation } from '../../hooks/navigateTo';
import Pagination from '../../components/molecules/pagination';

const WelcomeScreen = () => {
  const [index, setIndex] = useState(0);
  const swipeRef = useRef<any>(null)
  const { navigateTo } = useAppNavigation();
  const handleSkip = () => {
    navigateTo(AUTH_SCREENS_NAME.SIGN_IN);
  };

  const handelNext = () => {
    if (index < slides.length - 1) {
      swipeRef.current?.scrollBy(1);
    } else {
      navigateTo(AUTH_SCREENS_NAME.SIGN_IN);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      swipeRef.current?.scrollBy(-1)
    }
  };

  console.log(index)

  return (
    <Template>
      <WelcomeHeader index={index} onSkip={handleSkip} />
      <Swiper
        loop={false}
        ref={swipeRef}
        showsPagination={false}
        onIndexChanged={i => setIndex(i)}
        scrollEnabled={true}
      >
        {slides.map(item => (
          <WelcomeSlide item={item} />
        ))}
      </Swiper>
      <Pagination
        index={index}
        total={slides.length}
        onNext={handelNext}
        onPrev={handlePrev}
      />
    </Template>
  );
};

export default WelcomeScreen;
