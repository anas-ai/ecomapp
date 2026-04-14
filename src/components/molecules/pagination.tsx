import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import AppButton from '../atoms/AppButton';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';

type PaginationProps = {
  index: number;
  total: number;
  onNext?: () => void;
  onPrev?: () => void;
};

const Pagination = ({ index, total, onNext, onPrev }: PaginationProps) => {
  const activeIndex = useSharedValue(index);

  const INACTIVE_WIDTH = scale(10);
  const ACTIVE_WIDTH = verticalScale(40);
  const DOT_HEIGHT = scale(10);
  const DOT_RADIUS = scale(10);

  useEffect(() => {
    activeIndex.value = withSpring(index, {
      damping: 20,
      stiffness: 150,
    });
  }, [index]);
  return (
    <View style={styles.container}>
      {index > 0 ? (
        <AppButton
          title="Prev"
          onPress={onPrev}
          variant="h5"
          weight="Bold"
          style={{ color: colors.darkGray }}
        />
      ) : null}

      <View style={styles.dotContainer}>
        {Array.from({ length: total }).map((_, i) => {
          const animatedStyle = useAnimatedStyle(() => {
            const isActive = Math.round(activeIndex.value) === i;

            return {
              width: withSpring(isActive ? ACTIVE_WIDTH : INACTIVE_WIDTH, {
                damping: 10,
                stiffness: 50,
              }),
              backgroundColor: interpolateColor(
                activeIndex.value,
                [i - 0.5, i, i + 0.5],
                [colors.darkGray, colors.greyColor, colors.darkGray],
              ),
            };
          });

          return (
            <Animated.View key={i} style={[styles.baseDot, animatedStyle]} />
          );
        })}
      </View>
      <View>
        <AppButton
          onPress={onNext}
          style={{ color: colors.red }}
          variant="h5"
          weight="Bold"
          title={index === total - 1 ? 'Get Started' : 'Next'}
        />
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    width: '100%',
  },
  dotContainer: { flexDirection: 'row', alignItems: 'center', gap: scale(4) },
  dot: {
    backgroundColor: colors.darkGray,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  activedots: {
    backgroundColor: colors.greyColor,
    width: verticalScale(40),
    height: scale(10),
    borderRadius: scale(10),
  },
  placeholder: {
    width: scale(80),
    height: scale(40),
  },
  baseDot: {
    height: scale(10),
    borderRadius: scale(10),
  },
});
