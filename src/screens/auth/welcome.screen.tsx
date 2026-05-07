import React, { useCallback, useEffect, useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import Pagination from '../../components/molecules/pagination';
import WelcomeHeader from '../../components/molecules/WelcomeHeader';
import WelcomeSlide from '../../components/organisms/welcome.slide';
import Template from '../../components/templates/Template';
import { slides } from '../../constants/onboarding.data';
import { AUTH_SCREENS_NAME } from '../../constants/screen.names';
import { useAppNavigation } from '../../hooks/navigateTo';

const WelcomeScreen = () => {
  console.log('welcome screeen');
  
  const [index, setIndex] = useState(0);
  const swipeRef = useRef<any>(null)
  const { navigateTo } = useAppNavigation();
  const handleSkip = useCallback(() => {
    navigateTo(AUTH_SCREENS_NAME.SIGN_IN);
  }, [navigateTo]);

  const handelNext = useCallback(() => {
    if (index < slides.length - 1) {
      swipeRef.current?.scrollBy(1);
    } else {
      navigateTo(AUTH_SCREENS_NAME.SIGN_IN);
    }
  }, [index, navigateTo]);

  const handlePrev = useCallback(() => {
    if (index > 0) {
      swipeRef.current?.scrollBy(-1)
    }
  },[index])
  

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
